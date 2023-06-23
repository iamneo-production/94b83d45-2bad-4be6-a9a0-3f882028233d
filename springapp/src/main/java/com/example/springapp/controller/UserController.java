package com.example.springapp.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import com.example.springapp.model.*;
import com.example.springapp.service.*;
import java.util.*;
@RestController
public class UserController {
    @Autowired
    private UserService userservice;

    @GetMapping("/users/{id}")
    public ResponseEntity<?> registerNewUser(@PathVariable("id") int id ){
        Map<String,String> user= userservice.getUserDetails(id);
        return new ResponseEntity<>(user, HttpStatus.ACCEPTED);
    }
    @PutMapping("/users/{id}")
    public ResponseEntity<?> updateUser(@PathVariable("id") int id, @RequestBody User user){
        //TODO
        return null;
    }
}