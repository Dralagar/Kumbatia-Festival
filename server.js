// server.mjs

import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/kumbatia_blog', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define BlogPost model
const BlogPost = mongoose.model('BlogPost', {
  title: String,
  content: String,
});

// API Endpoint to create a new blog post
app.post('/api/posts', async (req, res) => {
  const { title, content } = req.body;
  try {
    const newPost = await BlogPost.create({ title, content });
    res.status(201).json(newPost);
  } catch (error) {
    console.error('Error creating post:', error);
    res.status(500).json({ error: 'Error creating post' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
