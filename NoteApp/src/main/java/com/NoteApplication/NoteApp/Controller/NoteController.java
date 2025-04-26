package com.NoteApplication.NoteApp.Controller;


import com.NoteApplication.NoteApp.Entity.Notes;
import com.NoteApplication.NoteApp.Service.NoteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.w3c.dom.stylesheets.LinkStyle;

import java.util.List;

@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/notes")
@RestController
public class NoteController {

    private final NoteService noteService;

    @Autowired
    public NoteController(NoteService noteService) {
        this.noteService = noteService;
    }

//    @GetMapping("/")
//    public String display(){
//        return "hi";
//    }

    @GetMapping("/")
    public List<Notes> getNotes(){

        return noteService.getAllNotes();
    }

    @PostMapping("/createNote")
    public ResponseEntity<Notes> createNote(@RequestBody Notes data) {

        if (noteService.isExist(data.getTitle())) {
            return ResponseEntity.ok(
                    noteService.updateByTitle(data.getTitle(), data.getDescription())
            );
        }

        return ResponseEntity.ok(noteService.createNote(data));
    }

    @GetMapping("/{title}")
    public List<Notes> getNotesByTitle(@PathVariable String title) {

        List<Notes> temp=noteService.getNotesByTitle(title);
//        System.out.println(temp);

        return temp;
    }


    @PostMapping("/setPassword")
    public ResponseEntity<Notes> UpdatePassword(@RequestBody Notes body){





        return ResponseEntity.ok(noteService.UpdatePassword(body.getTitle(),body.getPassword()));
    }

    @PostMapping("/unlock")
    public ResponseEntity<Notes> Unlock(@RequestBody Notes body){


        return ResponseEntity.ok(noteService.updateLock(body.getTitle()));
    }

    @PostMapping("/delete")
    public ResponseEntity<Notes> deleteNotes(@RequestBody Notes body){


        return ResponseEntity.ok(noteService.deleteNotes(body.getTitle()));
    }


}
