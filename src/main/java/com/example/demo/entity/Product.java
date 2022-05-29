package com.example.demo.entity;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
@Table(name = "product")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long productId;

    @Column(
            name = "product_name",nullable = false
    )
    private String productName;

    @Column(
            name = "product_definition",nullable = false
    )
    private String productDefinition;

    @Column(
            name = "product_category",nullable = false
    )
    private String productCategory;

    @Column(
            name = "price",nullable = false
    )
    private Double price;

    @Column(
            name = "image",nullable = false
    )
    private String image;

    @ManyToOne
    private Category category;


}
