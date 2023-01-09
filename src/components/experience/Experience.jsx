import React from 'react'
import './experience.css'
import {AiFillStar} from 'react-icons/ai'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>The Skills I Offer</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__software">
          <h3>Software Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <AiFillStar className='experience__details-icon'/>
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <AiFillStar className='experience__details-icon'/>
              <div>
                <h4>CSS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <AiFillStar className='experience__details-icon'/>
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <AiFillStar className='experience__details-icon'/>
              <div>
                <h4>React.js</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <AiFillStar className='experience__details-icon'/>
              <div>
                <h4>BootStrap</h4>
                <small className="text-light">Fundamental</small>
              </div>
            </article>

            <article className="experience__details">
              <AiFillStar className='experience__details-icon'/>
              <div>
                <h4>Java</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experience__cloud">
          <h3>Cloud Management</h3>
          <div className="experience__content">
            <article className="experience__details">
              <AiFillStar className='experience__details-icon'/>
              <div>
                <h4>Microsoft Azure</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              <AiFillStar className='experience__details-icon'/>
              <div>
                <h4>AWS</h4>
                <small className="text-light">Fundamentals</small>
              </div>
            </article>

            <article className="experience__details">
              <AiFillStar className='experience__details-icon'/>
              <div>
                <h4>Terraform</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              <AiFillStar className='experience__details-icon'/>
              <div>
                <h4>Azure DevOps</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              <AiFillStar className='experience__details-icon'/>
              <div>
                <h4>Ansible</h4>
                <small className="text-light">Fundamental</small>
              </div>
            </article>

            <article className="experience__details">
              <AiFillStar className='experience__details-icon'/>
              <div>
                <h4>Packer</h4>
                <small className="text-light">Fundamental</small>
              </div>
            </article>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Experience