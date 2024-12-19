package org.example.project;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import org.example.project.Comment;

@Service
public class commentServiceimpl implements commentService {
    @Autowired
    private commentRepository commentRepository;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private issueRepository issueRepository;


    @Override
    public Comment createComment(String content, Long issueid, Long userid) throws Exception {
        Optional<Issue> issueOptional = issueRepository.findById(issueid);
        Optional<User> userOptional = userRepository.findById(userid);

        if (issueOptional.isEmpty()) {
            throw new Exception("issue not found with id " + issueid);
        }
        if(userOptional.isEmpty()) {
            throw new Exception("user not found with id " + userid);
        }

        Issue issue = issueOptional.get();
        User user = userOptional.get();

        Comment comment = new Comment();
        comment.setIssue(issue);
        comment.setUser(user);
        comment.setCreatedDateTime(LocalDate.from(LocalDateTime.now()));
        comment.setContent(content);

        Comment savedComment = commentRepository.save(comment);

        issue.getComments().add(savedComment);

        return savedComment;
    }

    @Override
    public void deleteComment(Long commentId, Long userId) throws Exception {
        Optional<Comment> commentOptional = commentRepository.findById(commentId);
        Optional<User> userOptional = userRepository.findById(userId);

        if (commentOptional.isEmpty()) {
            throw new Exception("comment not found with id " + commentId);
        }
        if(userOptional.isEmpty()) {
            throw new Exception("user not found with id " + userId);
        }

        Comment comment = commentOptional.get();
        User user = userOptional.get();

        if (comment.getUser().equals(user)) {
            commentRepository.delete(comment);
        } else {
            throw new Exception("User does not have permission to delete this comment!");
        }
    }

    @Override
    public List<Comment> findCommentByIssueId(Long issueId) {
        return commentRepository.findByIssueId(issueId);
    }
}
