package com.example.demo.entity;

import lombok.AllArgsConstructor;
import lombok.Data;


import javax.persistence.*;
import java.time.LocalDate;

@AllArgsConstructor
@Entity
@Data
@Table(name = "orders")
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long orderId;

    @Column(
            name = "address",nullable = false
    )
    private String address;

    @Column(
            name = "phone_number",nullable = false
    )
    private String phoneNumber;

    @Column(
            name = "card_id",nullable = false
    )
    private String cardId;

    @Column(
            name = "card_cvv",nullable = false
    )
    private String cardCVV;

    @Column(
            name = "date",nullable = false
    )
    private LocalDate date;

    @ManyToOne
    private User user;

    public Order() {
        this.date = LocalDate.now();
    }

    @ManyToOne
    private Product product;


}
