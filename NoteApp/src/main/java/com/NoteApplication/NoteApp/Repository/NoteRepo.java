package com.NoteApplication.NoteApp.Repository;

import com.NoteApplication.NoteApp.Entity.Notes;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface NoteRepo extends JpaRepository<Notes,Long> {


    boolean existsByTitle(String title);
    Notes getByTitle(String title);
    List<Notes> findByTitle(String title);
    void delete(Notes notes);

}
