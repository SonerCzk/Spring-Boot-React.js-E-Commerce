package com.example.demo.dto.product;


import com.example.demo.entity.Category;
import lombok.Data;


@Data
public class ProductResponse {

    private Long productId;
    private String productName;
    private String productDefinition;
    private String productCategory;
    private Double price;
    private String image;
    private Category category;

}
