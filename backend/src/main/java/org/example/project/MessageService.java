package org.example.project;
import java.util.List;
public interface MessageService {
    Messages sendMessage(Long senderid,Long chatid,String content)throws Exception;

    List<Messages> getMessages(Long projectid)throws Exception;
}
