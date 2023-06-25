package com.example.springapp.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import com.example.springapp.service.LessonServices;
import com.example.springapp.model.Lesson;

@RestController
@RequestMapping("/courses/{courseId}")
public class LessonController{

    @Autowired
    private LessonServices lessonServices;

    public LessonController(){
    }

    public LessonController(LessonServices lessonServices) {
        this.lessonServices = lessonServices;
    }

    public LessonServices getLessonServices() {
        return lessonServices;
    }

    public void setLessonServices(LessonServices lessonServices) {
        this.lessonServices = lessonServices;
    }    

    @GetMapping("/lessons")
    public ResponseEntity<?> getAllLessons(){
        return lessonServices.getAllLessons();
    } 

    @GetMapping("/lessons/{lessonId}")
    public ResponseEntity<?> getLessonById(@PathVariable int lessonId){
        return lessonServices.getLessonById(lessonId);
    } 
    
    @PostMapping("/lessons")
    public ResponseEntity<?> saveLesson(@RequestBody Lesson lesson){
        return lessonServices.saveLesson(lesson);
    }

    @DeleteMapping("/lessons/{lessonId}")
    public ResponseEntity<?> deleteLessonById(@PathVariable int lessonId){
        return lessonServices.deleteLessonById(lessonId);
    }

    @PutMapping("/lessons/{lessonId}")
    public ResponseEntity<?> updateLessonById(@PathVariable int lessonId, @RequestBody Lesson lesson){
        return lessonServices.updateLesson(lesson, lessonId);
    }
    
}   
