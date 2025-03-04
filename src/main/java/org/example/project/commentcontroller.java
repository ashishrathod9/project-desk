package org.example.project;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/comments")
public class commentcontroller {

    @Autowired
    private commentService commentService;

    @Autowired
    private UserService userService;

    @Autowired
    private jwtutils jwtutils;

    @PostMapping
    public ResponseEntity<Comment> createComment(
            @RequestBody commentreq req,
            @RequestHeader("Authorization") String authorizationHeader
    ) throws Exception {
        String token = authorizationHeader.replace("Bearer ", "").trim();

        if (token.isEmpty()) {
            throw new RuntimeException("Authorization token is empty");
        }

        if (!token.matches("^[A-Za-z0-9-_=]+\\.[A-Za-z0-9-_=]+\\.[A-Za-z0-9-_.+/=]*$")) {
            throw new RuntimeException("Invalid JWT structure");
        }

        String email = jwtutils.extractEmailFromToken(token);
        if (email == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }

        User user = userService.findUserByEmail(email);
        Comment createdComment = commentService.createComment(
                req.getContent(),
                req.getIssueId(),
                user.getId());
        return new ResponseEntity<>(createdComment, HttpStatus.CREATED);
    }

    @DeleteMapping("/{commentId}")
    public ResponseEntity<MessageResponse> deleteComment(
            @PathVariable Long commentId,
            @RequestHeader("Authorization") String authorizationHeader) throws Exception {
        String token = authorizationHeader.replace("Bearer ", "").trim();

        if (token.isEmpty()) {
            throw new RuntimeException("Authorization token is empty");
        }

        if (!token.matches("^[A-Za-z0-9-_=]+\\.[A-Za-z0-9-_=]+\\.[A-Za-z0-9-_.+/=]*$")) {
            throw new RuntimeException("Invalid JWT structure");
        }

        String email = jwtutils.extractEmailFromToken(token);
        if (email == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }

        User user = userService.findUserByEmail(email);
        commentService.deleteComment(commentId, user.getId());
        MessageResponse res = new MessageResponse();
        res.setMessage("comment deleted successfully");
        return new ResponseEntity<>(res, HttpStatus.OK);
    }

    @GetMapping("/{issueId}")
    public ResponseEntity<List<Comment>> getCommentsByIssueId(@PathVariable Long issueId) {
        System.out.println("Received issueId: " + issueId);
        List<Comment> comments = commentService.findCommentByIssueId(issueId);
        if (comments.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(comments, HttpStatus.OK);
    }
}