package org.example.project;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("api/project/")
public class MesageController {

    @Autowired
    private UserService userService;

    @Autowired
    private ProjectService projectService;

    @Autowired
    private MessageService messageService;

    @PostMapping("/send")
    public ResponseEntity<Messages> sendMessage(@RequestBody MessageRequest request) throws Exception {
        User user = userService.findUserById(request.getSenderId());
        Chat chats = projectService.getProjectById(request.getProjectid()).getChat();

        if (chats == null) throw new Exception("Chats not found");

        Messages sentMessage = messageService.sendMessage(
                request.getSenderId(),
                request.getProjectid(),
                request.getContent()
        );

        // Create a new Messages instance for response to avoid circular references
        Messages responseMessage = new Messages();
        responseMessage.setId(sentMessage.getId());
        responseMessage.setContent(sentMessage.getContent());
        responseMessage.setCreatedAt(sentMessage.getCreatedAt());

        // Set sender information, excluding full user details to avoid loops
        User sender = new User();
        sender.setId(user.getId());
        sender.setUsername(user.getUsername());
        responseMessage.setSender(sender);

        return ResponseEntity.ok(responseMessage);
    }

    @GetMapping("/chat/{projectId}")
    public ResponseEntity<List<Messages>> getMessagesByChatId(@PathVariable Long projectId) throws Exception {
        // Retrieve messages for the specified project ID
        List<Messages> messages = messageService.getMessages(projectId);

        // Create a new list to hold the simplified messages
        List<Messages> responseMessages = new ArrayList<>();

        for (Messages message : messages) {
            // Create a new Messages instance for the response
            Messages responseMessage = new Messages();
            responseMessage.setId(message.getId());
            responseMessage.setContent(message.getContent());
            responseMessage.setCreatedAt(message.getCreatedAt());

            // Set sender information, excluding full user details to avoid loops
            User sender = message.getSender();
            if (sender != null) { // Ensure sender is not null
                User responseSender = new User();
                responseSender.setId(sender.getId());
                responseSender.setUsername(sender.getUsername());
                responseSender.setEmail(sender.getEmail()); // Set email if available
                responseMessage.setSender(responseSender);
            }

            // Add the simplified message to the response list
            responseMessages.add(responseMessage);
        }

        return ResponseEntity.ok(responseMessages);
    }
}
