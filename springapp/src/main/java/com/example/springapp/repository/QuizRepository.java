package com.example.springapp.repository;

import com.example.springapp.model.Quiz;
import com.example.springapp.dto.QuizDto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface QuizRepository extends JpaRepository<Quiz,Long> {
    List<Quiz> findByLessonId(Long lessonId);
}
