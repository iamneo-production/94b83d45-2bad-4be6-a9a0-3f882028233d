package com.example.springapp.service;

import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import com.example.springapp.model.Enrollment;
import com.example.springapp.dto.CourseDto;

import java.util.*;

import com.example.springapp.model.Course;
import com.example.springapp.model.User;
import com.example.springapp.repository.UserRepository;
import com.example.springapp.repository.CourseRepository;
import com.example.springapp.repository.EnrollmentRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

@Service
public class EnrollmentServiceImpl implements EnrollmentService {

    @Autowired
    private UserRepository userRepo;

    @Autowired
    private CourseRepository courseRepo;

    @Autowired
    private EnrollmentRepository enrollRepo;

    private static final String ERRMSG = "Error! provide correct data";

    public ResponseEntity<String> enrollUser(Enrollment e) {

        enrollRepo.save(e);
        return new ResponseEntity<>("User Enrolled Successfully", HttpStatus.CREATED);

    }

    public ResponseEntity<?> getCoursesOfUser(Long userId) {

        User user = userRepo.findById(userId).get();
        if (user == null) {
            return new ResponseEntity<>(ERRMSG, HttpStatus.BAD_REQUEST);
        }
        List<Enrollment> enrollments = user.getEnrollments();
        List<CourseDto> result = new ArrayList<>();
        for (Enrollment enroll : enrollments) {
            CourseDto course = new CourseDto();
            Course currCourse = enroll.getCourse();
            course.setId(currCourse.getId());
            course.setTitle(currCourse.getTitle());
            course.setDescription(currCourse.getDescription());
            course.setInstructorId(currCourse.getInstructorId());
            course.setPrice(currCourse.getPrice());
            result.add(course);

        }
        return new ResponseEntity<>(result, HttpStatus.ACCEPTED);

    }

    public ResponseEntity<?> getUsersEnrolledInACourse(Long courseId) {
        Optional<Course> course = courseRepo.findById(courseId);
        if (course.isEmpty()) {
            return new ResponseEntity<>(ERRMSG, HttpStatus.BAD_REQUEST);
        }
        List<Enrollment> enrollments = course.get().getEnrollments();
        List<Map<String, Object>> result = new ArrayList<>();
        for (Enrollment enroll : enrollments) {
            User user = enroll.getUser();
            Map<String, Object> currUser = new HashMap<>();
            if (user != null) {
                currUser.put("id", user.getId());
                currUser.put("name", user.getFirstName() + " " + user.getLastName());
                currUser.put("email", user.getEmail());
                result.add(currUser);
            }
        }
        return new ResponseEntity<>(result, HttpStatus.ACCEPTED);
    }

    public ResponseEntity<?> deleteEnrollment(Long id) {
        Optional<Enrollment> enroll = enrollRepo.findById(id);
        if (enroll.isEmpty()) {
            return new ResponseEntity<>("Error! Enrollment Does not exist", HttpStatus.BAD_REQUEST);
        }
        Enrollment enrollment = enroll.get();
        enrollRepo.delete(enrollment);

        return new ResponseEntity<>("Enrollment deleted successfully", HttpStatus.OK);

    }

    public ResponseEntity<?> getEnrollmentById(Long id) {
        Optional<Enrollment> enroll = enrollRepo.findById(id);
        if (enroll.isEmpty()) {
            return new ResponseEntity<>("Error! Enrollment Does not exist", HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(enroll.get(), HttpStatus.OK);
    }

    public ResponseEntity<?> getEnrollments() {
        List<Enrollment> result = enrollRepo.findAll();
        return new ResponseEntity<>(result, HttpStatus.OK);
    }
}
