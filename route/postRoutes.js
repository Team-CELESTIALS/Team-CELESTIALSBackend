// routes/postRoutes.js
import express from 'express';
import { createPost, getPosts, updatePost, deletePost } from '../controller/postController.js';

const router = express.Router();

// Create a new post
router.post('/', createPost);

// Get all posts
router.get('/', getPosts);

// Update a post by ID
router.put('/:id', updatePost);

// Delete a post by ID
router.delete('/:id', deletePost);

export default router;
