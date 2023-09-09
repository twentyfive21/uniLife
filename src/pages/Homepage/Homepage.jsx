import {React, useEffect} from 'react'
import './Homepage.css'
import Banner from '../../components/Banner/Banner'

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
    <Banner />
    </div>
  )
}

export default Homepage