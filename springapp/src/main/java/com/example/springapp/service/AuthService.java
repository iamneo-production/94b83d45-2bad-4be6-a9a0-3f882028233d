package com.example.springapp.service;
import com.example.springapp.model.User;
import com.example.springapp.dto.*;
import org.springframework.http.ResponseEntity;
import java.util.Map;
public interface AuthService{
    public String registerUser( UserRegisterDto userRegisterDto);
    public Map<String,Object> login(UserLoginDto userLoginDto);
}