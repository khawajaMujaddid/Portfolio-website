import React from 'react';
import Particles from 'react-particles-js';
import styles from '../../styles/home.scss';
import { AiOutlineArrowRight } from 'react-icons/ai';
import ReactTypingEffect from 'react-typing-effect';

const TypingStyle = {
  letterSpacing: '0.03cm',
  fontSize: 'clamp(1.4rem, .8rem + 2vw, 7rem)',
  fontWeight: 'lighter',
  color: 'white',
};

export default function Home() {
  return (
    <div style={{ position: 'relative' }}>
      <div className={styles.scale_in_center} id='welcome'>
        <h1
          data-aos='zoom-out'
          data-aos-duration={2000}
          style={{ fontWeight: 'lighter' }}
        >
          Hello , I'm{' '}
          <span style={{ color: 'rgb(227,27,109)' }}>Mujaddid Mahmood.</span>
          <br />
          I'm&nbsp;
          <span>
            <ReactTypingEffect
              text={['RoR Full Stack Developer.']}
              cursorRenderer={(cursor) => <span>{cursor}</span>}
              typingDelay='1200'
              eraseDelay='1500'
              displayTextRenderer={(text) => {
                return (
                  <div>
                    {text.split('').map((char, i) => {
                      return (
                        <span key={i} style={TypingStyle}>
                          {char}
                        </span>
                      );
                    })}
                  </div>
                );
              }}
            />
          </span>
        </h1>
        <br />
        <a
          href='#projects'
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <button id='view_work_btn'>
            View My Work
            <p id='workbtn_logo'>
              &nbsp;&nbsp;
              <AiOutlineArrowRight />
            </p>
          </button>
        </a>
      </div>

      <Particles
        id='particles-js'
        params={{
          particles: {
            number: {
              value: 20,
              density: {
                enable: true,
                value_area: 250,
              },
            },
            backgroundImage: {
              value: 'linearGradient(rgb(4, 194, 201),rgb(227, 27, 109))',
            },
            opacity: {
              value: 1,
              anim: {
                enable: false,
              },
            },
            size: {
              value: 5,
              random: true,
              anim: {
                enable: true,
                speed: 3,
              },
            },
            line_linked: {
              enable: true,
            },
            move: {
              speed: 0.45,
            },
          },
        }}
      />
    </div>
  );
}
