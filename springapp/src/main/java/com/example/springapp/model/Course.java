package com.example.springapp.model;
import javax.persistence.*;
import java.util.List;
@Entity
public class Course {
    @Id
    private int id;

    private String title;

    private String description;

    private int instructorId;
    
    @OneToMany(mappedBy="course")
    //course attribute in Entollment is the owning side of relation ship
    private List<Enrollment> enrollments;
    

    public Course(int id, String title, String description, int instructorId) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.instructorId = instructorId;
    }

    public Course() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public int getInstructorId() {
        return instructorId;
    }

    public void setInstructorId(int instructorId) {
        this.instructorId = instructorId;
    }
    
    public List<Enrollment> getEnrollments() {
        return enrollments;
    }

    public void setEnrollments(List<Enrollment> enrollments) {
        this.enrollments = enrollments;
    }

}
