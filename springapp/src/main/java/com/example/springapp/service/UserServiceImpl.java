package com.example.springapp.service;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import com.example.springapp.model.*;
import com.example.springapp.repository.*;
import com.example.springapp.exception.*;
import org.springframework.stereotype.Service;
import java.util.*;
@Service
public class UserServiceImpl implements UserService{
    @Autowired
    private UserRepo userRepo;
    @Override
    public Map<String,String> getUserDetails(int id){
        Optional<User> data=userRepo.findById(id);
        Map<String,String> userdetails= new HashMap<>();
        if(data.isPresent()){
            User user=data.get();
        userdetails.put("First Name", user.getFirstName());
        userdetails.put("Last Name", user.getLastName());
        userdetails.put("E-mail",user.getEmail());
        userdetails.put("Role",user.getRole());
        }
        return userdetails;
    }

}