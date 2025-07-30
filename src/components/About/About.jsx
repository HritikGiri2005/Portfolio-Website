import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import Tilt from 'react-parallax-tilt'
import ProfilePic from '../../assets/ProfilePic.jpg'
const About = () => {
  return (
    <section
      id='about'
      className='py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32'
    >
      <div className='flex flex-col-reverse md:flex-row justify-between items-center'>
        {/* Left Side */}
        <div className='md:w-1/2 text-center md:text-left mt-8 md:mt-0'>
          {/* greeting */}
          <h1 className='text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-2 leading-tight'>
            Hello, I am
          </h1>
          {/* name */}
          <h2 className='text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight'>
            Hritik Giri
          </h2>
          {/* skills heading with typing effect */}
          <h3 className='text-xl sm:text-2xl md:text-3xl font-semibold mb-4 leading-tight text-white'>
            I am a{' '}
            <span className='text-[#8245ec]'>
              <Typewriter
                words={[
                  'FullStack Developer',
                  'Web Developer',
                  'Python Programmer',
                  'Python Developer',
                  'Coder',
                ]}
                loop={true}
                cursor
                cursorStyle='|'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </h3>
          {/* About Me Paragraph */}
          <p className='text-base sm:text-lg md:text-lg text-gray-400 mb-10 leading-relaxed'>
            I am a passionate and dedicated developer with a strong foundation in computer science and a keen interest in building innovative solutions. I have a strong background in Python and have experience with various frameworks and libraries.
          </p>
          {/* Resume */}
          <a href="https://drive.google.com/file/d/1RQb_5eii8VgfFECncJCn8-hKsSsIzHIH/view?usp=sharing"
            target='_blank'
            rel='noopener noreferrer'
            className='inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-110'
            style={{
              background: 'linear-gradient(90deg,#8245ec,#a855f7)',
              boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
            }}>
            Download Resume
          </a>
        </div>

        {/* right side */}
        <div className='md:w-1/2 flex justify-center md:justify-end'>
          <img src="{ProfilePic}" alt="Hritik Giri" className='w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]' />
        </div>

      </div>
    </section>
  );
};

export default About;
