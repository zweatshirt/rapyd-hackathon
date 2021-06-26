import express from 'express';
import { getPosts } from '../controllers/posts.js' 

// auth middleware needs to be added to any user related routing
// eg: router.post('/', auth, createPost);
// this verifies the user is allowed to perform certain actions
import auth from '../middleware/auth.js';

const router = express.Router();

router.get('/', getPosts);

export default router;