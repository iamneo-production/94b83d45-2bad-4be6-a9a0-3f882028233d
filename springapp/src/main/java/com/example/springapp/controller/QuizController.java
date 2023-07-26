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
import com.example.springapp.model.Quiz;


@RestController
public class QuizController {
    
    @Autowired
    private QuizService quizService;

    @GetMapping("/quizzes")
    public ResponseEntity<?> getAllQuizzes(){
        return quizService.getAllQuizzes();
    }

    @GetMapping("/quizzes/{quizId}")
    public ResponseEntity<?> getQuiz(@PathVariable int quizId){
        return quizService.getQuizById(quizId);
    }

    @PostMapping("/quizzes")
    public ResponseEntity<?> saveQuiz(@RequestBody Quiz quiz){
        return quizService.saveQuiz(quiz);
    }

    @PutMapping("/quizzes/{quizId}")
    public ResponseEntity<?> updateQuiz(@PathVariable int quizId, @RequestBody Quiz quiz){
        return quizService.updateQuiz(quizId, quiz);
    }

    @DeleteMapping("/quizzes/{quizId}")
    public ResponseEntity<?> deleteQuizById(@PathVariable int quizId){
        return quizService.deleteQuizById(quizId);
    }

}
