package com.example.springapp.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import com.example.springapp.service.LessonService;
import com.example.springapp.model.Lesson;

@RestController
public class LessonController{

    @Autowired
    private LessonService lessonService;

    public LessonController(){
    }

    public LessonController(LessonService lessonService) {
        this.lessonService = lessonService;
    }

    public LessonService getLessonService() {
        return lessonService;
    }

    public void setLessonService(LessonService lessonService) {
        this.lessonService = lessonService;
    }    

    @GetMapping("/lesson")
    public ResponseEntity<?> getAllLessons(){
        return lessonService.getAllLessons();
    } 

    @GetMapping("/lesson/id")
    public ResponseEntity<?> getLessonById(@RequestParam Long lessonId){
        return lessonService.getLessonById(lessonId);
    } 
    
    @PostMapping("/lesson")
    public ResponseEntity<?> saveLesson(@RequestBody Lesson lesson){
        return lessonService.saveLesson(lesson);
    }

    @DeleteMapping("/lessons")
    public ResponseEntity<?> deleteLessonById(@RequestParam Long lessonId){
        return lessonService.deleteLessonById(lessonId);
    }

    @PutMapping("/lessons")
    public ResponseEntity<?> updateLessonById(@RequestBody Lesson lesson){
        Long lessonId=lesson.getId();
        return lessonService.updateLesson(lesson, lessonId);
    }
    
}   
