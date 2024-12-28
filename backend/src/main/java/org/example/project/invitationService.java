package org.example.project;

import jakarta.mail.MessagingException;

public interface invitationService {

    public void sendInvitation(String email,Long projectid) throws MessagingException;
    public invitation acceptInvitation(String token,Long usetrId) throws Exception;
    public String getTokenByUserMail(String useremail);
    void deleteToken(String token);

}
