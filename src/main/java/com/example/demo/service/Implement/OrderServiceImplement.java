package com.example.demo.service.Implement;

import com.example.demo.entity.Order;
import com.example.demo.entity.Product;
import com.example.demo.entity.User;
import com.example.demo.repository.OrderRepository;
import com.example.demo.service.OrderService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
@RequiredArgsConstructor
public class OrderServiceImplement implements OrderService {

    private final OrderRepository orderRepository;

    @Override
    public List<Order> findAllOrders() {
        return orderRepository.findAll();
    }

    @Override
    public void addOrder(String address, String phoneNumber, String cardId, String cardCVV, User user, Product product) {

        Order order = new Order();
        order.setAddress(address);
        order.setPhoneNumber(phoneNumber);
        order.setCardId(cardId);
        order.setCardCVV(cardCVV);
        order.setUser(user);
        order.setProduct(product);

        orderRepository.save(order);

    }
}
