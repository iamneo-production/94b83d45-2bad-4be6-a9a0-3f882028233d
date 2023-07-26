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
@CrossOrigin()

public class CourseController {
    @Autowired
    CourseService courseService;

    @GetMapping("/course")
    public List<CourseDto> getcourses() {
        return courseService.cousre();
    }

    @PostMapping("/course")
    public ResponseEntity<?> saveCourse(@RequestBody Course course) {
        return courseService.saveCourse(course);
    }

    @GetMapping("/course/id")
    public ResponseEntity<?> courseById(@RequestParam Long courseId) {
        return courseService.getCourseById(courseId);
    }

    @DeleteMapping("/courses")
    public ResponseEntity<?> delcourse(@RequestParam Long courseId) {
        return courseService.delCourseById(courseId);
    }

    @PutMapping("/course")
    public ResponseEntity<?> updateCourse(@RequestParam Long courseId, @RequestBody Course course) {
        return courseService.updatecourses(courseId, course);
    }
}
