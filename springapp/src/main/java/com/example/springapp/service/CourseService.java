package com.example.springapp.service;
import com.example.springapp.model.*;
import java.util.*;
import org.springframework.stereotype.Service;
@Service
public interface CourseService {
    public List<Course> cousre();
    public Course savecourses(Course course);
    public Optional<Course> getCourseById(int courseId);
    public void delCourseById(int courseId);
    public String updatecourses(int courseId, Course c);
}
