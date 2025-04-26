package com.NoteApplication.NoteApp.Service;

import com.NoteApplication.NoteApp.Entity.Notes;
import com.NoteApplication.NoteApp.Repository.NoteRepo;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.w3c.dom.Node;

import java.util.List;

@Service
public class NoteService {

    private final NoteRepo noteRepository;

    @Autowired
    public NoteService(NoteRepo noteRepository) {
        this.noteRepository = noteRepository;
    }



    public Notes createNote(Notes note) {


        return noteRepository.save(note);
    }

    public List<Notes> getAllNotes() {
        return noteRepository.findAll();
    }

    public List<Notes> getNotesByTitle(String title) {

        return noteRepository.findByTitle(title);
    }

    public boolean isExist(String title) {
        return noteRepository.existsByTitle(title);
    }

    @Transactional
    public Notes updateByTitle(String title, String Description) {
        Notes note = noteRepository.getByTitle(title);  // no Optional unwrap needed
        note.setDescription(Description);
        return note;
    }

    @Transactional
    public Notes UpdatePassword(String title, String password) {
        Notes note=noteRepository.getByTitle(title);


        note.setPassword(password);
        note.setLocki(true);


        return note;
    }

    @Transactional
    public Notes updateLock(String title) {
        Notes notes = noteRepository.getByTitle(title);

        notes.setLocki(false);
        notes.setPassword(null);

        return notes;
    }

    @Transactional
    public Notes deleteNotes(String title) {

        Notes notes = noteRepository.getByTitle(title);
        noteRepository.delete(notes);

        return notes;

    }
}
