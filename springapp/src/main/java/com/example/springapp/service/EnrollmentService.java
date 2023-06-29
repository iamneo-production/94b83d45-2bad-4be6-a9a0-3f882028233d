package com.example.springapp.service;
import com.example.springapp.model.Enrollment;
import org.springframework.http.ResponseEntity;
public interface EnrollmentService{
    public ResponseEntity<String> enrollUser(Enrollment enrollment);
    public ResponseEntity<?> getCoursesOfUser(Long userId);
    public ResponseEntity<?> getUsersEnrolledInACourse(Long courseId);
    public ResponseEntity<?> deleteEnrollment(Long id);
    public ResponseEntity<?> getEnrollmentById(Long id);
    public ResponseEntity<?> getEnrollments();
}