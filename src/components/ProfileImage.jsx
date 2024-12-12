import React from 'react';
import './ProfileImage.css';

function ProfileImage() {
  return (
    <div className="profile-image">
      
      <h1>Amna Ahmed</h1>
      <p className="lead">Software Engineer | Islamabad</p>
      <div className="contact-links">
        <a href="tel:+923364563881" className="btn">📞 +92 336 4563881</a>
        <a href="https://github.com/amnaahmed567" target="_blank" className="btn">GitHub</a>
        <a href="https://linkedin.com/in/amna-mustajeeb-133327260" target="_blank" className="btn">LinkedIn</a>
      </div>
    </div>
  );
}

export default ProfileImage;
