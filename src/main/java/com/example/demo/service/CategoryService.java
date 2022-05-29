package com.example.demo.service;


import com.example.demo.entity.Category;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface CategoryService {

    List<Category> getAllCategory();

    void addCategory(String cat_name);

    void updateCategory(String cat_name, Long cat_id);

    void deleteCategory(Long cat_id);
}
