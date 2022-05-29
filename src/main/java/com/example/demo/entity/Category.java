package com.example.demo.entity;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
public class Category {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "category_id")
    private Long cat_id;

    @Column(
            name = "category_name",nullable = false
    )
    private String cat_name;
}
