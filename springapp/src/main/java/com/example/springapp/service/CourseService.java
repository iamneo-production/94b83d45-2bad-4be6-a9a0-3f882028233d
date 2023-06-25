package com.example.springapp.service;
import com.example.springapp.model.*;
import java.util.*;
import org.springframework.stereotype.Service;
import com.example.springapp.dto.CourseDto;
import org.springframework.http.ResponseEntity;
public interface CourseService {
    public List<CourseDto> cousre();
    public ResponseEntity<?> saveCourse(Course course);
    public ResponseEntity<?> getCourseById(int courseId);
    public ResponseEntity<?> delCourseById(int courseId);
    public ResponseEntity<?> updatecourses(int courseId, Course c);
}
