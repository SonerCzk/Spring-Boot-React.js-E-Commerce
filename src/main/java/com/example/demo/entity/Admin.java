package com.example.demo.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@AllArgsConstructor
@NoArgsConstructor
@Entity
@Data
@Table(name = "admin")
public class Admin {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long user_id;

    @Column(
            name = "first_name",nullable = false
    )
    private String firstName;

    @Column(
            name = "last_name",nullable = false
    )
    private String lastName;

    @Column(
            name = "user_email",nullable = false
    )
    private String userEmail;

    @Column(
            name = "user_password",nullable = false
    )
    private String password;


}
