package com.example.demo.mapper;

import com.example.demo.dto.category.CategoryResponse;
import com.example.demo.dto.user.UserResponse;
import com.example.demo.service.CategoryService;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@AllArgsConstructor
public class CategoryMapper {

    private final CommonMapper commonMapper;
    private final CategoryService categoryService;

    public List<CategoryResponse> findAllCategories() {
        return commonMapper.convertToResponseList(categoryService.getAllCategory(), CategoryResponse.class);
    }

    public void addCategory (String cat_name){
        categoryService.addCategory(cat_name);
    }

    public void deleteCategory(Long id){

        categoryService.deleteCategory(id);

    }
}
