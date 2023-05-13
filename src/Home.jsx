import React from 'react'
import './Home.css'
import Img from './component/image/sunil_smile.jpg'

export const Home = () => {
  return (
    <div>
      <div className='container'>
        <div className='box1'>
          <div className='box3'>
            <img src={Img} alt="" />
          </div>
        </div>
        <div className='box2'>

        </div>

      </div>
    </div>
  )
}
export default Home