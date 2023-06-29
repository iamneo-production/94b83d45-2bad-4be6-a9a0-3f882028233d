package com.example.springapp.service;

import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import com.example.springapp.model.*;
import com.example.springapp.repository.*;
import com.example.springapp.exception.*;
import org.springframework.stereotype.Service;
import org.springframework.http.HttpStatus;
import java.util.*;
import com.example.springapp.dto.*;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import com.example.springapp.exception.*;
import com.example.springapp.repository.EnrollmentRepository;
import com.example.springapp.model.Enrollment;
import com.example.springapp.repository.CourseRepository;
import com.example.springapp.model.Course;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    private UserRepository userRepo;
    @Autowired
    private EnrollmentRepository enrollRepo;
    @Autowired
    private CourseRepository courseRepo;

    @Override
    public Map<String, String> getUserDetails(Long id) {
        Optional<User> data = userRepo.findById(id);
        Map<String, String> userdetails = new HashMap<>();
        if (data.isPresent()) {
            User user = data.get();
            userdetails.put("First Name", user.getFirstName());
            userdetails.put("Last Name", user.getLastName());
            userdetails.put("E-mail", user.getEmail());
            userdetails.put("Role", user.getRole());
        }
        return userdetails;
    }

    public ResponseEntity<?> updateUser(UserRegisterDto user, Long id) {
        Optional<User> currUser = userRepo.findById(id);
        if (currUser.isEmpty()) {
            return new ResponseEntity<>("Cant update the user - User doesn't Exist with user id " + id,
                    HttpStatus.BAD_REQUEST);
        }
        User updateUser = currUser.get();
        if (!"".equals(user.getFirstName()) && user.getFirstName() != null) {
            updateUser.setFirstName(user.getFirstName());
        }
        if (!"".equals(user.getLastName()) && user.getLastName() != null) {
            updateUser.setLastName(user.getLastName());
        }
        if (!"".equals(user.getEmail()) && user.getEmail() != null) {
            if (user.getEmail().equals(updateUser.getEmail())) {
                throw new UserAlreadyExistException("Email Already Exist");
            }
            updateUser.setEmail(user.getEmail());
        }
        if (user.getPassword() != null && user.getConfirmpassword() != null && !"".equals(user.getPassword())
                && !"".equals(user.getConfirmpassword()) && user.getPassword().equals(user.getConfirmpassword())) {
            updateUser.setPassword(passwordEncoder.encode(user.getPassword()));
        }
        userRepo.save(updateUser);
        return new ResponseEntity<>("User details updated", HttpStatus.OK);
    }

    public ResponseEntity<?> deleteUser(Long id) {
        Optional<User> currUser = userRepo.findById(id);
        if (currUser.isEmpty()) {
            return new ResponseEntity<>("User doesn't Exist with user id " + id, HttpStatus.BAD_REQUEST);
        }
        // the user may or may not enroll Longo a course, if the user is enrolled all the
        // enrollments need to be deleted
        List<Enrollment> enroll = enrollRepo.findByUserId(id);
        for (Enrollment e : enroll) {
            enrollRepo.delete(e);
        }
        // if the user is a instructor all his courses need to be deleted along with the
        // erollments of that particular course
        List<Course> currCourse = courseRepo.findByInstructorId(id);
        for (Course c : currCourse) {
            
            List<Enrollment> enrollment = enrollRepo.findByCourseId(c.getId());
            for (Enrollment e : enrollment) {
                enrollRepo.delete(e); // deleting the erollments of that particular course
            }
            courseRepo.delete(c); // deleting the course of a instructor
        }

        userRepo.delete(currUser.get());
        return new ResponseEntity<>("User Deleted Successfully", HttpStatus.OK);
    }

}