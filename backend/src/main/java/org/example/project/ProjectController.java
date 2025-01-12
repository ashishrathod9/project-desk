package org.example.project;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.MalformedJwtException;
import io.jsonwebtoken.SignatureException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/projects")
public class   ProjectController {

    @Autowired
    private ProjectService projectService;

    @Autowired
    private UserService userService;

    @Autowired
    private userServiceforProjectImpl userServiceforProjectImpl;

    @Autowired
    private invitationService invitationService;

    @Autowired
    private jwtutils jwtUtils; // Inject JwtUtils

    // Method to extract email from the Authorization header
    private String extractEmailFromToken(String authorizationHeader) {
        if (authorizationHeader != null && authorizationHeader.startsWith("Bearer ")) {
            String token = authorizationHeader.substring(7); // Remove "Bearer " prefix
            if (jwtUtils.validateToken(token)) {
                return jwtUtils.getEmailFromToken(token);
            }
        }
        return null;
    }

    // Endpoint to get projects by category, tag, or email
    @GetMapping
    public ResponseEntity<List<Project>> getProjects(
            @RequestParam(required = false) String category,
            @RequestParam(required = false) String tag,
            @RequestHeader("Authorization") String authorizationHeader // Get token from header
    ) throws Exception {
        System.out.println("Category: " + category); // Debugging log
        System.out.println("Tag: " + tag); // Debugging log
        String email = extractEmailFromToken(authorizationHeader);
        if (email == null) {
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        }
        User user = userServiceforProjectImpl.findUserByEmail(email);
        List<Project> projects = projectService.getProjectByTeam(user, category, tag);
        return new ResponseEntity<>(projects, HttpStatus.OK);
    }

    // Endpoint to get a project by project ID
    @GetMapping("/{projectId}")
    public ResponseEntity<Project> getProjectsById(
            @PathVariable Long projectId,
            @RequestHeader("Authorization") String authorizationHeader // Get token from header
    ) throws Exception {
        String email = extractEmailFromToken(authorizationHeader);
        if (email == null) {
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        }
        User user = userServiceforProjectImpl.findUserByEmail(email);
        Project project = projectService.getProjectById(projectId);
        return new ResponseEntity<>(project, HttpStatus.OK);
    }

    // Endpoint to create a new project
    @PostMapping
    public ResponseEntity<Project> createProject(
            @RequestHeader("Authorization") String authorizationHeader, // Get token from header
            @RequestBody Project project
    ) throws Exception {
        String email = extractEmailFromToken(authorizationHeader);
        if (email == null) {
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        }
        User user = userServiceforProjectImpl.findUserByEmail(email);
        Project createdProject = projectService.createProject(project, user);
        return new ResponseEntity<>(createdProject, HttpStatus.CREATED);
    }

    // Endpoint to update an existing project
    @PutMapping("/{projectId}")
    public ResponseEntity<Project> updateProject(
            @PathVariable Long projectId,
            @RequestHeader("Authorization") String authorizationHeader, // Get token from header
            @RequestBody Project updatedProject
    ) throws Exception {
        String email = extractEmailFromToken(authorizationHeader);
        if (email == null) {
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        }
        User user = userServiceforProjectImpl.findUserByEmail(email);
        Project project = projectService.updateProject(updatedProject, projectId);
        if (project != null) {
            return new ResponseEntity<>(project, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    // Endpoint to delete a project by project ID
    @DeleteMapping("/{projectId}")
    public ResponseEntity<MessageResponse> deleteProject(
            @PathVariable Long projectId,
            @RequestHeader("Authorization") String authorizationHeader // Get token from header
    ) throws Exception {
        String email = extractEmailFromToken(authorizationHeader);
        if (email == null) {
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        }
        User user = userServiceforProjectImpl.findUserByEmail(email);
        projectService.deleteProject(projectId, user.getId());
        MessageResponse messageResponse = new MessageResponse("Project deleted successfully");
        return new ResponseEntity<>(messageResponse, HttpStatus.OK);
    }

    // Endpoint to search projects by keyword
    @GetMapping("/search")
    public ResponseEntity<List<Project>> searchProjects(
            @RequestParam(required = false) String keyword,
            @RequestHeader("Authorization") String authorizationHeader) {
        try {
            // Extract email from JWT token
            String email = extractEmailFromToken(authorizationHeader);
            if (email == null) {
                return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
            }

            // Fetch user by email
            User user = userService.findUserByEmail(email);
            if (user == null) {
                return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
            }

            // Fetch projects
            List<Project> projects = projectService.serachProjects(keyword, user);
            return new ResponseEntity<>(projects, HttpStatus.OK);

        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }



    // Endpoint to get chat by project ID
    @GetMapping("/{projectId}/chat")
    public ResponseEntity<Chat> getChatByProjectId(
            @PathVariable Long projectId,
            @RequestHeader("Authorization") String authorizationHeader // Get token from header
    ) throws Exception {
        String email = extractEmailFromToken(authorizationHeader);
        if (email == null) {
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        }
        User user = userServiceforProjectImpl.findUserByEmail(email);
        Chat chat = projectService.getChatByProjectId(projectId);
        return new ResponseEntity<>(chat, HttpStatus.OK);
    }

    // Endpoint to invite a user to a project
    @PostMapping("/invite")
    public ResponseEntity<MessageResponse> inviteProject(
            @RequestHeader("Authorization") String authorizationHeader, // Get token from header
            @RequestBody invitereq req
    ) {
        try {
            String email = extractEmailFromToken(authorizationHeader);
            System.out.println("Email: " + email);
            if (email == null) {
                return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
            }

            User user = userServiceforProjectImpl.findUserByEmail(email);

            // Ensure user exists before proceeding
            if (user == null) {
                return new ResponseEntity<>(new MessageResponse("User not found"), HttpStatus.NOT_FOUND);
            }

            // Send invitation
            invitationService.sendInvitation(req.getEmail(), req.getProjectid());

            // Response on success
            return ResponseEntity.ok(new MessageResponse("Invite successful"));
        } catch (Exception ex) {
            // Log the error for debugging
            ex.printStackTrace();
            return new ResponseEntity<>(new MessageResponse("Invitation failed: " + ex.getMessage()), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // Endpoint to accept an invitation
    @GetMapping("/accept-invitation")
    public ResponseEntity<invitation> acceptInvitation(
            @RequestHeader("Authorization") String authorizationHeader, // Get token from header
            @RequestParam String token
    ) throws Exception {
        String email = extractEmailFromToken(authorizationHeader);
        if (email == null) {
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        }
        User user = userServiceforProjectImpl.findUserByEmail(email);
        invitation invitation = invitationService.acceptInvitation(token, user.getId());
        projectService.addUserToProject(invitation.getProjectid(), user.getId());
        return new ResponseEntity<>(invitation, HttpStatus.ACCEPTED);
    }
}