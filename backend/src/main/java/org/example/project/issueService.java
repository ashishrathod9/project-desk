package org.example.project;

import java.util.List;
import java.util.Optional;

public interface issueService {

    Issue getIssueById(Long issueId) throws Exception;

    List<Issue> getIssueByProjectId(Long ProjectID) throws Exception;

    Issue createIssue(issueRequest issue,User user) throws Exception;

    void deleteIssue(Long issueId, Long userId) throws Exception;

    Issue addUserToIssue(Long issueId, Long userId) throws Exception;

    Issue updateStatus(Long issueId, String status) throws Exception;
}
