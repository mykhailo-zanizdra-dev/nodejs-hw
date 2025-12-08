import { celebrate } from 'celebrate';
import { Router } from 'express';
import {
  createNote,
  deleteNote,
  getAllNotes,
  getNoteById,
  updateNote,
} from '../controllers/notesController.js';
import {
  getAllNotesSchema,
  noteIdSchema,
  updateNoteSchema,
  createNoteSchema,
} from '../validations/notesValidation.js';

const router = Router();

router.get('/notes', celebrate(getAllNotesSchema), getAllNotes);
router.post('/notes', celebrate(createNoteSchema), createNote);
router.get('/notes/:noteId', celebrate(noteIdSchema), getNoteById);
router.patch('/notes/:noteId', celebrate(updateNoteSchema), updateNote);
router.delete('/notes/:noteId', celebrate(noteIdSchema), deleteNote);

export default router;
