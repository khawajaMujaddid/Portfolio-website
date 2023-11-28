import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { FaStackOverflow, FaHackerrank } from 'react-icons/fa';
import '../../styles/footer.scss';

export default function Footer() {
  return (
    <div id='footer-container'>
      <div id='icons-container' data-aos='fade-right' data-aos-offset='10'>
        <div id='social-icon'>
          <a
            href='https://www.linkedin.com/in/mujaddid-mahmood-a12535200/'
            target='blank'
            style={{ color: 'inherit' }}
            title='Linkedin'
          >
            <AiFillLinkedin />
          </a>
        </div>
        <div id='social-icon'>
          <a
            href='https://github.com/khawajaMujaddid'
            target='blank'
            style={{ color: 'inherit' }}
            title='Github'
          >
            <AiFillGithub />
          </a>
        </div>
        <div id='social-icon'>
          <a
            href='https://stackoverflow.com/users/18016415/khawaja-mujaddid'
            target='blank'
            style={{ color: 'inherit' }}
            title='StackOverFlow'
          >
            <FaStackOverflow />
          </a>
        </div>
      </div>
      <h6 id='footnote'>
        Mujaddid Mahmood <span style={{ color: 'rgb(248,30,119)' }}>©2023</span>
      </h6>
    </div>
  );
}
