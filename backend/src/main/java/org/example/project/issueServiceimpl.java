package org.example.project;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;
@Service
public class issueServiceimpl implements issueService {
    @Autowired
    private issueRepository issueRepository;
    @Autowired
    private ProjectService projectService;
    @Autowired
    private UserServiceforProject userServiceforProject;

    @Override
    public Issue getIssueById(Long issueId) throws Exception {
        Optional<Issue> issue = issueRepository.findById(issueId);
        if (issue.isPresent()) {
            return issue.get();
        }
        throw new Exception("No issues found with issueId " + issueId);
    }

    @Override
    public List<Issue> getIssueByProjectId(Long projectId) throws Exception {
        return issueRepository.findByProjectID(projectId);
    }

    @Override
    public Issue createIssue(issueRequest issueRequest, User user) throws Exception {
        Long projectId = issueRequest.getProjectId(); // Ensure this is not null
        Project project = projectService.getProjectById(issueRequest.getProjectId());

        Issue issue = new Issue();
        issue.setTitle(issueRequest.getTitle());
        issue.setDescription(issueRequest.getDescription());
        issue.setStatus(issueRequest.getStatus());

        issue.setProjectID(issueRequest.getProjectId());

        issue.setProject(project);

        return issueRepository.save(issue);
    }



    @Override
    public void deleteIssue(Long issueId, Long userId) throws Exception {
        getIssueById(issueId);
        issueRepository.deleteById(issueId);
    }

    @Override
    public Issue addUserToIssue(Long issueId, Long userId) throws Exception {
        User user=userServiceforProject.findUserById(userId);
        Issue issue=getIssueById(issueId);
        issue.setAssignee(user);

        return issueRepository.save(issue);
    }

    @Override
    public Issue updateStatus(Long issueId, String status) throws Exception {
        Issue issue=getIssueById(issueId);
        issue.setStatus(status);
        return issueRepository.save(issue);
    }
}
