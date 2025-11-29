import { Note } from '../models/note.js';

export const getAllNotesService = async () => {
  return await Note.find();
};

export const getNoteByIdService = async (noteId) => {
  return await Note.findById(noteId);
};

export const createNoteService = async (noteData) => {
  return await Note.create(noteData);
};

export const updateNoteService = async (noteId, noteData) => {
  return await Note.findByIdAndUpdate(noteId, noteData, { new: true });
};

export const deleteNoteService = async (noteId) => {
  return await Note.findByIdAndDelete(noteId);
};
