package com.example.demo.dto.Order;

import com.example.demo.entity.Product;
import com.example.demo.entity.User;
import lombok.Data;

import java.time.LocalDate;

@Data
public class OrderResponse {

    private Long orderId;
    private String address;
    private String phoneNumber;
    private String cardId;
    private String cardCVV;
    private LocalDate date;
    private User user;
    private Product product;
}
