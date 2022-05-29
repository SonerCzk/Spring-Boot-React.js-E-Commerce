package com.example.demo.mapper;

import com.example.demo.dto.product.ProductResponse;
import com.example.demo.dto.user.UserResponse;
import com.example.demo.entity.Category;
import com.example.demo.entity.Product;
import com.example.demo.service.ProductService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@AllArgsConstructor
public class ProductMapper {

    private final ProductService productService;
    private final CommonMapper commonMapper;

    public List<ProductResponse> findAllProducts(){

        return commonMapper.convertToResponseList(productService.findAllProducts(),ProductResponse.class);

    }

    public List<ProductResponse> findProductByCategoryId(Category category){
        return commonMapper.convertToResponseList(productService.findProductByCategoryId(category),ProductResponse.class);
    }

    public ProductResponse findProductById(Long productId) {
        return commonMapper.convertToResponse(productService.findProductById(productId), ProductResponse.class);
    }

    public void addProduct (String productName, String productDefinition, String productCategory, Double price, String image,Category category){
        productService.addProduct(productName,productDefinition,productCategory,price,image,category);
    }

    public void updateProduct(String productName, String productDefinition, String productCategory, Double price, Long productId, String image, Category category){
        productService.updateProduct(productName, productDefinition, productCategory, price, productId, image,category);

    }

    public void deleteProduct(Long productId){

        productService.deleteProduct(productId);

    }

}
