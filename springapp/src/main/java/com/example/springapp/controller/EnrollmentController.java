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
    @PostMapping("/courses/{course_id}/enrollments")
    public ResponseEntity<String> enrollUser(@PathVariable("course_id") int courseId, @RequestParam("userId") int userId ){
        return enrollmentService.enrollUser(userId, courseId);
    }
    //Get the List of courses for a particular user
    @GetMapping("/users/{user_id}/enrollments")
    public ResponseEntity<?> getCoursesOfUser(@PathVariable("user_id") int userId){
            return enrollmentService.getCoursesOfUser(userId);
        }
    //Get the List Of user erolled in a particular course
    @GetMapping("/courses/{course_id}/enrollments")
    public ResponseEntity<?> getUsersEnrolledInACourse(@PathVariable("course_id") int courseId){
        return enrollmentService.getUsersEnrolledInACourse(courseId);
    }

    @DeleteMapping("/courses/{course_id}/enrollments/{user_id}")
    public ResponseEntity<?> deleteEnrollment(@PathVariable("course_id") int courseId, @PathVariable("user_id") int userId) {
        return enrollmentService.deleteEnrollment(courseId,userId);
    }
}