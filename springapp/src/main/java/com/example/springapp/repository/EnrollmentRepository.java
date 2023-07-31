package com.example.springapp.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.springapp.model.Enrollment;
import java.util.List;
import com.example.springapp.model.Course;
import java.util.*;
@Repository
public interface EnrollmentRepository extends JpaRepository<Enrollment,Long>{
    public boolean existsByUserIdAndCourseId(Long userId, Long courseId);
    public List<Enrollment> findByUserId(Long userId);
    public List<Enrollment> findByCourseId(Long courseId);
    public Optional<Enrollment> findByCourseIdAndUserId(Long courseId,Long userId);
    public void deleteByCourseId(Long courseId);
    public void deleteByUserId(Long userId);
}