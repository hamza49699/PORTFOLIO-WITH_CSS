import React from 'react';
import '../style/Hero.css'; // Import the Hero.css file


const Hero: React.FC = () => {
  return (
    <div id="hero" className="hero-container">
       <img className="profile-image" src="/profile2.jpeg" alt="Profile" />
      <div className="hero-content">
        <div className="spacer"></div>
        <div className="text-container">
          <div>
            <p>I AM</p>
            <p>HAMZA</p>
            <h5>WEB DEVELOPER</h5>
            
          </div>
        </div>
      </div>
     
    </div>
  );
}

export default Hero;
