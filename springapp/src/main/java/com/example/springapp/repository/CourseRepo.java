package com.example.springapp.repository;

import java.util.List;

import com.example.springapp.model.Course;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
@Repository
public interface CourseRepo extends JpaRepository<Course,Integer> {
    List<Course> findByInstructorId(int instructorId);
}
