package org.example.project;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;

@Service
public class SubscriptionServiceimpl implements SubscriptionService {
    @Autowired
    private SubcriptionRepository subscriptionRepository;

    /**
     * Creates a new subscription for a user with default FREE plan
     */
    @Override
    public Subscription createSubscription(User user) {
        Subscription subscription = new Subscription();

        subscription.setUser(user);
        subscription.setSubcriptonstartdate(LocalDate.now());
        subscription.setSubcriptonenddate(LocalDate.now().plusMonths(12));
        subscription.setIsvalid(true);
        subscription.setPlanType(PlanType.FREE);

        return subscriptionRepository.save(subscription);
    }

    @Override
    public Subscription getUserSubscription(Long userId) throws Exception {
        Subscription subscription = subscriptionRepository.findByUserId(userId);

        if(!isvalid(subscription)) {
            subscription.setPlanType(PlanType.FREE);
            subscription.setSubcriptonenddate(LocalDate.now().plusMonths(12));
            subscription.setSubcriptonstartdate(LocalDate.now());
        }

        return subscriptionRepository.save(subscription);
    }

    @Override
    public Subscription updateUserSubscription(Long userId, PlanType planType) throws Exception {
        Subscription subscription = subscriptionRepository.findByUserId(userId);
        subscription.setPlanType(planType);
        subscription.setSubcriptonstartdate(LocalDate.now());

        // Set subscription length based on plan type
        if(planType.equals(PlanType.ANNUALLY)) {
            subscription.setSubcriptonenddate(LocalDate.now().plusMonths(12));
        } else {
            subscription.setSubcriptonenddate(LocalDate.now().plusMonths(1));
        }

        return subscriptionRepository.save(subscription);
    }

    @Override
    public boolean isvalid(Subscription subscription) {
        if(subscription.getPlanType().equals(PlanType.FREE)) {
            return true;
        }

        LocalDate endDate = subscription.getSubcriptonenddate();
        LocalDate currentDate = LocalDate.now();
        return endDate.isAfter(currentDate);

    }



}
