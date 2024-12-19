package org.example.project;

public interface UserServiceforProject {
    User findUserByEmail(String email)throws Exception;
    User findUserByUsername(String username)throws Exception;
    User findUserById(long id)throws Exception;
    User upadateUsersProjectSize(User user,int number)throws Exception;

}
