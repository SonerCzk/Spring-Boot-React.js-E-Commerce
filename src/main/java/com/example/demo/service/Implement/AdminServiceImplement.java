package com.example.demo.service.Implement;

import com.example.demo.entity.Admin;
import com.example.demo.entity.User;
import com.example.demo.repository.AdminRepository;
import com.example.demo.service.AdminService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class AdminServiceImplement implements AdminService {

    private final AdminRepository adminRepository;

    @Override
    public List<Admin> findAllAdmins(){
        return adminRepository.findAll();
    }

    @Override
    public Admin findAdminById(Long userId) {
        return adminRepository.findById(userId)
                .orElse(null);
    }

}
