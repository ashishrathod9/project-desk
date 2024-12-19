package org.example.project;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface commentRepository extends JpaRepository<Comment,Long> {

    List<Comment> findByIssueId(Long issueId);
}
