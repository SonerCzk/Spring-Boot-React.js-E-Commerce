package com.example.demo.dto.user;

import lombok.Data;

@Data
public class UserResponse {

    private Long user_id;
    private String firstName;
    private String lastName;
    private String userEmail;
    private String password;

}
