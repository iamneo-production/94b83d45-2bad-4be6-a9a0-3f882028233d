package com.example.springapp.repository;

import java.util.List;
import com.example.springapp.model.Lesson;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface LessonRepository extends JpaRepository<Lesson, Long> {


}
