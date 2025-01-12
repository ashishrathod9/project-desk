package org.example.project;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import com.fasterxml.jackson.annotation.JsonBackReference;

import java.time.LocalDateTime;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Messages {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String content;

    private LocalDateTime createdAt;

    @ManyToOne
    private User sender;

    @ManyToOne
    @JsonBackReference // Prevent infinite recursion
    private Chat chat;

    public void setId(Long id) {
        this.id = id;
    }

    public Long getId() {
        return id;
    }
}