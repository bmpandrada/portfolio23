import React from 'react'
import heroImg from './assets/about.png'

const Hero = ({toggle, show}) => {
  return (
    <div className="max-width poly">
    <div className="hero-box col-1-of-2">
      <div className="col-1 ">
        <h2>Hi! I Am Bruce Frontend Developer.</h2>
        <p>
        I build website using high quality tools for projects using Wordpress and Javascript.
        </p>
        <span className={`${toggle ? 'hide':'show'}`}>
        I design and code simple things, and I love what I do, and I am also interested to establish in a long-term career in the field of web development particularly in Website Development | Frontend Developer. Currently I am developing template and customize website thru Wordpress. analyzes structure of website. attend meetings for client provide suggestion and tackle possible problems. implement basic Seo for Website. Manages Informative website design template, customize and E-commerce Website. 
        Responsible for Quality Assurance before turnover and basic Training for clients.
        </span>
        <a className='btn-read' href="#"  onClick={show}>Read more</a>
      </div>
      <div className="col-2">
      <img className="hero-img" src={heroImg} alt="" />
      </div>
    </div>
  </div>
  )
}

export default Hero