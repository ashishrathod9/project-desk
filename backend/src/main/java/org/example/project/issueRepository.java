package org.example.project;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface issueRepository extends JpaRepository<Issue,Long> {

    public List<Issue> findByProjectID(Long projectId);
}
