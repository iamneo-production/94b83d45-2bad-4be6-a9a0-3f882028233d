package com.example.springapp.service;
import org.springframework.transaction.annotation.Transactional;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import java.util.*;
import com.example.springapp.repository.CourseRepo;
import com.example.springapp.repository.EnrollmentRepo;
import com.example.springapp.model.Course;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.springapp.exception.*;
import com.example.springapp.dto.CourseDto;

@Service
public class CourseServiceImpl implements CourseService {
    @Autowired
    CourseRepo courseRepo;
    @Autowired
    EnrollmentRepo enrollRepo;
    public List<CourseDto> cousre() {
        List<Course> courseList = courseRepo.findAll();
        List<CourseDto> result = new ArrayList<>();
        for (Course currCourse : courseList) {
            CourseDto course = new CourseDto();
            course.setId(currCourse.getId());
            course.setTitle(currCourse.getTitle());
            course.setDescription(currCourse.getDescription());
            course.setInstructorId(currCourse.getInstructorId());
            result.add(course);
        }
        return result;
    }

    @Override
    public ResponseEntity<?> saveCourse(Course course) {
        Optional<Course> existingCourse = courseRepo.findById(course.getId());
        if (existingCourse.isEmpty()) {
            courseRepo.save(course);
            return new ResponseEntity<>("Course Created Successfully", HttpStatus.CREATED);
        }
        throw new CourseAlreadyExistException("Course Id Already Exists");
    }

    @Override
    public ResponseEntity<?> getCourseById(int courseId) {
        Optional<Course> exist = courseRepo.findById(courseId);
        if(exist.isEmpty()){
            return new ResponseEntity<>("course does not exist with course id: "+" "+ courseId,HttpStatus.BAD_REQUEST);
        }
        Course currCourse=exist.get();
        CourseDto course = new CourseDto();
        course.setId(currCourse.getId());
        course.setTitle(currCourse.getTitle());
        course.setDescription(currCourse.getDescription());
        course.setInstructorId(currCourse.getInstructorId());
        return new ResponseEntity<>(course,HttpStatus.OK);
    }

    @Override
    @Transactional
    public ResponseEntity<?> delCourseById(int courseId) {
        Optional<Course> course=courseRepo.findById(courseId);
        if(course.isEmpty()){
            return new ResponseEntity<>("Course not present",HttpStatus.BAD_REQUEST);
        }
        
        enrollRepo.deleteByCourseId(courseId);
        courseRepo.delete(course.get());

        return new ResponseEntity<>("Course deleted successfully",HttpStatus.OK);
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
