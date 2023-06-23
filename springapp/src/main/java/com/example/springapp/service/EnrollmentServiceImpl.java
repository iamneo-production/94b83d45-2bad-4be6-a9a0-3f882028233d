package com.example.springapp.service;

import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import com.example.springapp.model.Enrollment;
import com.example.springapp.dto.CourseDto;

import java.util.*;

import com.example.springapp.model.Course;
import com.example.springapp.model.User;
import com.example.springapp.repository.UserRepo;
import com.example.springapp.repository.CourseRepo;
import com.example.springapp.repository.EnrollmentRepo;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

@Service
public class EnrollmentServiceImpl implements EnrollmentService {

    @Autowired
    private UserRepo userRepo;

    @Autowired
    private CourseRepo courseRepo;

    @Autowired
    private EnrollmentRepo enrollRepo;

    private static final String ERRMSG = "Error! provide correct data";

    public ResponseEntity<String> enrollUser(int userId, int courseId) {
        boolean enrollmentExists = enrollRepo.existsByUserIdAndCourseId(userId, courseId);

        if (enrollmentExists) {
            return new ResponseEntity<>("User already enrolled in this course", HttpStatus.BAD_REQUEST);
        }
        Optional<User> user = userRepo.findById(userId);
        Optional<Course> course = courseRepo.findById(courseId);
        if (user.isPresent() && course.isPresent()) {
            Enrollment enrollment = new Enrollment();
            enrollment.setUser(user.get());
            enrollment.setCourse(course.get());
            enrollRepo.save(enrollment);
            return new ResponseEntity<>("User Enrolled Successfully", HttpStatus.CREATED);
        }
        return new ResponseEntity<>(ERRMSG, HttpStatus.BAD_REQUEST);
    }

    public ResponseEntity<?> getCoursesOfUser(int userId) {

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
            result.add(course);

        }
        return new ResponseEntity<>(result, HttpStatus.ACCEPTED);

    }

    public ResponseEntity<?> getUsersEnrolledInACourse(int courseId) {
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

    public ResponseEntity<?> deleteEnrollment(int courseId, int userId) {
        Optional<Enrollment> enroll = enrollRepo.findByCourseIdAndUserId(courseId, userId);
        if (enroll.isEmpty()) {
            return new ResponseEntity<>("Error! Enrollment Does not exist", HttpStatus.BAD_REQUEST);
        }
        Enrollment enrollment = enroll.get();
        enrollRepo.delete(enrollment);

        return new ResponseEntity<>("Enrollment deleted successfully", HttpStatus.OK);

    }
}
