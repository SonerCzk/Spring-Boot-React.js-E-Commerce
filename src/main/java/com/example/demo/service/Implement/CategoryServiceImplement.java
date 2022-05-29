package com.example.demo.service.Implement;

import com.example.demo.entity.Category;
import com.example.demo.repository.CategoryRepository;
import com.example.demo.service.CategoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CategoryServiceImplement implements CategoryService {

    private final CategoryRepository categoryRepository;

    @Override
    public List<Category> getAllCategory() {
        return categoryRepository.findAll();
    }

    @Override
    public void addCategory(String cat_name) {
        Category category = new Category();
        category.setCat_name(cat_name);

        categoryRepository.save(category);
    }

    @Override
    public void updateCategory(String cat_name, Long cat_id) {

        Category category = new Category();
        category.setCat_id(cat_id);
        category.setCat_name(cat_name);

        categoryRepository.save(category);

    }
    @Override
    public void deleteCategory(Long cat_id){

        categoryRepository.deleteById(cat_id);

    }
}
