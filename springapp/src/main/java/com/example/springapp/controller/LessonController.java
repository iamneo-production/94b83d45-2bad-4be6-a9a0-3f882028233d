package com.example.springapp.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import com.example.springapp.service.LessonService;
import com.example.springapp.model.Lesson;
import com.example.springapp.dto.LessonDto;

@RestController
public class LessonController {

    @Autowired
    private LessonService lessonService;

    @GetMapping("/lesson/{courseId}")
    public ResponseEntity<?> getAllLessonsByCourseId(@PathVariable Long courseId) {
        return lessonService.getAllLessonsByCourseId(courseId);
    }

    @GetMapping("/lesson")
    public ResponseEntity<?> getAllLessons() {
        return lessonService.getAllLessons();
    }

    // @GetMapping("/lesson/{lessonId}")
    // public ResponseEntity<?> getLessonById(@PathVariable Long lessonId) {
    //     return lessonService.getLessonById(lessonId);
    // }

    @PostMapping("/lesson")
    public ResponseEntity<?> saveLesson(@RequestBody LessonDto lessonDto) {
        return lessonService.saveLesson(lessonDto);
    }

    @DeleteMapping("/lesson")
    public ResponseEntity<?> deleteLessonById(@RequestParam Long lessonId) {
        return lessonService.deleteLessonById(lessonId);
    }

    @PutMapping("/lesson")
    public ResponseEntity<?> updateLessonById(@RequestParam Long lessonId, @RequestBody LessonDto lessonDto) {
        return lessonService.updateLesson(lessonDto, lessonId);
    }

}
