import React from 'react'
import './TopNav.css'
import { Link } from 'react-router-dom'

const TopNav = () => {
  return (
    <div>
            <div className='navbar'>


<h1 id='logo'>Sunil Choudhary</h1>

</div>
<div className='navlink'>
<Link to='/Home'>Home</Link>
<Link to='/About'>About</Link>
<Link to='/Contact'>Contect</Link>
<Link to='/Exeprience'>Exeprience</Link>
<Link to='/Project'>Project</Link>
<Link to='/Gallery'>Gallery</Link>



</div>
    </div>
  )
}

export default TopNav
