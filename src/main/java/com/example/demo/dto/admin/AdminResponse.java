package com.example.demo.dto.admin;

import lombok.Data;

@Data
public class AdminResponse {
    private Long user_id;
    private String firstName;
    private String lastName;
    private String userEmail;
    private String password;
}
