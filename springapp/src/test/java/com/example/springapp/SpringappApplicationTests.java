package com.example.springapp;

import static org.junit.Assert.assertTrue;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;

import java.io.File;
import java.util.Arrays;
import java.util.List;

import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import com.example.springapp.model.Course;
import com.example.springapp.model.Lesson;
import com.example.springapp.model.Enrollment;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;


@RunWith(SpringJUnit4ClassRunner.class) 
@SpringBootTest(classes = SpringappApplication.class)
@AutoConfigureMockMvc
class SpringappApplicationTests {

	 @Autowired
	    private MockMvc mockMvc;
	 
     Course course = new Course(1L,"Java","Description",1L);
     
     Lesson lesson = new Lesson(1L,"Java","Description",1L);
     
     Enrollment enroll = new Enrollment(1L,1L,1L);
     
     private String asJsonString(Object object) throws JsonProcessingException {
	        ObjectMapper objectMapper = new ObjectMapper();                                   
	        return objectMapper.writeValueAsString(object);
	    }
     
     
     @Test
     public void testGetCourseAll() throws Exception {
     	
         mockMvc.perform(get("/course"))
         .andExpect(MockMvcResultMatchers.status().isOk())
         .andDo(print())
         .andExpect(content().contentType("application/json"))
 			.andExpect(jsonPath("$").isArray())
 			.andReturn();
     }
     
     
     @Test
     public void testGetCourseById() throws Exception {
     	
         mockMvc.perform(get("/course").param("id", "1"))
         .andExpect(MockMvcResultMatchers.status().isOk())
         .andDo(print())
         .andExpect(content().contentType("application/json"))
 			.andExpect(jsonPath("$").isArray())
 			.andReturn();
     }
     
     
     @Test
	    public void testCreateCourse() throws Exception {
	    
	        mockMvc.perform(MockMvcRequestBuilders.post("/course")
	                .contentType(MediaType.APPLICATION_JSON)
	                .content(asJsonString(course)))
	                .andExpect(MockMvcResultMatchers.status().isCreated());

	    }
     
     
     @Test
     public void testGetLessonAll() throws Exception {
     	
         mockMvc.perform(get("/lesson"))
         .andExpect(MockMvcResultMatchers.status().isOk())
         .andDo(print())
         .andExpect(content().contentType("application/json"))
 			.andExpect(jsonPath("$").isArray())
 			.andReturn();
     }
     
     
     @Test
     public void testGetLessonById() throws Exception {
     	
         mockMvc.perform(get("/lesson").param("id", "1"))
         .andExpect(MockMvcResultMatchers.status().isOk())
         .andDo(print())
         .andExpect(content().contentType("application/json"))
 			.andExpect(jsonPath("$").isArray())
 			.andReturn();
     }

     
     @Test
     public void testGetEnrollmentAll() throws Exception {
     	
         mockMvc.perform(get("/enrollment"))
         .andExpect(MockMvcResultMatchers.status().isOk())
         .andDo(print())
         .andExpect(content().contentType("application/json"))
 			.andExpect(jsonPath("$").isArray())
 			.andReturn();
     }
     
     
     @Test
     public void testGetEnrollmentById() throws Exception {
     	
         mockMvc.perform(get("/enrollment").param("id", "1"))
         .andExpect(MockMvcResultMatchers.status().isOk())
         .andDo(print())
         .andExpect(content().contentType("application/json"))
 			.andExpect(jsonPath("$").isArray())
 			.andReturn();
     }
     
     @Test
	    public void testCreateEnrollment() throws Exception {
	    
	        mockMvc.perform(MockMvcRequestBuilders.post("/enrollment")
	                .contentType(MediaType.APPLICATION_JSON)
	                .content(asJsonString(enroll)))
	                .andExpect(MockMvcResultMatchers.status().isCreated());

	    }

     
     @Test
     public void test_case1() {
     String directoryPath = "src/main/java/com/example/springapp/controller";
      File directory = new File(directoryPath);
      assertTrue(directory.exists() && directory.isDirectory());;
      }


     @Test
     public void test_case2() {
     String filePath = "src/main/java/com/example/springapp/controller/CourseController.java";
      File file = new File(filePath);
      assertTrue(file.exists() && file.isFile());;
      }
    
}
