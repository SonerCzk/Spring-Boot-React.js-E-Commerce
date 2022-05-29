package com.example.demo.controller;

import com.example.demo.dto.Order.OrderResponse;
import com.example.demo.dto.admin.AdminResponse;
import com.example.demo.dto.category.CategoryResponse;
import com.example.demo.dto.product.ProductResponse;
import com.example.demo.dto.user.UserResponse;
import com.example.demo.entity.Category;
import com.example.demo.entity.Product;
import com.example.demo.entity.User;
import com.example.demo.mapper.*;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@Controller
@RequiredArgsConstructor
@RequestMapping("/admin")
public class AdminController {

    private final UserMapper userMapper;
    private final AdminMapper adminMapper;
    private final CategoryMapper categoryMapper;
    private final ProductMapper productMapper;
    private final OrderMapper orderMapper;

    @GetMapping("/getAllUser")
    public ResponseEntity<List<UserResponse>> getAllUsers(){
        return ResponseEntity.ok(userMapper.findAllUsers());
    }

    @GetMapping("/getAllAdmins")
    public ResponseEntity<List<AdminResponse>> getAllAdmins(){
        return ResponseEntity.ok(adminMapper.findAllAdmins());
    }

    @GetMapping("/getUserById")
    public ResponseEntity<UserResponse> getUserById(@RequestParam Long userId){
        return ResponseEntity.ok(userMapper.findUserById(userId));
    }

    @GetMapping("/getAdminById")
    public ResponseEntity<AdminResponse> getAdminById(@RequestParam Long userId){
        return ResponseEntity.ok(adminMapper.findAdminById(userId));
    }

    @GetMapping("/products")
    public ResponseEntity<List<ProductResponse>> getAllProducts(){
        return ResponseEntity.ok(productMapper.findAllProducts());
    }

    @GetMapping("/productsByCategory")
    public ResponseEntity<List<ProductResponse>> getProductsByCategory(Category category){
        return ResponseEntity.ok(productMapper.findProductByCategoryId(category));
    }

    @GetMapping("/getProductById")
    public ResponseEntity<ProductResponse> getProductById(@RequestParam Long productId){
        return  ResponseEntity.ok(productMapper.findProductById(productId));
    }

    @GetMapping("/addProduct")
    public void addProduct(@RequestParam String productName, String productDefinition, String productCategory, Double price, String image, Category category){
        productMapper.addProduct(productName,productDefinition,productCategory,price,image,category);
    }

    @GetMapping("/updateProduct")
    public void updateProduct(@RequestParam String productName, String productDefinition, String productCategory, Double price,Long productId,String image,Category category){
        productMapper.updateProduct(productName,productDefinition,productCategory,price,productId,image,category);
    }

    @DeleteMapping("/deleteProductById/{productId}")
    public void deleteProduct(@PathVariable(value = "productId") Long productId){
        productMapper.deleteProduct(productId);
    }

    @GetMapping("/categories")
    public ResponseEntity<List<CategoryResponse>> getAllCategories(){
        return ResponseEntity.ok(categoryMapper.findAllCategories());
    }

    @GetMapping("/categories/add")
    public void addUser(@RequestParam String cat_name){
        categoryMapper.addCategory(cat_name);
    }

    @DeleteMapping("/deleteCategory/{id}")
    public void deleteCategoryById(@PathVariable(value = "id") Long id){
        categoryMapper.deleteCategory(id);
    }

    @GetMapping("/orders")
    public ResponseEntity<List<OrderResponse>> getAllOrders(){
        return ResponseEntity.ok(orderMapper.findAllOrders());
    }

    @GetMapping("/addOrder")
    public void addOrder(@RequestParam String address, String phoneNumber, String cardId, String cardCVV, User user, Product product){



        orderMapper.addOrder(address,phoneNumber,cardId,cardCVV,user,product);
    }
}
