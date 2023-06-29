package com.example.springapp.exception;
public class CourseAlreadyExistException extends RuntimeException{
    public CourseAlreadyExistException(String message){
        super(message);
    }
}