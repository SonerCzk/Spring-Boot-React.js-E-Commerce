package com.example.demo.mapper;


import com.example.demo.dto.admin.AdminResponse;
import com.example.demo.dto.user.UserResponse;
import com.example.demo.service.AdminService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@AllArgsConstructor
public class AdminMapper {

    private final CommonMapper commonMapper;
    private final AdminService adminService;

    public List<AdminResponse> findAllAdmins() {
        return commonMapper.convertToResponseList(adminService.findAllAdmins(), AdminResponse.class);
    }

    public AdminResponse findAdminById(Long userId) {
        return commonMapper.convertToResponse(adminService.findAdminById(userId), AdminResponse.class);
    }
}
