package com.example.springapp.service;
import com.example.springapp.service.ContactService;
import org.springframework.stereotype.Service;
import com.example.springapp.repository.*;
import com.example.springapp.model.Contact;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
@Service
public class ContactServiceImpl implements ContactService{
    @Autowired
    private ContactRepository contactRepository;
    @Override
    public void savemessage( Contact contact){
         contactRepository.save(contact);
    }
    @Override
    public List<Contact> retrievemsg(){
        return contactRepository.findAll();
        
    }


}