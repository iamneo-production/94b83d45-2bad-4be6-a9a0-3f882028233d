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

    private ResponseEntity<?> notFoundResponse() {
        return new ResponseEntity<>("Not Found", HttpStatus.BAD_REQUEST);
    }

    private ResponseEntity<?> successResponse(Object data) {
        if(data instanceof Course){
        return new ResponseEntity<>((Course)data, HttpStatus.CREATED);
        }
        return new ResponseEntity<>((String)data, HttpStatus.OK);
    }

    private ResponseEntity<?> errorResponse(String message) {
        return new ResponseEntity<>(message, HttpStatus.BAD_REQUEST);
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
        return successResponse(course);
    }

    @Override
    public ResponseEntity<?> getCourseById(Long courseId) {
        Optional<Course> exist = courseRepo.findById(courseId);
        if (exist.isEmpty()) {
            return errorResponse("Course does not exist with course id: " + courseId);
        }
        Course currCourse = exist.get();
        return successResponse(currCourse);
    }

    @Override
    @Transactional
    public ResponseEntity<?> delCourseById(Long courseId) {
        Optional<Course> course = courseRepo.findById(courseId);
        if (course.isEmpty()) {
            return errorResponse("Course not present");
        }

        enrollRepo.deleteByCourseId(courseId);
        courseRepo.delete(course.get());

        return successResponse("Course deleted successfully");
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
            return successResponse("Course Updated Successfully");
        }
        return errorResponse("Course doesn't exist with course id " + courseId);
    }

    public ResponseEntity<?> getCoursesOfUser(Long userId) {
        User user = userRepo.findById(userId).orElse(null);
        if (user == null) {
            return notFoundResponse();
        }
        List<Enrollment> enrollments = user.getEnrollments();
        List<CourseDto> result = new ArrayList<>();
        for (Enrollment enroll : enrollments) {
            CourseDto course = convert(enroll.getCourse());
            result.add(course);
        }
        return successResponse(result);
    }

    public ResponseEntity<?> getUsersEnrolledInACourse(Long courseId) {
        Optional<Course> course = courseRepo.findById(courseId);
        if (course.isEmpty()) {
            return notFoundResponse();
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
        return successResponse(result);
    }
}
