package com.example.demo.mapper;

import com.example.demo.dto.user.UserRequest;
import com.example.demo.dto.user.UserResponse;
import com.example.demo.entity.User;
import com.example.demo.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@AllArgsConstructor
public class UserMapper {

    private final CommonMapper commonMapper;
    private final UserService userService;

    public List<UserResponse> findAllUsers() {
        return commonMapper.convertToResponseList(userService.findAllUsers(), UserResponse.class);
    }

    public UserResponse findUserById(Long userId) {
        return commonMapper.convertToResponse(userService.findUserById(userId), UserResponse.class);
    }

    public void addUser (String firstName, String lastName,  String eMail, String pass){
        userService.addUser(firstName, lastName, eMail, pass);
    }

    public void updateUser(String firstName, String lastName,  String eMail, String pass, Long id){
        userService.updateUser(firstName, lastName, eMail, pass, id);

    }

    public void deleteUser(Long id){

        userService.deleteUser(id);

    }

}
