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
import org.springframework.web.bind.annotation.RestController;
import com.example.springapp.model.*;
import com.example.springapp.dto.CourseDto;
import com.example.springapp.service.*;
@RestController
@CrossOrigin()


public class CourseController {
    @Autowired
    CourseService courseService;
    @GetMapping("/courses")
    public List<CourseDto> getcourses(){
        return courseService.cousre();
    }
    @PostMapping("/courses")
    public ResponseEntity<?> saveCourse(@RequestBody Course course){
        return courseService.saveCourse(course); 
    }
    @GetMapping("/courses/{courseId}")
    public ResponseEntity<?> courseById(@PathVariable int courseId){
        return courseService.getCourseById(courseId);
    }
    @DeleteMapping("/courses/{courseId}")
    public ResponseEntity<?> delcourse(@PathVariable int courseId){
       return courseService.delCourseById(courseId);
        
    }
    @PutMapping("/courses/{courseId}")
    public ResponseEntity<?> updateCourse(@PathVariable("courseId") int courseId, @RequestBody Course course){
        return courseService.updatecourses(courseId, course);
}
}

