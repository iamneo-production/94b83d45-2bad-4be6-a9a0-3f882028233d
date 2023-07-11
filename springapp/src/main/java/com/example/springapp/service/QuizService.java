package com.example.springapp.service;


import java.util.List;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import com.example.springapp.repository.QuizRepository;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import com.example.springapp.model.Quiz;


@Service
public class QuizService {
    
    @Autowired
    private QuizRepository quizRepository;

    public ResponseEntity<?> getAllQuizzes(){
        List<Quiz> list = quizRepository.findAll();
        return ResponseEntity.status(HttpStatus.OK).body(list);
    }

    public ResponseEntity<?> getQuizById(int id){
        Object o = quizRepository.findById(id);
        if (o != null) {
            return ResponseEntity.status(HttpStatus.OK).body(o);
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
    }

    public ResponseEntity<?> saveQuiz(Quiz quiz){
        quizRepository.save(quiz);
        return ResponseEntity.status(HttpStatus.OK).body(quiz);
    }

    public ResponseEntity<?> updateQuiz(int id, Quiz quiz){
        Object o = quizRepository.findById(id);
        if(o != null){
            quizRepository.save(quiz);
            return ResponseEntity.status(HttpStatus.OK).body(quiz);
        }
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
    }

    public ResponseEntity<?> deleteQuizById(int id){
        Object o = quizRepository.findById(id);
        Quiz quiz = (Quiz)o;

        if(quiz != null){
            quizRepository.delete(quiz);
            return ResponseEntity.status(HttpStatus.OK).build(); 
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
    }
}
