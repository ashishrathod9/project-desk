package org.example.project;

import java.util.List;

public interface commentService {


    Comment createComment(String  comment,Long issueid,Long userid) throws Exception;
    void deleteComment(Long commentid,Long userid) throws Exception;


    List<Comment> findCommentByIssueId(Long issueid);
}
