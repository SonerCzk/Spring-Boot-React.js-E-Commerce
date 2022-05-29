package com.example.demo.service;

import com.example.demo.entity.Admin;
import com.example.demo.entity.User;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface AdminService {

    List<Admin> findAllAdmins();

    Admin findAdminById(Long userId);




}
