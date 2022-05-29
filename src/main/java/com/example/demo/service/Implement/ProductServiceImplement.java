package com.example.demo.service.Implement;

import com.example.demo.entity.Category;
import com.example.demo.entity.Product;
import com.example.demo.repository.ProductRepository;
import com.example.demo.service.ProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ProductServiceImplement implements ProductService {

    private final ProductRepository productRepository;

    @Override
    public List<Product> findAllProducts(){

        return productRepository.findAll();

    }

    @Override
    public List<Product> findProductByCategoryId(Category category){

        List<Product> productList;
        List<Product> productListSec = new ArrayList<>();
        productList = productRepository.findAll();

        for (int i=0;i<productList.size();i++){
           if(productList.get(i).getCategory().getCat_id() == category.getCat_id()) {
               productListSec.add(productList.get(i));
           }
        }

        return productListSec;

    }

    @Override
    public Product findProductById(Long productId){

        return productRepository.findById(productId).orElse(null);

    }

    @Override
    public void addProduct(String productName, String productDefinition, String productCategory, Double price,String image,Category category) {

        Product product = new Product();
        product.setProductName(productName);
        product.setProductDefinition(productDefinition);
        product.setProductCategory(productCategory);
        product.setPrice(price);
        product.setImage(image);
        product.setCategory(category);

        productRepository.save(product);

    }

    @Override
    public void updateProduct(String productName, String productDefinition, String productCategory, Double price, Long productId, String image, Category category) {

        Product product = new Product();
        product.setProductId(productId);
        product.setProductName(productName);
        product.setProductDefinition(productDefinition);
        product.setProductCategory(productCategory);
        product.setPrice(price);
        product.setImage(image);
        product.setCategory(category);

        productRepository.save(product);

    }

    @Override
    public void deleteProduct(Long productId) {

        productRepository.deleteById(productId);

    }

}
