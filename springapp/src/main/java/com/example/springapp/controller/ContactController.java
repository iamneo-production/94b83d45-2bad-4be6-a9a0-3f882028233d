package com.example.springapp.controller;
import java.util.List;

import com.example.springapp.service.ContactService;
import com.example.springapp.model.Contact;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.CrossOrigin;



@RestController
@CrossOrigin()

public class ContactController {
    @Autowired
    private ContactService contactService;


    
    @PostMapping("/sendmsg")
    public void submitContactForm(@RequestBody Contact contact) {
       
        contactService.savemessage(contact);
        
    }
    @GetMapping("/submissions")
    public List<Contact> getAllSubmissions() {
        return contactService.retrievemsg();
}
}