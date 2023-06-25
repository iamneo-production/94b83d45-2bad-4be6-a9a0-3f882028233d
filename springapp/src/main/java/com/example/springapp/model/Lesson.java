package com.example.springapp.model;

import javax.persistence.*;

@Entity
public class Lesson {

    @Id 
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String title;

    private String description;

    private int courseId;

    @ManyToOne
    private Course c;

    public Lesson(){

    }

    public Lesson(int id, String title, String description, int courseId, Course c) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.courseId = courseId;
        this.c = c;
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

	public int getCourseId() {
		return courseId;
	}

	public void setCourseId(int courseId) {
		this.courseId = courseId;
	}

	public Course getCourse() {
		return c;
	}

	public void setCourse(Course c) {
		this.c = c;
	}

}