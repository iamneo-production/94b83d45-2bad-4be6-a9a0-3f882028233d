package com.example.springapp.service;

import java.util.Optional;
import java.util.ArrayList;
import java.util.List;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import com.example.springapp.repository.QuizRepository;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import com.example.springapp.model.Quiz;
import com.example.springapp.dto.QuizDto;

@Service
public class QuizService {

    @Autowired
    private QuizRepository quizRepository;

    public ResponseEntity<?> getAllQuizzesbyLessonId(Long lessonId) {
        List<Quiz> quizzes = quizRepository.findByLessonId(lessonId);
        List<QuizDto> quizzesDtoList = new ArrayList<>();
        for (Quiz quiz : quizzes) {
            QuizDto quizDto = new QuizDto();
            quizDto.setQuizId(quiz.getQuizId());
            quizDto.setLessonId(quiz.getLessonId());
            quizDto.setQuestion(quiz.getQuestion());
            quizDto.setOption1(quiz.getOption1());
            quizDto.setOption2(quiz.getOption2());
            quizDto.setOption3(quiz.getOption3());
            quizDto.setOption4(quiz.getOption4());
            quizDto.setAnswers(quiz.getAnswers());

            quizzesDtoList.add(quizDto);
        }
        return new ResponseEntity<>(quizzesDtoList, HttpStatus.OK); // working
    }

    public ResponseEntity<?> saveQuiz(QuizDto quizDto) {
        Quiz quiz = new Quiz();
        if (quizDto != null) {
            quiz.setQuizId(quizDto.getQuizId());
            quiz.setLessonId(quizDto.getLessonId());
            quiz.setQuestion(quizDto.getQuestion());
            quiz.setOption1(quizDto.getOption1());
            quiz.setOption2(quizDto.getOption2());
            quiz.setOption3(quizDto.getOption3());
            quiz.setOption4(quizDto.getOption4());
            quiz.setAnswers(quizDto.getAnswers());
            quizRepository.save(quiz);
            String s = "Quiz created Successfully";
            return new ResponseEntity<>(s, HttpStatus.OK);
        }
        String s = "Quiz Not found";
        return new ResponseEntity<>(s, HttpStatus.NOT_FOUND);
    }

    public ResponseEntity<?> updateQuiz(Long quizId, QuizDto quizDto) {
        Quiz quiz = new Quiz();
        Optional<Quiz> quizzes = quizRepository.findById(quizId);
        if (!quizzes.isEmpty()) {
            quiz.setQuizId(quizDto.getQuizId());
            quiz.setLessonId(quizDto.getLessonId());
            quiz.setQuestion(quizDto.getQuestion());
            quiz.setOption1(quizDto.getOption1());
            quiz.setOption2(quizDto.getOption2());
            quiz.setOption3(quizDto.getOption3());
            quiz.setOption4(quizDto.getOption4());
            quiz.setAnswers(quizDto.getAnswers());
            quizRepository.save(quiz);
            String s = "Quiz Updated successfully";
            return new ResponseEntity<>(s, HttpStatus.OK);
        }
        String s = "Quiz Not Found";
        return new ResponseEntity(s, HttpStatus.NOT_FOUND);
    }

    public ResponseEntity<?> deleteQuizById(Long quizId) {
        Optional<Quiz> quizzes = quizRepository.findById(quizId);
        if (!quizzes.isEmpty()) {
            quizRepository.delete(quizzes.get());
            String s = "Quiz deleted successfully";
            return new ResponseEntity<>(s, HttpStatus.OK);
        }
        String s = "Quiz Not Found";
        return new ResponseEntity(s, HttpStatus.NOT_FOUND);

    }
}
