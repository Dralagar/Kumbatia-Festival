// CreatePost.jsx

import React, { useState } from "react";
import axios from "axios";
import "../Styles/CreatePost.css";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/posts", { title, content });
      console.log("Post created:", response.data);
      // Optionally, you can reset the input fields after successful submission
      setTitle("");
      setContent("");
    } catch (error) {
      console.error("Error creating post:", error);
      setError("Error creating post. Please try again later.");
    }
  };

  return (
    <div className="Container">
      <div className="createPostPage">
        <div className="cpContainer">
          <h1>Create A Post</h1>
          {error && <p>{error}</p>}
          <form onSubmit={handleSubmit}>
            <div className="inputGroup">
              <label>Title:</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title..."
              />
            </div>
            <div className="inputGroup">
              <label>Post:</label>
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Post..."
              />
            </div>
            <button type="submit">Submit Post</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
