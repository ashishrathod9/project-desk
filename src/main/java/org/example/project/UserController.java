package org.example.project;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserService userService;
    @Autowired
    private SubscriptionService subscriptionService;

    @PostMapping("/signup")
    public ResponseEntity<?> register(@RequestBody User user) {
        try {
            String token = userService.registerUser(user);
            subscriptionService.createSubscription(user);
            Map<String, String> response = new HashMap<>();
            response.put("token", token);
            response.put("message", "User registered successfully!");
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Registration failed: " + e.getMessage());
        }
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestParam String username, @RequestParam String password) {
        String token = userService.loginUser(username, password);
        if (token != null) {
            Map<String, String> response = new HashMap<>();
            response.put("token", token);
            response.put("message", "Login successful!");
            return ResponseEntity.ok(response);
        }
        return ResponseEntity.status(401).body("Invalid username or password!");
    }
}