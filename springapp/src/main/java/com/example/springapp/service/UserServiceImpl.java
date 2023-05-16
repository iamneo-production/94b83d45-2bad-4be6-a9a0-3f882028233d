package com.example.springapp.service;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.springapp.model.*;
import com.example.springapp.repository.*;
import com.example.springapp.exception.*;
@Service
public class UserServiceImpl implements UserService{
    @Autowired
    private UserRepo userRepo;
    @Override
    public User registerUser(User user) {
        Optional<User> existUser= userRepo.findUserByEmail(user.getEmail());
        if(existUser.isEmpty()){
            return userRepo.save(user);
        }
      throw new UserAlreadyExistException("Email Already Exist");
    }

}