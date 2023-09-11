import {React, useEffect} from 'react'
import './Homepage.css'
import Banner from '../../components/Banner/Banner'
import select from '../../assets/header/select.png'
import city from '../../assets/middle/city.png'

function Homepage() {
  
useEffect(()=>{
   const fetchData = async () =>{
        try{
            const res = await fetch('https://unilife-server.herokuapp.com/cities');
            const json = await res.json();
            console.log(json);
        }
        catch(err){
            console.log(err);
        }
    }
   fetchData();
}, [])

  return (
    <div>
    <section className='header-box'>
    <Banner />
    <div className='form-container'>
    <form>
      <img src={select} className='arrow'alt='arrow'/>
      <select>
        <option>Search by City</option>
      </select>
      <button>Find Homes</button>
    </form>
    </div>
    </section>
    <section className='cities-section'>
    <h2>Student accommodations in our top cities </h2>
      <section className='cities-container'>
      <div className='city-card'>
        <div className='city-details'>
        <h2>Leeds</h2>
        <p>2 properties</p>
        </div>
      <img src={city} alt='city' />
      </div>
      </section>
    </section>
    </div>
  )
}

export default Homepage