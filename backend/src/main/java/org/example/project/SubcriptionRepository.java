package org.example.project;

import org.springframework.data.jpa.repository.JpaRepository;

public interface SubcriptionRepository extends JpaRepository<Subscription,Long> {
    Subscription findByUserId(Long userrid);
}
