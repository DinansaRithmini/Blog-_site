import React from 'react';
import './PostForm.css';

const PostForm = () => {
  return (
    <div className="post-form">
      <div className="form-header">
        <h1 className="form-title">Write a POST</h1>
        <a href="#" className="tutorial-link">Check Out The Tutorial</a>
      </div>
      <input type="text" placeholder="Add Title" className="title-input" />
      
      <div className="textarea-container">
        <textarea placeholder="Write Your POST" className="post-input"></textarea>
        <button className="submit-button">
          <span>+</span>
        </button>
      </div>
      
    </div>
  );
};

export default PostForm;
