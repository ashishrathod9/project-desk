package org.example.project;
import lombok.Data;
@Data
public class MessageRequest {
    private Long senderId;
    private String content;
    private Long projectid;
}
