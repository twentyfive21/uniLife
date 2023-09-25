import React from 'react'
import './Banner.css'
import banner from '../../assets/header/banner1.jpeg'

function Banner() {
  return (
    <div className='banner-container'>
    <img src={banner} alt='banner' />
    <div className='banner-text'>
      <h1>Find student homes with bills included</h1>
      <p>A simple and faster way to search for student accommodation</p>
    </div>
    </div>
  )
}

export default Banner