import { Router } from 'express';
import {
  createNote,
  deleteNote,
  getAllNotes,
  getNoteById,
  updateNote,
} from '../controllers/notesController.js';

const router = Router();

router.get('/notes', getAllNotes);
router.post('/notes', createNote);
router.get('/notes/:noteId', getNoteById);
router.patch('/notes/:noteId', updateNote);
router.delete('/notes/:noteId', deleteNote);

export default router;
