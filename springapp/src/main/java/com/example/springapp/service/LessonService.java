package com.example.springapp.service;

import com.example.springapp.repository.CourseRepository;
import com.example.springapp.repository.LessonRepository;
import org.springframework.stereotype.Service;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.beans.factory.annotation.Autowired;
import com.example.springapp.model.Lesson;
import com.example.springapp.model.Course;
import com.example.springapp.dto.LessonDto;
import java.util.List;
import java.util.ArrayList;
import java.util.Optional;

@Service
public class LessonService {

    @Autowired
    private LessonRepository lessonRepository;

    @Autowired
    private CourseRepository courseRepository;

    public ResponseEntity<?> getAllLessonsByCourseId(Long courseId) {
        List<Lesson> lessonList = lessonRepository.findAll();
        List<LessonDto> lessonDtoList = new ArrayList<>();
        for (Lesson lesson : lessonList) {
            LessonDto lessonDto = new LessonDto();
            if (lesson.getCourseId() == courseId) {
                lessonDto.setId(lesson.getId());
                lessonDto.setTitle(lesson.getTitle());
                lessonDto.setDescription(lesson.getDescription());
                lessonDto.setCourseId(lesson.getCourseId());
            }
            lessonDtoList.add(lessonDto);
        }
        return new ResponseEntity<>(lessonDtoList, HttpStatus.OK); // working
    }

    public ResponseEntity<?> getAllLessons() {
        List<Lesson> lessonList = lessonRepository.findAll();
        List<LessonDto> lessonDtoList = new ArrayList<>();
        for (Lesson lesson : lessonList) {
            LessonDto lessonDto = new LessonDto();
            lessonDto.setId(lesson.getId());
            lessonDto.setTitle(lesson.getTitle());
            lessonDto.setDescription(lesson.getDescription());
            lessonDto.setCourseId(lesson.getCourseId());
            lessonDtoList.add(lessonDto);
        }
        return new ResponseEntity<>(lessonDtoList, HttpStatus.OK); // working
    }

    public ResponseEntity<?> getLessonById(Long lessonId) {
        Optional<Lesson> l = lessonRepository.findById(lessonId);
        Lesson lesson = l.get();
        if (lesson != null) {
            LessonDto lessonDto = new LessonDto();
            lessonDto.setId(lesson.getId());
            lessonDto.setTitle(lesson.getTitle());
            lessonDto.setDescription(lesson.getDescription());
            lessonDto.setCourseId(lesson.getCourseId());
            return new ResponseEntity<>(lessonDto, HttpStatus.OK);
        }
        String s = "Lesson Not Found";
        return new ResponseEntity<>(s, HttpStatus.NOT_FOUND);
    }

    public ResponseEntity<?> saveLesson(LessonDto lessonDto) {
        Lesson lesson = new Lesson();
        if (lessonDto != null) {
            lesson.setId(lessonDto.getId());
            lesson.setTitle(lessonDto.getTitle());
            lesson.setDescription(lessonDto.getDescription());
            lesson.setCourseId(lessonDto.getCourseId());
            lessonRepository.save(lesson);
            String s = "Lesson created successfully";
            return new ResponseEntity<>(s, HttpStatus.OK);
        }
        String s = "Lesson is Empty";
        return new ResponseEntity<>(s, HttpStatus.NOT_FOUND);
    }

    public ResponseEntity<?> updateLesson(LessonDto lessonDto, Long id) {
        Optional<Lesson> l = lessonRepository.findById(id);
        if (!l.isEmpty()) {
            Lesson lesson = new Lesson();
            lesson.setId(lessonDto.getId());
            lesson.setTitle(lessonDto.getTitle());
            lesson.setDescription(lessonDto.getDescription());
            lesson.setCourseId(lessonDto.getCourseId());
            lessonRepository.save(lesson);
            return new ResponseEntity<>(lessonDto, HttpStatus.OK);
        }
        String s = "lesson not found";
        return new ResponseEntity<>(s, HttpStatus.NOT_FOUND);
    }

    public ResponseEntity<?> deleteLessonById(Long id) {
        Optional<Lesson> l = lessonRepository.findById(id);
        if (!l.isEmpty()) {
            lessonRepository.delete(l.get());
            String s = "Deleted Successfully";
            return new ResponseEntity<>(s, HttpStatus.OK);
        }
        String s = "lesson not found";
        return new ResponseEntity<>(s, HttpStatus.NOT_FOUND);
    }

}
