package com.example.springapp.service;

import org.springframework.transaction.annotation.Transactional;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import java.util.*;
import com.example.springapp.repository.CourseRepository;
import com.example.springapp.repository.EnrollmentRepository;
import com.example.springapp.repository.UserRepository;
import com.example.springapp.model.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.springapp.exception.*;
import com.example.springapp.dto.CourseDto;

@Service
public class CourseServiceImpl implements CourseService {
    @Autowired
    UserRepository userRepo;
    @Autowired
    CourseRepository courseRepo;
    @Autowired
    EnrollmentRepository enrollRepo;

    private CourseDto convert(Course currCourse) {
        CourseDto course = new CourseDto();
        course.setId(currCourse.getId());
        course.setTitle(currCourse.getTitle());
        course.setDescription(currCourse.getDescription());
        course.setInstructorId(currCourse.getInstructorId());
        course.setPrice(currCourse.getPrice());
        return course;
    }

   
    @Override
    public List<CourseDto> cousre() {
        List<Course> courseList = courseRepo.findAll();
        List<CourseDto> result = new ArrayList<>();
        for (Course currCourse : courseList) {
            CourseDto course = convert(currCourse);
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
        if (exist.isEmpty()) {
    
            return new ResponseEntity<>("Course does not exist with course id: " + courseId, HttpStatus.BAD_REQUEST);
        }
        Course currCourse = exist.get();
        return new ResponseEntity<>(currCourse, HttpStatus.CREATED);
    }

    @Override
    @Transactional
    public ResponseEntity<?> delCourseById(Long courseId) {
        Optional<Course> course = courseRepo.findById(courseId);
        if (course.isEmpty()) {

            return new ResponseEntity<>("Course not present", HttpStatus.BAD_REQUEST);
        }

        enrollRepo.deleteByCourseId(courseId);
        courseRepo.delete(course.get());

    
        return new ResponseEntity<>("Course deleted successfully", HttpStatus.CREATED);
    }

    @Override
    public ResponseEntity<?> updatecourses(Long courseId, Course course) {
        Optional<Course> current = courseRepo.findById(courseId);
        if (current.isPresent()) {
            Course newCourse = current.get();
            if (course.getTitle() != null && !"".equals(course.getTitle())) {
                newCourse.setTitle(course.getTitle());
            }
            if (course.getDescription() != null && !"".equals(course.getDescription())) {
                newCourse.setDescription(course.getDescription());
            }
            if (course.getPrice() >= 0) {
                newCourse.setPrice(course.getPrice());
            }
            courseRepo.save(newCourse);
            
            return new ResponseEntity<>("Course Updated Successfully", HttpStatus.OK);
        }
        
        return new ResponseEntity<>("Course does not exist with course id: " + courseId, HttpStatus.BAD_REQUEST);
    }

    public ResponseEntity<?> getCoursesOfUser(Long userId) {
        User user = userRepo.findById(userId).orElse(null);
        if (user == null) {
            return new ResponseEntity<>("Not Found", HttpStatus.BAD_REQUEST);
        }
        List<Enrollment> enrollments = user.getEnrollments();
        List<CourseDto> result = new ArrayList<>();
        for (Enrollment enroll : enrollments) {
            CourseDto course = convert(enroll.getCourse());
            result.add(course);
        }
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    public ResponseEntity<?> getUsersEnrolledInACourse(Long courseId) {
        Optional<Course> course = courseRepo.findById(courseId);
        if (course.isEmpty()) {
            return new ResponseEntity<>("Not Found", HttpStatus.BAD_REQUEST);
        }
        List<Enrollment> enrollments = course.get().getEnrollments();
        List<Map<String, Object>> result = new ArrayList<>();
        for (Enrollment enroll : enrollments) {
            User user = enroll.getUser();
            if (user != null) {
                Map<String, Object> currUser = new HashMap<>();
                currUser.put("id", user.getId());
                currUser.put("name", user.getFirstName() + " " + user.getLastName());
                currUser.put("email", user.getEmail());
                result.add(currUser);
            }
        }
        return new ResponseEntity<>(result, HttpStatus.OK);
    }
}
