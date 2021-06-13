import express from 'express';
import mongoose from 'mongoose';

import PostMessage from '../models/postMsg.js';

export const getPosts = async (req, res) => { 
    try {
        const postMessages = await PostMessage.find();
                
        res.status(200).json(postMessages);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
}

