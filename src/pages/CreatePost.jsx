// CreatePost.jsx
import React from "react";
import "../Styles/CreatePost.css";

function CreatePost() {
  return (
    <div className="Container">
      <div className="createPostPage">
        <div className="cpContainer">
          <h1>Create A Post</h1>
          <div className="inputGroup">
            <label>Title:</label>
            <input placeholder="Title..." />
          </div>
          <div className="inputGroup">
            <label>Post:</label>
            <textarea placeholder="Post..." />
          </div>
          <button>Submit Post</button>
        </div>
      </div>
    </div>
  );
}

export default CreatePost;
