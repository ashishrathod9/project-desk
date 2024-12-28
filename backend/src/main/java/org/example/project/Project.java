package org.example.project;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Project {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String description;
    private String category;





      private List<String> tags = new ArrayList<>();


      @JsonIgnore
      @OneToOne(mappedBy = "project", cascade = CascadeType.ALL, orphanRemoval = true)
      private Chat chat;
      @ManyToOne
      private User owner;
    @OneToMany(mappedBy = "project", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonManagedReference
    private List<Issue> issue = new ArrayList<>();


      @ManyToMany
      private List<User> team = new ArrayList<>();









    public void setId(Long id) {
        this.id = id;
    }

    public Long getId() {
        return id;
    }
}
