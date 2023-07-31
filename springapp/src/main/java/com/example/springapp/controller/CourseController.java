package com.example.springapp.controller;

import java.util.List;
import java.util.Optional;
import org.springframework.http.ResponseEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.example.springapp.model.*;
import com.example.springapp.dto.CourseDto;
import com.example.springapp.service.*;

@RestController
@CrossOrigin("*")
public class CourseController {
    @Autowired
    CourseService courseService;
    @Autowired
    EnrollmentService enrollmentService;
    @GetMapping("/course")
    public List<CourseDto> getcourses() {
        return courseService.cousre();
    }

    @PostMapping("/course")
    public ResponseEntity<?> saveCourse(@RequestBody Course course) {
        return courseService.saveCourse(course);
    }

    @GetMapping("/course/{id}")
    public ResponseEntity<?> courseById(@PathVariable Long id) {
        return courseService.getCourseById(id);
    }

    @DeleteMapping("/courses")
    public ResponseEntity<?> delcourse(@RequestParam Long courseId) {
        return courseService.delCourseById(courseId);
    }

    @PutMapping("/course")
    public ResponseEntity<?> updateCourse(@RequestParam Long courseId, @RequestBody Course course) {
        return courseService.updatecourses(courseId, course);
    }

    // Get the List of courses for a particular user
    @GetMapping("/users/{user_id}/enrollments")
    public ResponseEntity<?> getCoursesOfUser(@PathVariable("user_id") Long userId) {
        return enrollmentService.getCoursesOfUser(userId);
    }

    // Get the List Of user erolled in a particular course
    @GetMapping("/courses/{course_id}/enrollments")
    public ResponseEntity<?> getUsersEnrolledInACourse(@PathVariable("course_id") Long courseId) {
        return enrollmentService.getUsersEnrolledInACourse(courseId);
    }
}
