package org.example.project;

import jakarta.mail.MessagingException;
import org.antlr.v4.runtime.Token;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class invitationServiceImpl implements invitationService {
    @Autowired
    private invitationRepository invitationRepository;
    @Autowired
    private EmailService emailService;
    @Override
    public void sendInvitation(String email, Long projectid) throws MessagingException {
        String invitationToken= UUID.randomUUID().toString();
        invitation i=new invitation();
        i.setEmail(email);
        i.setProjectid(projectid);
        i.setToken(invitationToken);

        invitationRepository.save(i);

        //String invitationLink="http://localhost:5173/acceptinvitation?token="+invitationToken;
        String invitationLink="https://project-desk-ndtw.vercel.app/acceptinvitation?token="+invitationToken;
        emailService.sendEmailWithToken(email,invitationLink);
    }

    @Override
    public invitation acceptInvitation(String token, Long usetrId) throws Exception {
        invitation i=invitationRepository.findByToken(token);
        if(i==null)
        {
            throw new Exception("fbfdhjfgbfj");
        }
        return i;
    }

    @Override
    public String getTokenByUserMail(String useremail) {
        invitation i=invitationRepository.findByEmail(useremail);
        return i.getToken();
    }

    @Override
    public void deleteToken(String token) {
        invitation i=invitationRepository.findByToken(token);

        invitationRepository.delete(i);

    }
}
