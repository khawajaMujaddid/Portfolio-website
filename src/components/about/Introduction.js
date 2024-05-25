import React from 'react';

export default function Introduction() {
  return (
    <div id='profile-container' data-aos='fade-right'>
      <div id='profile-image'></div>
      <div id='profile-introduction'>
        <h5 id='who-this'>Intro</h5>
        <p id='who-this-description'>
          A passionate software engineer with expertise in full-stack development. I excel in creating innovative solutions using technologies like JavaScript, Ruby on Rails, Vuejs, React, Node.js. I am always eager to learn new technologies to enhance my skill set and stay ahead of the curve.

          This portfolio showcases my work, highlighting my skills in building scalable, user-friendly applications. Thank you for visiting, and I look forward to connecting with you! <br />
          <span style={{ justifyContent: 'center' }}>
            <a
              href='#contact'
              style={{
                color: 'blue',
                textDecoration: 'none',
              }}
            >
              Let's make something special.
            </a>
          </span>
        </p>
      </div>
    </div>
  );
}
