package com.example.springapp.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.springapp.model.Enrollment;
import java.util.List;
import com.example.springapp.model.Course;
import java.util.*;
@Repository
public interface EnrollmentRepo extends JpaRepository<Enrollment,Integer>{
    public boolean existsByUserIdAndCourseId(int userId, int courseId);
    public List<Enrollment> findByUserId(int userId);
    public List<Enrollment> findByCourseId(int courseId);
    public Optional<Enrollment> findByCourseIdAndUserId(int courseId,int userId);
    public void deleteByCourseId(int courseId);
}