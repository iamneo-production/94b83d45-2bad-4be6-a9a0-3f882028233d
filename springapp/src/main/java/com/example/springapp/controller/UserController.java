package com.example.springapp.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import com.example.springapp.model.*;
import com.example.springapp.service.*;
import java.util.*;
import com.example.springapp.dto.*;
import com.example.springapp.exception.*;
import org.springframework.web.bind.annotation.CrossOrigin;
import javax.validation.Valid;
@RestController
@CrossOrigin()
public class UserController {
    @Autowired
    private UserService userservice;

    @GetMapping("/users/{id}")
    public ResponseEntity<?> getUserDetails(@PathVariable("id") int id ){
        Map<String,String> user= userservice.getUserDetails(id);
        return new ResponseEntity<>(user, HttpStatus.ACCEPTED);
    }
    @PutMapping("/users/{id}")
    public ResponseEntity<?> updateUser(@PathVariable("id") int id,@Valid @RequestBody UserRegisterDto user){
        
        return userservice.updateUser(user, id);
    }
    @DeleteMapping("/users/{id}")
    public ResponseEntity<?> deleteUser(@PathVariable("id") int id){
       return userservice.deleteUser(id);
    }
}