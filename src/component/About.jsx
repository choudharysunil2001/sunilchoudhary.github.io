import React from 'react'
import './About.css'
import aimg from './image/sunil_smile.jpg'
import gimg from './image/social-girl.jpg'


const About = () => {
  return (
    <div>
      <div className='about'>
        <img src={gimg} alt="" />
      </div>
      <div className='about1'>
        <div className='myprofile'>
          <h2>My Profile</h2>
        </div>
        <div className='profile'>
          <div className='profile1'><img src={aimg} alt="" /></div>
        </div>
        <h4>Name : <span>Sunil Choudhary</span></h4>
        <h4>Email : <span>sunilchoudhary8385@gmail.com</span></h4>
        <h4>Address : <span>Rawan Gat Jaipur</span></h4>
        <h4>Mobile NOb : <span>8385004656</span></h4>
        <h4>Pin Code : <span>303338</span></h4>
        <h4>Status : <span>Rajsthan</span></h4>
        <h4>City : <span>Jaipur</span></h4>
      </div>
      <div className='about2'>
        <button type='sumbit' className='btn'>Download CV</button><br></br>
        <button type='sumbit' className='btn2'>View CV</button><br></br>
      </div>
    </div>
  )
}

export default About
