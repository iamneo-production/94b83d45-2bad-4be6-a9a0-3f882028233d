package com.example.springapp.model;

import javax.persistence.*;

@Entity
public class Lesson {

    @Id 
	@GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String title;

    private String description;

    private Long courseId;

    public Lesson(){

    }

    public Lesson(Long id, String title, String description, Long courseId) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.courseId = courseId;
    }

    public Long getId() {
		return id;
	}

	public void setId(Long id) {
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

	public Long getCourseId() {
		return courseId;
	}

	public void setCourseId(Long courseId) {
		this.courseId = courseId;
	}

}