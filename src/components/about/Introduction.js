import React from 'react';

export default function Introduction() {
  return (
    <div id='profile-container' data-aos='fade-right'>
      <div id='profile-image'></div>
      <div id='profile-introduction'>
        <h5 id='who-this'>Intro</h5>
        <p id='who-this-description'>
          A skilled <b>Software Engineer</b> with over 5 years of experience in
          Software Development. I possess in-depth knowledge of JavaScript(es6),
          reactjs, JQuery, Bootstrap, tailwindcss, Postgresql, and Git, along
          with extensive expertise in <b>Ruby on Rails</b>. I am a dedicated
          individual that likes to take on new challenges and put his skills to
          the test. I am always eager to learn new technologies to enhance my
          skill set and stay ahead of the curve. <br />
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
