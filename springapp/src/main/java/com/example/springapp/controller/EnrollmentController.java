package com.example.springapp.controller;
import org.springframework.beans.factory.annotation.Autowired;

import com.example.springapp.model.Course;
import com.example.springapp.model.Enrollment;
import org.springframework.http.ResponseEntity;
import com.example.springapp.service.EnrollmentService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin()
public class EnrollmentController{

    @Autowired
    private EnrollmentService enrollmentService;
    //Enroll a new user
    @PostMapping("/enrollment")

    public ResponseEntity<String> enrollUser(@RequestBody Enrollment enrollment){
        return enrollmentService.enrollUser(enrollment);
    }


   

    
    

    @DeleteMapping("/enrollments")
    public ResponseEntity<?> deleteEnrollment(@RequestParam Long id){
        
        return enrollmentService.deleteEnrollment(id);
    }
    
    
    //Get the List of courses for a particular user
    @GetMapping("/enrollments")
    public ResponseEntity<?> getCoursesOfUser(@RequestParam Long userId){
            return enrollmentService.getCoursesOfUser(userId);
    }
    
    @GetMapping("/enrollment")
    public ResponseEntity<?> getEnrollments(){
        return enrollmentService.getEnrollments();
    }

    @GetMapping("/enrollment/id")
    public ResponseEntity<?> getEnrollmentById(@RequestParam Long id){
        return enrollmentService.getEnrollmentById(id);
}
    
}