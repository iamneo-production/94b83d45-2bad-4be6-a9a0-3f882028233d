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
import com.example.springapp.service.QuizService;
import com.example.springapp.dto.QuizDto;


@RestController
public class QuizController {
    
    @Autowired
    private QuizService quizService;

    @GetMapping("/quizzes/{lessonId}")
    public ResponseEntity<?> getAllQuizzesbyLessonId(@PathVariable Long lessonId){
        return quizService.getAllQuizzesbyLessonId(lessonId);
    }

    @PostMapping("/quizzes")
    public ResponseEntity<?> saveQuiz(@RequestBody QuizDto quizDto){
        return quizService.saveQuiz(quizDto);
    }

    @PutMapping("/quizzes/{quizId}")
    public ResponseEntity<?> updateQuiz(@PathVariable Long quizId, @RequestBody QuizDto quizDto){
        return quizService.updateQuiz(quizId, quizDto);
    }

    @DeleteMapping("/quizzes/{quizId}")
    public ResponseEntity<?> deleteQuizById(@PathVariable Long quizId){
        return quizService.deleteQuizById(quizId);
    }

}
