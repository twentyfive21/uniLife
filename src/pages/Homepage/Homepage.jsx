import {React, useContext, useEffect, useState} from 'react'
import './Homepage.css'
import Banner from '../../components/Banner/Banner'
import select from '../../assets/header/select.png'
import HomeCompare from '../../components/HomeCompare/HomeCompare'
import {Link} from 'react-router-dom'
import data from '../../utils/data'
import { CityContext } from '../../contexts/CityContext'

function Homepage() {

const {error, cities} = useContext(CityContext) 

  return (
    <div>
    <section className='header-box'>
    <Banner data={data[2].info[0]}/>
    <div className='form-container'>
    <form>
      <img src={select} className='arrow'alt='arrow'/>
      <select>
        <option>Search by City</option>
        {cities.map(city => <option key={city._id}>{city.name}</option>)}
      </select>
      <button>Find Homes</button>
    </form>
    </div>
    </section>
    <section className='cities-section'>
    <h2>Student accommodations in our top cities </h2>
    {error && <h2 className='error'>The site is currently down. Please visit back later!</h2>}
      <section className='cities-container'>
        {cities.slice(0,9).map(city => 
          <div className='city-card' key={city._id}>
          <div className='city-details'>
          <h2>{city.name}</h2>
          <p>{city.property_count} properties</p>
          </div>
          <img src={city.image_url} alt='city' />
          </div>
        )}
       <button>
        <Link to='/allcities'>See All Cities</Link>
      </button>
      </section>
      <section>
        <HomeCompare />
      </section>
    </section>
    </div>
  )
}

export default Homepage
