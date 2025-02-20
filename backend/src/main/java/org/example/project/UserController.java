package org.example.project;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
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

    @Autowired
    private jwtutils jwtutils;

    // Register user
    @PostMapping("/signup")
    public ResponseEntity<?> register(@RequestBody User user) {
        try {
            String token = userService.registerUser(user);
            String username = jwtutils.getUsernameFromToken(token);
            subscriptionService.createSubscription(user);
            Map<String, String> response = new HashMap<>();
            response.put("jwt", token);
            response.put("message", "User registered successfully!");
            response.put("username", username);
            System.out.println(response);
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Registration failed: " + e.getMessage());
        }
    }



    // Login user
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Map<String, String> loginData) {
        String username = loginData.get("username");
        String password = loginData.get("password");

        // Ensure username and password are provided
        if (username == null || password == null) {
            return ResponseEntity.status(400).body("Required parameter 'username' or 'password' is missing.");
        }

        String token = userService.loginUser(username, password);
        if (token != null) {
            Map<String, String> response = new HashMap<>();
            response.put("jwt", token);
            response.put("message", "Login successful!");
            return ResponseEntity.ok(response);
        }
        return ResponseEntity.status(401).body("Invalid username or password!");
    }

    // Get user profile (protected)
    @GetMapping("/profile")
    public ResponseEntity<?> getUserProfile(Authentication authentication, @RequestHeader("Authorization") String authorizationHeader) {


        try {
            String token = authorizationHeader.startsWith("Bearer ") ? authorizationHeader.substring(7) : authorizationHeader;
            String username = jwtutils.getUsernameFromToken(token);

            if (username == null) {
                return ResponseEntity.status(404).body("User not found");
            }

            User user = userService.findByUsername(username);


            return ResponseEntity.ok(user);
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Error fetching user profile: " + e.getMessage());
        }
    }


}
