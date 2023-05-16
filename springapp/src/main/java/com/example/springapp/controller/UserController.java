package com.example.springapp.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import javax.validation.Valid;
import com.example.springapp.model.*;
import com.example.springapp.service.*;
import com.example.springapp.dto.*;
import com.example.springapp.exception.*;
@RestController
public class UserController {
    @Autowired
    private UserServiceImpl userserviceimpl;

    @PostMapping("/users/register")
    public ResponseEntity<String> registerNewUser(@Valid @RequestBody UserRegisterDto userRegisterDto ){
        User user= new User();
        user.setFirstname(userRegisterDto.getFirstName());
        user.setLastName(userRegisterDto.getLastName());
        user.setEmail(userRegisterDto.getEmail());
        if (!userRegisterDto.getPassword().equals(userRegisterDto.getConfirmpassword())){
            throw new PasswordNotMatchException("Password does not Match");
        }
        user.setPassword(userRegisterDto.getPassword());
        return new ResponseEntity<>(userserviceimpl.registerUser(user).getEmail()+"Registered Successfully", HttpStatus.CREATED) ;
    }
}