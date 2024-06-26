import Note from "../models/note";
import {RequestHandler} from "express";

export const create: RequestHandler  = async(req, res) => {
    const newNote = new Note({ title: req.body.title, content: req.body.content });
    try{
        await newNote.save();
        console.log("Note saved successfully");
        res.send({note:{id: newNote._id, title: newNote.title, content: newNote.content}});
    } catch (error) {
        console.log(error);
        res.send("Error in saving the note");
    }
}

export const update: RequestHandler = async(req, res) => {
    const { id } = req.params;
    const { title, content } = req.body;

    const note = await Note.findByIdAndUpdate
    (id,{title: title,content: content },{new: true});
    if(!note){
        return res.json({message: "Note not found"});
    }
    res.json({note: {id: note._id, title: note.title, content: note.content}});
}

export const deleteNote: RequestHandler = async(req, res) => {
    const { id } = req.params;
    const note = await Note.findByIdAndDelete(id);
    if(!note){
        return res.json({message: "Note not found"});
    }
    res.json({message: "Note deleted successfully"});
}

export const getNotes: RequestHandler = async(req, res) => {
    const notes = await Note.find();
    res.json({notes: notes.map(note => ({id: note._id, title: note.title, content: note.content}))});
}

export const getNote: RequestHandler = async(req, res) => {
    const {id} = req.params;
    const note = await Note.findById(id);
    if (!note) {
        return res.json({message: "Note not found"});
    }
    res.json(note);
}

