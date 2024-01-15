import React from 'react'
import './about.css'
import IMAGE from '../../assets/ProfilePic.jpg'
import {HiDesktopComputer} from 'react-icons/hi'
import {AiOutlineRocket} from 'react-icons/ai'
import {FaCertificate} from 'react-icons/fa'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know Me</h5>
      <h2>About Me</h2>
      <div className="about__container">
        <div />

        <div className="about__me">
          <div className="about__me-image">
            <img src={IMAGE} alt="About Me" />

          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <HiDesktopComputer className="about__icon"/>
              <h5>Experience</h5>
              <small>1+ Years Working, 4 Internships</small>
            </article>

            <article className="about__card">
              <AiOutlineRocket className="about__icon"/>
              <h5>Projects</h5>
              <small>10+ Projects Completed</small>
            </article>

            <article className="about__card">
              <FaCertificate className="about__icon"/>
              <h5>Certified</h5>
              <small>Web Dev, Cloud Engineer...</small>
            </article>
            <article></article>
          </div>

          <p>Hey there! 👋 <br/>I'm Monir, a 4th year Computer Science student at the University of Waterloo
            with a passion for creating interactive and responsive software. I have experience working on web-based, 
            desktop and mobile applications through my previous internships and academic career. 
            I am always looking to expand my knowledge and skill set.  <br/> Please feel free to reach out to chat!</p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>

        </div>
      </div>
    </section>
  )
}

export default About