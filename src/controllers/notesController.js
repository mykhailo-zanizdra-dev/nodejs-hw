import createHttpError from 'http-errors';

import {
  createNoteService,
  deleteNoteService,
  getAllNotesService,
  getNoteByIdService,
  updateNoteService,
} from '../services/notesServices.js';

export const getAllNotes = async (req, res) => {
  const notes = await getAllNotesService();

  res.status(200).json(notes);
};

export const getNoteById = async (req, res, next) => {
  const { noteId } = req.params;
  const note = await getNoteByIdService(noteId);

  if (!note) {
    next(createHttpError(404, 'Note not found'));
    return;
  }

  res.status(200).json(note);
};

export const createNote = async (req, res) => {
  const noteData = req.body;
  const newNote = await createNoteService(noteData);

  res.status(201).json(newNote);
};

export const updateNote = async (req, res, next) => {
  const { noteId } = req.params;
  const noteData = req.body;
  const updatedNote = await updateNoteService(noteId, noteData);

  if (!updatedNote) {
    next(createHttpError(404, 'Note not found'));
    return;
  }

  res.status(200).json(updatedNote);
};

export const deleteNote = async (req, res, next) => {
  const { noteId } = req.params;
  const deletedNote = await deleteNoteService(noteId);

  if (!deletedNote) {
    next(createHttpError(404, 'Note not found'));
    return;
  }

  res.status(200).json(deletedNote);
};
