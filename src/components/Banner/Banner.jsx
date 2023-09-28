import React from 'react'
import './Banner.css'

function Banner({data}) {
  return (
    <div className='banner-container'>
    <img src={data.img} alt='banner' />
    <div className='banner-text'>
      <h1>{data.heading}</h1>
      <p>{data.text}</p>
    </div>
    </div>
  )
}

export default Banner