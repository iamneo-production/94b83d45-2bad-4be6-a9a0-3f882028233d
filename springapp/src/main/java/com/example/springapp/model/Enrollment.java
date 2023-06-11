package com.example.springapp.model;
import javax.persistence.*;
@Entity
public class Enrollment {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @ManyToOne
    @JoinColumn(name="userId")
    //column userId is a foreign key refers the primary key in User entity
    private User user;

    @ManyToOne
    @JoinColumn(name="courseId")
    //column courseId is a foreign key refers the primary key in Course entity
    private Course course;

    public Enrollment() {
    }

    public Enrollment(int id, User user, Course course) {
        this.id = id;
        this.user = user;
        this.course = course;
    }

    public int getId() {
        return id;
    }


    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Course getCourse() {
        return course;
    }

    public void setCourse(Course course) {
        this.course = course;
    }

}
