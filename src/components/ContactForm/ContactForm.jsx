import React, {useState} from 'react'
import './ContactForm.css'
import mail from '../../assets/contact/contactForm.png'

function ContactForm() {
  return (
    <div className='contact-container'>
        <div className='contact-header-container'>
          <div className='contact-header-box'>
            <h2>Contact Us</h2>
            <img src={mail} alt='mail icon'/>
          </div>
          <p>Feel free to contact us if you have any questions. <br/> Looking forward to hear from you.</p>
        </div>
        <form className='form-container'>
        <div>
          <label htmlFor='name'>Name</label>
            <input type='text' id='name' name='name' placeholder='Enter your name'/>
          <label htmlFor='phone'>Phone Number</label>
            <input type='number' id='phone' name='phone' placeholder='Enter your phone number'/>
          <label htmlFor='status'>Are you a... </label>
            <input type='text' id='status' name='status' placeholder='Student' />
        </div>
        <div>
          <label htmlFor='email'>Email</label>
            <input type='email' id='email' name='email' placeholder='Enter your email address'/>
          <label htmlFor='message'>Message</label>
            <textarea id='message' name='message' placeholder='Enter your message'/>
        </div>
        </form>
    </div>
  )                 
}

export default ContactForm