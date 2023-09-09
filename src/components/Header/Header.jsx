import React from 'react'
import './Header.css'
import house from '../../assets/header/house.png'
import heart from '../../assets/header/heart.png'
import contact from '../../assets/header/email.png'
import {Link, useNavigate} from 'react-router-dom'


function Header() {
const navigate = useNavigate()

  return (
    <header>
    <section className='header-horz'>
        <img src={house} alt='house icon'/>
        <h2>UniLife</h2>
    </section>
    <section className='header-right'>
        <div className='header-horz'>
        <img src={heart} alt='heart'/>
        <Link to='#'>Shortlist</Link>
        </div>
        <div className='header-horz'>
        <img src={contact} alt='contact us'/>
        <Link to='#'>Contact Us</Link>
        </div>
    </section>
    </header>
  )
}

export default Header