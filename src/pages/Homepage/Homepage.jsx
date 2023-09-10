import {React, useEffect} from 'react'
import './Homepage.css'
import Banner from '../../components/Banner/Banner'
import select from '../../assets/header/select.png'

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
    <div className='homepage-box'>
    <Banner />
    <div className='form-container'>
    <form>
      <img src={select} className='arrow' alt='arrow'/>
      <select>
        <option>Search by City</option>
      </select>
      <button>Find Homes</button>
    </form>
    </div>
    </div>
  )
}

export default Homepage