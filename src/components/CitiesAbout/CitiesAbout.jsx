import React from 'react'
import './CitiesAbout.css'
import placeholder from '../../assets/placeholder.png'

function CitiesAbout() {
  return (
    <div className='citiesAbout-box'>
    <section>
        <h2>Being a student in Leeds</h2>
        <p>Leeds is a lively and multicultural city with a large student population. It is quite a compact city, so it is easy to get around and has a community feel. Leeds is the perfect mix of city and town life and has something to offer to anyone who calls it home. <br/>
        Leeds is home to three universities, the University of Leeds, Leeds Trinity University and Leeds Beckett University</p>
    </section>
    <img src={placeholder} alt='students sitting'/>
    </div>
  )
}

export default CitiesAbout