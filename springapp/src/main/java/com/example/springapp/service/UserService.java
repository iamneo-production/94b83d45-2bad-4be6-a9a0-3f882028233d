package com.example.springapp.service;
import com.example.springapp.model.User;
import org.springframework.http.ResponseEntity;
import java.util.*;
import com.example.springapp.dto.*;
public interface UserService{
    public Map<String,String> getUserDetails(int id);
    public ResponseEntity<?> updateUser(UserRegisterDto user, int id);
    public ResponseEntity<?> deleteUser(int id);
}