package com.example.demo.dto.user;

import com.sun.istack.NotNull;
import lombok.Data;

@Data
public class UserRequest {

    @NotNull
    private String firstName;

    @NotNull
    private String lastName;

    @NotNull
    private String userEmail;

    @NotNull
    private String password;

}
