package org.example.project;

public interface SubscriptionService {
    Subscription createSubscription(User user);
    Subscription getUserSubscription(Long userId)throws Exception;
    Subscription updateUserSubscription(Long userId,PlanType planType)throws Exception;
    boolean isvalid(Subscription subscription);


}
