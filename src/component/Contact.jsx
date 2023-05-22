import React, { useState } from 'react'
import './Contact.css'

const Contact = () => {


  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [address, setAddress] = useState('');
  const [status, setStatus] = useState('');

  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [mobileError, setMobileError] = useState('');
  const [addressError, setAddressError] = useState('');
  const [statusError, setStatusError] = useState('');

  function isValid(itemName, value) {

    let regex;
    if (itemName === 'name') {
      regex = /[A-Za-z]{3,15}$/;
    }
    else if (itemName === 'email') {
      regex = /[A-Za-z]{3,25}$/
    }
    else if (itemName === 'mobile') {
      regex = /[A-Za-z]{10}$/
    }
    else if (itemName === 'address') {
      regex = /[A-Za-z]{3,50}$/
    }
    else if (itemName === 'status') {
      regex = /[A-Za-z]{3,15}$/
    }
  
    return regex.test(value);
  }
  const onContact = () => {
    if (!isValid('name', name)) {
      setNameError('Enter a valid name');
    }
    else {
      setNameError('');
    }
    if (!isValid('email', email)) {
      setEmailError('Enter a valid email');
    }
    else {
      setEmailError('');
    }
    if (!isValid('mobile', mobile)) {
      setMobileError('Enter a valid mobile');
    }
    else {
      setMobileError('');
    }
    if (!isValid('address', address)) {
      setAddressError('Enter a valid address');
    }
    else {
      setAddressError('');
    }
    if (!isValid('status', status)) {
      setStatusError('Enter a valid status');
    }
    else {
      setStatusError('');
    }
    
    
    console.log(name, email, mobile, address, status);
  }
  return (
    <div>
      <div className='contact'>
        <div className='contact1'>
          <div className='contact2'><h2>Contact</h2></div>
          <form>
            <div className="form-group"><br /><br /><br />
              <label >Name: </label>
              <input type="text" className="form-control" id="name" placeholder="Enter name" name="name" value={name} onChange={(e)=>setName(e.target.value)}/>
              {nameError ? <span style={{ color: 'red' }}>{nameError}</span> : null}
            </div>
            <div className="form-group"><br />
              <label >Email: </label>
              <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
              {emailError ? <span style={{ color: 'red' }}>{emailError}</span> : null}
            </div>
            <div className="form-group"><br />
              <label >Mobile: </label>
              <input type="number" className="form-control" id="mob" placeholder="Enter mobile" name="mob" value={mobile} onChange={(e)=>setMobile(e.target.value)}/>
              {mobileError ? <span style={{ color: 'red' }}>{mobileError}</span> : null}
            </div>
            <div className="form-group"><br />
              <label >Adderss: </label>
              <input type="text" className="form-control" id="address" placeholder="Enter address" name="address" value={address} onChange={(e)=>setAddress(e.target.value)}/>
              {addressError ? <span style={{ color: 'red' }}>{addressError}</span> : null}
            </div>
            <div className="form-group"><br />
              <label >Status: </label>
              <input type="text" className="form-control" id="status" placeholder="Enter status" name="status" value={status} onChange={(e)=>setStatus(e.target.value)}/>
              {statusError ? <span style={{ color: 'red' }}>{statusError}</span> : null}

            </div>
            <button type="button" onClick={()=>onContact()} className="btn btn-default">Submit</button>
          </form>
        </div>
      </div>
    </div>

  )
}

export default Contact
