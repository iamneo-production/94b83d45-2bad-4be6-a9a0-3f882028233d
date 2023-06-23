package com.example.springapp.service;
import java.util.List;
import com.example.springapp.model.Contact;
public interface ContactService{
    public void savemessage( Contact contact);
    public List<Contact> retrievemsg();
}