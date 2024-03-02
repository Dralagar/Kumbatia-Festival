import express from 'express';
import { MongoClient } from 'mongodb';

// Rest of your code...

const app = express();
const port = 5000;

// Connection URI
const uri = 'mongodb://localhost:27017'; // Default MongoDB URI

// Create a new MongoClient
const client = new MongoClient(uri);

// Connect to the MongoDB database
async function connectToDatabase() {
  try {
    await client.connect();
    console.log('Connected to the database');
  } catch (error) {
    console.error('Error connecting to the database:', error);
  }
}

// Middleware to parse JSON requests
app.use(express.json());

// Route to insert data into MongoDB
app.post('/api/posts', async (req, res) => {
  try {
    const database = client.db('myDatabase');
    const collection = database.collection('myCollection');
    const result = await collection.insertOne(req.body);
    res.status(201).json({ message: 'Post created successfully', postId: result.insertedId });
  } catch (error) {
    console.error('Error inserting post:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Start the Express server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
  connectToDatabase();
});
