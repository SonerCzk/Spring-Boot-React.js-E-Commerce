package com.example.demo.service.Implement;

import com.example.demo.entity.User;
import com.example.demo.repository.UserRepository;
import com.example.demo.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class UserServiceImplement implements UserService {

    private final UserRepository userRepository;

    @Override
    public List<User> findAllUsers(){
        return userRepository.findAll();
    }

    @Override
    public User findUserById(Long userId) {
        return userRepository.findById(userId)
                .orElse(null);
    }

    @Override
    public void addUser(String firstName, String lastName,  String eMail, String pass){

        User user = new User();
        user.setUserEmail(eMail);
        user.setFirstName(firstName);
        user.setLastName(lastName);
        user.setPassword(pass);

        userRepository.save(user);

    }
    @Override
    public void updateUser(String firstName, String lastName, String eMail, String pass, Long userId){

        User user = new User();
        user.setUser_id(userId);
        user.setUserEmail(eMail);
        user.setFirstName(firstName);
        user.setLastName(lastName);
        user.setPassword(pass);

        userRepository.save(user);

    }

    @Override
    public void deleteUser(Long id){

        userRepository.deleteById(id);

    }




}
