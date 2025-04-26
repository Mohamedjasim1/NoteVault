package com.NoteApplication.NoteApp.Entity;

import jakarta.persistence.*;

@Entity
public class Notes {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String title;

    @Column(columnDefinition = "TEXT")
    private String description;


    private boolean locki;

    private String password;

    // Constructors
    public Notes() {
    }

    public Notes(int id, String title, String description, boolean locki,String password) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.locki = locki;
        this.password = password;

    }

    // Getters and Setters
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

    public boolean isLocki() {
        return locki;
    }

    public void setLocki(boolean locki) {
        this.locki = locki;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
