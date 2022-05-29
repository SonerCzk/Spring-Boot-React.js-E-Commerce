package com.example.demo.service;

import com.example.demo.entity.Order;
import com.example.demo.entity.Product;
import com.example.demo.entity.User;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public interface OrderService {

    List<Order> findAllOrders();

    void addOrder(String address, String phoneNumber, String cardId, String cardCVV, User user, Product product);

}
