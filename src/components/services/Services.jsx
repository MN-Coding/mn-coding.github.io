import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3> 
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Creating beautiful, responsive UI designs.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Ensuring smooth client interatction and reliable front-end data validation.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Managing asynchronous calls to send and receive HTTP requests efficiently.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Managing server side logic to provide data to user.</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Mobile Development</h3> 
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Creating beautiful, responsive mobile UIs.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Cross platform development (iOS and Android).</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Implementing database management system to keep user information secure.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Troubleshooting issues and providing bug fixes quickly and effficiently.</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Cloud Infrastructure</h3> 
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Creating Azure and AWS resources based on company / individual policies and requests.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Standardizing cloud resources using Terraform to manage infrastructure as code.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Creating resource pipelines using Azure DevOps.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Providing Virtual Machine / EC2 with requester specifications and updating to fit needs.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services