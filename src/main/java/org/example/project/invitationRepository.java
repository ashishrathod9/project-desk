package org.example.project;

import org.springframework.data.jpa.repository.JpaRepository;

public interface invitationRepository extends JpaRepository<invitation, Long> {


    invitation findByEmail(String email);
    invitation findByToken(String token);
}
