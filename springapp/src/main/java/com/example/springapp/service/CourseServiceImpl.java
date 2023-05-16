package com.example.springapp.service;

import java.util.*;
import com.example.springapp.repository.CourseRepo;
import com.example.springapp.model.Course;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
@Service
public class CourseServiceImpl implements CourseService {
    @Autowired
    CourseRepo courseRepo;

    public List<Course> cousre() {
        return courseRepo.findAll();
    }

    public Course savecourses(Course course) {
        return courseRepo.save(course);
    }

    @Override
    public Optional<Course> getCourseById(int courseId) {
        return courseRepo.findById(courseId);
    }

    @Override
    public void delCourseById(int courseId) {
        courseRepo.deleteById(courseId);
    }

    @Override
    public String updatecourses(int courseId, Course course) {
        Optional<Course> current = courseRepo.findById(courseId);
        if (current.isPresent()) {
            Course newCourse = current.get();
            if (!"".equals(course.getTitle())) {
                newCourse.setTitle(course.getTitle());
            }
            if (!"".equals(course.getDescription())) {
                newCourse.setDescription(course.getDescription());
            }
            courseRepo.save(newCourse);
            return "Course Updated Successfully";
        }
        return "Course Not Updated";
        
    }
}
