import React from 'react'
import './about.css'
import IMAGE from '../../assets/Image2.jpg'
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
              <small>1+ Years Working</small>
            </article>

            <article className="about__card">
              <AiOutlineRocket className="about__icon"/>
              <h5>Projects</h5>
              <small>20+ Projects Completed</small>
            </article>

            <article className="about__card">
              <FaCertificate className="about__icon"/>
              <h5>Certified</h5>
              <small>Web Dev, Cloud Engineer...</small>
            </article>
            <article></article>
          </div>

          <p>
            Hi! My name is Monir and I am currently a third year, Computer Science student at the University of Waterloo. Through my studies and co-op experiences, I have accrued significant knowledge and technical abilities in the areas of software development and cloud computing. If you'd like to know how I can contribute to your company, project or vision, hit the button below:
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>

        </div>
      </div>
    </section>
  )
}

export default About