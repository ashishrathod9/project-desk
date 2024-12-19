package org.example.project;
import lombok.Data;
import java.time.LocalDate;
@Data
public class issueRequest {


    private Long id;
    private String title;
    private String description;
    private String status;
    private Long projectId;
    private String priority;
    private LocalDate dueDate;

}
