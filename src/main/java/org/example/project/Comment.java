package org.example.project;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Comment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private LocalDate createdDateTime;

    private String content;

    @ManyToOne
    private User user;

    @ManyToOne
    @JoinColumn(name = "issue_id")  // Ensure this matches the column in the database
    private Issue issue;

    public void setId(Long id) {
        this.id = id;
    }

    public Long getId() {
        return id;
    }
}