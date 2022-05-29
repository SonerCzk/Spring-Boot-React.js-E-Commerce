package com.example.demo.service;

import com.example.demo.entity.Category;
import com.example.demo.entity.Product;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface ProductService {

    List<Product> findAllProducts();

    List<Product> findProductByCategoryId(Category category);

    Product findProductById(Long productId);

    void addProduct(String prodcutName, String productDefinition, String productCategory, Double price, String image, Category category);

    void updateProduct(String prodcutName, String productDefinition,  String productCategory, Double price, Long productId, String image, Category category);

    void deleteProduct(Long productId);



}
