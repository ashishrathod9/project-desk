package org.example.project;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

@Controller
public class webchatcontroller {

    @MessageMapping("/sendMessage") // Handle messages sent to /app/sendMessage
    @SendTo("/topic/messages") // Broadcast messages to /topic/messages
    public Messages sendMessage(Messages message) {
        return message; // Broadcast the message as is
    }
}
