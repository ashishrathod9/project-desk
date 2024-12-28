package org.example.project;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class userServiceforProjectImpl implements UserServiceforProject {

    @Autowired
    private UserRepository userRepository;

    @Override
    public User findUserByEmail(String email) throws Exception {
        // Find user by email using the UserRepository
        User user = userRepository.findByEmail(email);
        if (user==null) {

            throw new Exception("User not found with email: " + email);
        }
        return user;
    }

    @Override
    public User findUserByUsername(String username) throws Exception {
        // Find user by username using the UserRepository
        Optional<User> user = Optional.ofNullable(userRepository.findByUsername(username));
        if (user.isPresent()) {
            return user.get();
        } else {
            throw new Exception("User not found with username: " + username);
        }
    }

    @Override
    public User findUserById(long id) throws Exception {
        // Find user by ID using the UserRepository
        Optional<User> user = userRepository.findById(id);
        if (user.isPresent()) {
            return user.get();
        } else {
            throw new Exception("User not found with ID: " + id);
        }
    }

    @Override
    public User upadateUsersProjectSize(User user, int number) throws Exception {
        user.setProjectSize(user.getProjectSize()+number); // Assuming `projectSize` is a field in User
        return userRepository.save(user);
    }


}