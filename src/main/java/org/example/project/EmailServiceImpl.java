package org.example.project;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.MailSendException;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

@Service
public class EmailServiceImpl implements EmailService {
    @Autowired
    private JavaMailSender mailSender;
    @Override
    public void sendEmailWithToken(String userEmail, String link) throws MessagingException {
        MimeMessage mimeMessage=mailSender.createMimeMessage();
        MimeMessageHelper mimeMessageHelper=new MimeMessageHelper(mimeMessage,"utf-8");
         String subject="Project team";
         String text="click here"+link;

         mimeMessageHelper.setSubject(subject);
         mimeMessageHelper.setText(text,true);
         mimeMessageHelper.setTo(userEmail);

         try {
             mailSender.send(mimeMessage);
         }
         catch (MailSendException e) {
             throw new RuntimeException(e);
         }

    }
}
