package com.example.demo.controller;

import com.example.demo.dto.user.UserResponse;
import com.example.demo.mapper.UserMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/user")
public class UserController {

    private final UserMapper userMapper;

    @GetMapping("/getUserById")
    public ResponseEntity<UserResponse> getUserById(@RequestParam Long userId){
        return ResponseEntity.ok(userMapper.findUserById(userId));
    }

    @GetMapping("/addUser")
    public void addUser(@RequestParam String firstName, String lastName,  String eMail, String pass ){
        userMapper.addUser(firstName, lastName, eMail, pass);
    }

    @PostMapping("/edit")
    public void editUser(@RequestParam String firstName, String lastName, String eMail, String pass, Long id){
        userMapper.updateUser(firstName,lastName,eMail,pass,id);
    }

    @DeleteMapping("/deleteUser")
    public void deleteUserById(@RequestParam Long id){
        userMapper.deleteUser(id);
    }






}

