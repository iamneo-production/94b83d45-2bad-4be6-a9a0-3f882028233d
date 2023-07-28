package com.example.springapp;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;
import com.example.springapp.repository.*;
import com.example.springapp.service.*;
import com.example.springapp.model.*;
import com.example.springapp.dto.*;
@SpringBootTest
public class CourseServiceImplTest {

    @Mock
    private UserRepository userRepository;

    @Mock
    private CourseRepository courseRepository;

    @Mock
    private EnrollmentRepository enrollmentRepository;

    @InjectMocks
    private CourseServiceImpl courseService;

    private Course course;

    @BeforeEach
    public void setup() {
        // Set up a sample course for testing
        course = new Course();
        course.setId(1L);
        course.setTitle("Test Course");
        course.setDescription("This is a test course.");
        course.setInstructorId(123L);
        course.setPrice(299L);
    }

    @Test
    public void testCousre() {
        // Mock the behavior of courseRepo.findAll()
        List<Course> courseList = new ArrayList<>();
        courseList.add(course);
        when(courseRepository.findAll()).thenReturn(courseList);

        // Call the service method
        List<CourseDto> result = courseService.cousre();

        // Verify the result
        assertEquals(1, result.size());
        CourseDto courseDto = result.get(0);
        assertEquals(course.getId(), courseDto.getId());
        assertEquals(course.getTitle(), courseDto.getTitle());
        assertEquals(course.getDescription(), courseDto.getDescription());
        assertEquals(course.getInstructorId(), courseDto.getInstructorId());
        assertEquals(course.getPrice(), courseDto.getPrice());
    }

    @Test
    public void testSaveCourse() {
        // Call the service method
        ResponseEntity<?> response = courseService.saveCourse(course);

        // Verify the result
        assertEquals(HttpStatus.CREATED, response.getStatusCode());
        verify(courseRepository, times(1)).save(course);
    }

    @Test
    public void testGetCourseById() {
        // Mock the behavior of courseRepo.findById()
        when(courseRepository.findById(1L)).thenReturn(Optional.of(course));

        // Call the service method
        ResponseEntity<?> response = courseService.getCourseById(1L);

        // Verify the result
        assertEquals(HttpStatus.CREATED, response.getStatusCode());
        assertEquals(course, response.getBody());
    }

    @Test
    public void testDelCourseById() {
        // Mock the behavior of courseRepo.findById()
        when(courseRepository.findById(1L)).thenReturn(Optional.of(course));

        // Call the service method
        ResponseEntity<?> response = courseService.delCourseById(1L);

        // Verify the result
        assertEquals(HttpStatus.CREATED, response.getStatusCode());
        verify(enrollmentRepository, times(1)).deleteByCourseId(1L);
        verify(courseRepository, times(1)).delete(course);
    }

    @Test
    public void testUpdateCourses() {
        // Mock the behavior of courseRepo.findById()
        when(courseRepository.findById(1L)).thenReturn(Optional.of(course));

        // Create an updated course
        Course updatedCourse = new Course();
        updatedCourse.setTitle("Updated Course");
        updatedCourse.setDescription("This is the updated course.");
        updatedCourse.setPrice(499L);

        // Call the service method
        ResponseEntity<?> response = courseService.updatecourses(1L, updatedCourse);

        // Verify the result
        assertEquals(HttpStatus.OK, response.getStatusCode());
        verify(courseRepository, times(1)).save(course);
        assertEquals(updatedCourse.getTitle(), course.getTitle());
        assertEquals(updatedCourse.getDescription(), course.getDescription());
        assertEquals(updatedCourse.getPrice(), course.getPrice());
    }

}
