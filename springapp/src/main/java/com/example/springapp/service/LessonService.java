package com.example.springapp.service;

import org.springframework.stereotype.Service;
import com.example.springapp.repository.LessonRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.List;
import com.example.springapp.model.Lesson;

@Service
public class LessonService {

    @Autowired
    private LessonRepository lessonRepository;

    public ResponseEntity<?> getAllLessons(){
        List<Lesson>list = lessonRepository.findAll();
        return ResponseEntity.status(HttpStatus.OK).body(list);
    }

    public ResponseEntity<?> getLessonById(int id) {
        Object o = lessonRepository.findById(id);
        if (o != null) {
            return ResponseEntity.status(HttpStatus.OK).body(o);
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
    }

    public ResponseEntity<?> saveLesson(Lesson lesson) {
        lessonRepository.save(lesson);
        return ResponseEntity.status(HttpStatus.OK).build();
    }

    public ResponseEntity<?> updateLesson(Lesson lesson, int id) {
        Object o = lessonRepository.findById(id);
        if (o != null) {
            lessonRepository.save(lesson);
            return ResponseEntity.status(HttpStatus.OK).body(o);
        }
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
    }

    public ResponseEntity<?> deleteLessonById(int id) {
        Object o = lessonRepository.findById(id);
        Lesson l = (Lesson)o;
        if (l != null) {
            lessonRepository.delete(l);
            return ResponseEntity.status(HttpStatus.OK).build();
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
    }

}