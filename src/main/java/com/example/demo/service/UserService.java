package com.example.demo.service;

import com.example.demo.entity.User;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface UserService {

    List<User> findAllUsers();

    User findUserById(Long userId);

    void addUser(String firstName, String lastName,  String eMail, String pass);

    void updateUser(String firstName, String lastName,  String eMail, String pass, Long id);

    void deleteUser(Long id);


}
