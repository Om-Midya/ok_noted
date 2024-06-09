import {Router} from "express";
import {create, deleteNote, getNote, getNotes, update} from "../controllers/note_controller";

const router = Router();

router.post('/', create);
router.patch('/:id', update);
router.delete('/:id', deleteNote);
router.get('/', getNotes);
router.get('/:id', getNote);

export default router;
