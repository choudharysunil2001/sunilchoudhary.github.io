import React from 'react'
import './Exeprience.css';

export const Exeprience = () => {
  return (
    <div className="exp-cotainer">

      <h1>Skills</h1>
      <div className='skills'>
        <div className='skills-item'><h5>HTML</h5>
          <div className='circle'>
            <p className='count'>
              7/10
            </p> </div></div>

        <div className='skills-item'><h5>CSS</h5>
          <div className='circle'>
            <p className='count'>
              8/10
            </p></div></div>

        <div className='skills-item'><h5>JAVASCRIPT</h5>
          <div className='circle'>
            <p className='count'>
              9/10
            </p></div></div>

        <div className='skills-item'><h5>PHP</h5>
          <div className='circle'>
            <p className='count'>
              7/10
            </p></div></div>

        <div className='skills-item'><h5>REACTJS</h5>
          <div className='circle'>
            <p className='count'>
              8/10
            </p></div></div>

        <div className='skills-item'><h5>LARAVEL</h5>
          <div className='circle'>
            <p className='count'>
              9/10
            </p></div></div>
      </div>

      <h1>Education Details</h1>
      <div className='education'>
        <h2>College Education</h2>
        <div className='colleges'>
          <div className='college-item'>
            <h3>University of Rajasthan</h3>
            <h3>B.A</h3>
            <p>Percentage:80%</p>
            <p>Session:2019-2023</p>
          </div>
          <div className='college-item'>
            <h3>University of Rajasthan</h3>
            <h3>B.A</h3>
            <p>Percentage:80%</p>
            <p>Session:2019-2023</p>
          </div>
        </div>

        <h2>Schooling</h2>
        <div className='schooling'>
          <div className='schooling-item'>
            <h3>B.A</h3>
            <p>Year:</p>
            <p>Class:</p>
            <p>Specilization</p>
          </div>
          <div className='schooling-item'>
            <h3>B.A</h3>
            <p>Year:</p>
            <p>Class:</p>
            <p>Specilization</p>
          </div>
          <div className='schooling-item'>
            <h3>B.A</h3>
            <p>Year:</p>
            <p>Class:</p>
            <p>Specilization</p>
          </div>
        </div>
      </div>

      <h1>Experience Details</h1>
      <div className='experiences'>
        <h2>Industrial Experiences</h2>
        <div className='idustrial-exp'>
          <div className='ind-item'>
            <h2 className='orgname'>
              Onclick I,T. Solutions
            </h2>

            <h3 className='position'>
              React Intern
            </h3>
            <p>
              05/2023 - 08/2023
            </p>

            <p>
              Description - Deveioping new user-facing features using React.js
              * Builsing reusable components and front-end libraries for future use
              * Translating designs and wireframes into high-quality code
              * Optimizing components for maximum performance across a vast array of web-capable devices and browser
            </p>
          </div>

          <div className='ind-item'>
            <h2 className='orgname'>
              Onclick I.T. Solutions
            </h2>
            <h3 className='position'>
              Laraval Intern
            </h3>
            <p>
              12/2023 - 05/2023
            </p>
            <p>
              Description - Deveioping new user-facing features using React.js
                            * Builsing reusable components and front-end libraries for future use
                            * Translating designs and wireframes into high-quality code
                            * Optimizing components for maximum performance across a vast array of web-capable devices and browser

            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Exeprience;