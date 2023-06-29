package com.example.springapp.service;
import com.example.springapp.model.User;
import org.springframework.http.ResponseEntity;
import java.util.*;
import com.example.springapp.dto.*;
public interface UserService{
    public Map<String,String> getUserDetails(Long id);
    public ResponseEntity<?> updateUser(UserRegisterDto user, Long id);
    public ResponseEntity<?> deleteUser(Long id);
}