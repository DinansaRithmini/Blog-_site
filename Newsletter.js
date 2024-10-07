// Newsletter.js
import React from 'react';
import Header from './Header'; // Ensure you import your existing header
import './Newsletter.css'; // Import your CSS file

function Newsletter() {
  return (
    <div className="newsletter">
      <Header />
      <img
        className="wallpaper-image"
        alt="Wallpaper"
        src="image1.png" // Add your wallpaper image URL here
      />
      <div className="container">
        <div className="main-content">
          <h2>Understanding Gestalt Principles in UX Design: How Visual Perception Shapes User Experience</h2>
          <p>
          In UX design, creating a user interface that is both functional and aesthetically pleasing is essential. But beyond the visuals, how users interpret and interact with the design plays a key role in determining the overall experience. This is where Gestalt principles come into play. Originating from psychological theories of perception, these principles help designers understand how people naturally organize visual information, making it easier to create intuitive, user-friendly designs.
          By applying Gestalt principles, designers can influence how users perceive, group, and navigate elements within a digital interface, streamlining their interactions and reducing cognitive load. In this article, we’ll explore the core Gestalt principles and how they can be applied to UX design.
          </p>
          <p>
          In UX design, creating a user interface that is both functional and aesthetically pleasing is essential. But beyond the visuals, how users interpret and interact with the design plays a key role in determining the overall experience. This is where Gestalt principles come into play. Originating from psychological theories of perception, these principles help designers understand how people naturally organize visual information, making it easier to create intuitive, user-friendly designs.
          By applying Gestalt principles, designers can influence how users perceive, group, and navigate elements within a digital interface, streamlining their interactions and reducing cognitive load. In this article, we’ll explore the core Gestalt principles and how they can be applied to UX design.
          </p>
          {/* Add more content as needed */}
        </div>
        <div className="sidebar">
          <h2>About the Author</h2>
          <div className="author-info">
  <img
    className="author-img"
    alt="Author"
    src="image.png" // Add your author image URL here
  />
  <div className="author-details">
    <p className="author-name">Rebecca Wonts</p>
    <p className="author-handle">@RebeccaWonts</p>
    <button className="follow-btn">Follow</button>
  </div>
</div>
          <div className="more-from-author">
            <h3>More From Rebecca</h3>
            <ul>
              <li><span>Why is AI real in the world</span> <span>20/02/24</span></li>
              <li><span>Techniques used in DIP</span> <span>20/02/24</span></li>
              <li><span>Why is AI real in the world</span> <span>20/02/24</span></li>
              <li><span>Techniques used in DIP</span> <span>20/02/24</span></li>
              <li><span>Techniques used in DIP</span> <span>20/02/24</span></li>
              {/* Add more articles as needed */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
