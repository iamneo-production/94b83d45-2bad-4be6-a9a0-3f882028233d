package com.example.springapp.controller;
import java.util.List;
import java.util.Optional;
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
import com.example.springapp.service.*;
@RestController
@CrossOrigin(origins = "https://8081-abdcffedaacedadccddafbcdeaeaadbdbabf.project.examly.io", allowedHeaders = "Content-Type")


public class CourseController {
    @Autowired
    CourseService courseService;
    @GetMapping("/courses")
    public List<Course> getcourses(){
        return courseService.cousre();
    }
    @PostMapping("/courses")
    public Course saveCourse(@RequestBody Course course){
        return courseService.saveCourse(course); 
    }
    @GetMapping("/courses/{courseId}")
    public Optional<Course> courseById(@PathVariable int courseId){
        return courseService.getCourseById(courseId);
    }
    @DeleteMapping("/courses/{courseId}")
    public void delcourse(@PathVariable int courseId){
        courseService.delCourseById(courseId);
        
    }
    @PutMapping("/courses/{courseId}")
    public String updateCourse(@PathVariable("courseId") int courseId, @RequestBody Course course){
        return courseService.updatecourses(courseId, course);
}
}

