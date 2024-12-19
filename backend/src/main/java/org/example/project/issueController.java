package org.example.project;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/issues")
public class issueController {
    @Autowired
    private issueService issueService;
    @Autowired
    private UserService userService;
    @Autowired
    private jwtutils jwtutils;

    @GetMapping("/issue/{issueId}")
    public ResponseEntity<Issue> getIssueById(@PathVariable Long issueId) throws Exception {
        if (issueId == null) {
            throw new IllegalArgumentException("issueId must not be null");
        }
        return ResponseEntity.ok(issueService.getIssueById(issueId));
    }

    @GetMapping("/project/{projectId}")
    public ResponseEntity<List<Issue>> getIssueByProjectId(@PathVariable Long projectId) throws Exception {
        if (projectId == null) {
            throw new IllegalArgumentException("projectId must not be null");
        }
        return ResponseEntity.ok(issueService.getIssueByProjectId(projectId));
    }

    @PostMapping("/createIssue")
    public ResponseEntity<?> createIssue(@RequestBody issueRequest issue, @RequestParam String projectId,
                                         @RequestHeader("Authorization") String authorizationHeader) throws Exception {
        System.out.println("projectId: " + projectId);
        System.out.println("issueRequest: " + issue);

        // Validate inputs
        if (issue == null) {
            throw new IllegalArgumentException("IssueRequest must not be null");
        }

        if (projectId == null || projectId.isEmpty()) {
            throw new IllegalArgumentException("ProjectId must not be null or empty");
        }

        String token = authorizationHeader.replace("Bearer ", "").trim();

        if (token.isEmpty()) {
            throw new RuntimeException("Authorization token is empty");
        }

        if (!token.matches("^[A-Za-z0-9-_=]+\\.[A-Za-z0-9-_=]+\\.[A-Za-z0-9-_.+/=]*$")) {
            throw new RuntimeException("Invalid JWT structure");
        }

        String email = jwtutils.extractEmailFromToken(token);
        User user = userService.findUserByEmail(email);


            Issue createdIssue = issueService.createIssue(issue, user);
            issuedto issueDTO = new issuedto();
            issueDTO.setDescription(createdIssue.getDescription());
            issueDTO.setDueDate(createdIssue.getDueDate());
            issueDTO.setId(createdIssue.getId());
            issueDTO.setPriority(createdIssue.getPriority());
            issueDTO.setProject(createdIssue.getProject());
            issueDTO.setProjectId(createdIssue.getProjectID());
            issueDTO.setStatus(createdIssue.getStatus());
            issueDTO.setTitle(createdIssue.getTitle());
            issueDTO.setTags(createdIssue.getTags());
            issueDTO.setAssignee(createdIssue.getAssignee());
            return ResponseEntity.ok(issueDTO);

    }

    @DeleteMapping("/{issueId}")
    public ResponseEntity<MessageResponse> deleteIssue(@PathVariable Long issueId,
                                                       @RequestHeader("Authorization") String token) throws Exception {
        if (issueId == null) {
            throw new IllegalArgumentException("issueId must not be null");
        }

        String email = jwtutils.extractEmailFromToken(token);
        if (email == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }

        User user = userService.findUserByEmail(email);
        issueService.deleteIssue(issueId,user.getId());
        MessageResponse res = new MessageResponse();
        res.setMessage("Issue deleted");

        return ResponseEntity.ok(res);
    }

    @PutMapping("/{issueId}/assignee/{userId}")
    public ResponseEntity<Issue> addUserToIssue(@PathVariable Long issueId,
                                                @PathVariable Long userId) throws Exception {
        if (issueId == null || userId == null) {
            throw new IllegalArgumentException("issueId and userId must not be null");
        }

        Issue issue = issueService.addUserToIssue(issueId, userId);
        return ResponseEntity.ok(issue);
    }

    @PutMapping("/{issueId}/status/{status}")
    public ResponseEntity<Issue> updateIssueStatus(@PathVariable String status,
                                                   @PathVariable Long issueId) throws Exception {
        if (issueId == null) {
            throw new IllegalArgumentException("issueId must not be null");
        }

        Issue issue = issueService.updateStatus(issueId, status);
        return ResponseEntity.ok(issue);
    }
}
