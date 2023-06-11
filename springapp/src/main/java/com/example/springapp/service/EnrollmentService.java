package com.example.springapp.service;

import org.springframework.http.ResponseEntity;
public interface EnrollmentService{
    public ResponseEntity<String> enrollUser(int userId, int courseId);
    public ResponseEntity<?> getCoursesOfUser(int userId);
    public ResponseEntity<?> getUsersEnrolledInACourse(int courseId);
    public ResponseEntity<?> deleteEnrollment(int courseId,int userId);
}