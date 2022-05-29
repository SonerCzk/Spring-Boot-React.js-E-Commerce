package com.example.demo.mapper;

import com.example.demo.dto.Order.OrderResponse;
import com.example.demo.dto.product.ProductResponse;
import com.example.demo.entity.Order;
import com.example.demo.entity.Product;
import com.example.demo.entity.User;
import com.example.demo.service.OrderService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;

import java.time.LocalDate;
import java.util.List;

@Component
@AllArgsConstructor
public class OrderMapper {

    private final OrderService orderService;
    private final CommonMapper commonMapper;

    public List<OrderResponse> findAllOrders(){

        return commonMapper.convertToResponseList(orderService.findAllOrders(), OrderResponse.class);

    }

    public void addOrder(String address, String phoneNumber, String cardId, String cardCVV, User user, Product product){

        orderService.addOrder(address,phoneNumber,cardId,cardCVV,user,product);

    }

}
