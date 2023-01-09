import React from 'react'
import './portfolio.css'
import data from '../../assets/projectData/projectInfo'


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, name, description, url}, index) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={name} />
                </div>
                <h3>{name}</h3>
                <div className="portfolio__item-cta">
                  <a href={url} className='btn' target='_blank'>See Project</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio