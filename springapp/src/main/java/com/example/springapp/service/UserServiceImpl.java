package com.example.springapp.service;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import com.example.springapp.model.*;
import com.example.springapp.repository.*;
import com.example.springapp.exception.*;
import org.springframework.stereotype.Service;
import org.springframework.http.HttpStatus;
import java.util.*;
import com.example.springapp.dto.*;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import com.example.springapp.exception.*;
@Service
public class UserServiceImpl implements UserService{
    @Autowired
    private PasswordEncoder passwordEncoder;
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
    public ResponseEntity<?> updateUser(UserRegisterDto user, int id){
        Optional<User> currUser=userRepo.findById(id);
        if(currUser.isEmpty()){
            return new ResponseEntity<>("Cant update the user - User doesn't Exist with user id " + id,HttpStatus.BAD_REQUEST);
        }
        User updateUser=currUser.get();
        if(!"".equals(user.getFirstName()) && user.getFirstName()!=null){
            updateUser.setFirstName(user.getFirstName());
        }
        if(!"".equals(user.getLastName()) && user.getLastName()!=null ){
            updateUser.setLastName(user.getLastName());
        }
        if(!"".equals(user.getEmail()) && user.getEmail()!=null ){
            if(user.getEmail().equals(updateUser.getEmail())){
                throw new UserAlreadyExistException("Email Already Exist");
            }
            updateUser.setEmail(user.getEmail());
        }
        if (user.getPassword()!=null && user.getConfirmpassword()!=null && !"".equals(user.getPassword()) && !"".equals(user.getConfirmpassword()) &&  user.getPassword().equals(user.getConfirmpassword())){
            updateUser.setPassword(passwordEncoder.encode(user.getPassword()));
        }
        userRepo.save(updateUser);
        return new ResponseEntity<>("User details updated", HttpStatus.OK);
    }

}