package com.example.springapp.service;

import org.springframework.transaction.annotation.Transactional;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import java.util.*;
import com.example.springapp.repository.CourseRepository;
import com.example.springapp.repository.EnrollmentRepository;
import com.example.springapp.model.Course;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.springapp.exception.*;
import com.example.springapp.dto.CourseDto;

@Service
public class CourseServiceImpl implements CourseService {
    @Autowired
    CourseRepository courseRepo;
    @Autowired
    EnrollmentRepository enrollRepo;
    
    public List<CourseDto> cousre() {
        List<Course> courseList = courseRepo.findAll();
        List<CourseDto> result = new ArrayList<>();
        for (Course currCourse : courseList) {
            CourseDto course = new CourseDto();
            course.setId(currCourse.getId());
            course.setTitle(currCourse.getTitle());
            course.setDescription(currCourse.getDescription());
            course.setInstructorId(currCourse.getInstructorId());
            course.setPrice(currCourse.getPrice());
            result.add(course);
        }
        return result;
    }

    @Override
    public ResponseEntity<?> saveCourse(Course course) {
       
            courseRepo.save(course);
           
            return new ResponseEntity<>(course, HttpStatus.CREATED);
    }

    @Override
    public ResponseEntity<?> getCourseById(Long courseId) {
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
        course.setPrice(currCourse.getPrice());
        return new ResponseEntity<>(course,HttpStatus.OK);
    }

    @Override
    @Transactional
    public ResponseEntity<?> delCourseById(Long courseId) {
        Optional<Course> course=courseRepo.findById(courseId);
        if(course.isEmpty()){
            return new ResponseEntity<>("Course not present",HttpStatus.BAD_REQUEST);
        }
        
        enrollRepo.deleteByCourseId(courseId);
        courseRepo.delete(course.get());

        return new ResponseEntity<>("Course deleted successfully",HttpStatus.OK);
    }

    @Override
    public ResponseEntity<?> updatecourses(Long courseId, Course course) {
        Optional<Course> current = courseRepo.findById(courseId);
        if (current.isPresent()) {
            Course newCourse = current.get();
            if (course.getTitle()!=null && !"".equals(course.getTitle())) {
                newCourse.setTitle(course.getTitle());
            }
            if (course.getDescription()!=null && !"".equals(course.getDescription())) {
                newCourse.setDescription(course.getDescription());
            }
            if (course.getPrice()>=0) {
                newCourse.setPrice(course.getPrice());
            }
            courseRepo.save(newCourse);
            return new ResponseEntity<>("Course Updated Successfully",HttpStatus.OK);
        }
        return new ResponseEntity<>("Course doesn't exist with course id "+ courseId,HttpStatus.BAD_REQUEST);

    }
}
