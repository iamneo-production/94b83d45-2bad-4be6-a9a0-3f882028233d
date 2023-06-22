package com.example.springapp.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import javax.validation.Valid;
import com.example.springapp.model.User;
import com.example.springapp.service.AuthService;
import com.example.springapp.dto.*;
import java.util.Map;
@RestController
public class AuthController {
    @Autowired
    private AuthService authservice;

    @PostMapping("/users/register")
    public ResponseEntity<String> registerNewUser(@Valid @RequestBody UserRegisterDto userRegisterDto ){   
        return new ResponseEntity<>(authservice.registerUser(userRegisterDto), HttpStatus.CREATED) ;
    }

    @PostMapping("/users/login")
    public ResponseEntity<?> login(@RequestBody UserLoginDto userLoginDto){
        Map<String,Object> result= authservice.login(userLoginDto);
        return new ResponseEntity<>(result, HttpStatus.ACCEPTED);
    }

}