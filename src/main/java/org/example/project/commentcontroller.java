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
            @RequestHeader("Authorization") String jwt) throws Exception {
        String email = jwtutils.extractEmailFromToken(jwt);
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
            @RequestHeader("Authorization") String jwt) throws Exception {
        String email = jwtutils.extractEmailFromToken(jwt);
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
    public ResponseEntity<List<Comment>> getCommentsByIssueId(
            @PathVariable Long issueId) {
        List<Comment> comments = commentService.findCommentByIssueId(issueId);
        return new ResponseEntity<>(comments, HttpStatus.OK);
    }
}