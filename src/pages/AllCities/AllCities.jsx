import React, {useContext} from 'react'
import './AllCities.css'
import Banner from '../../components/Banner/Banner'
import data from '../../utils/data'
import { CityContext } from '../../contexts/CityContext'

function AllCities() {
  const {error, cities} = useContext(CityContext) 
  return (
    <div className='allcities-container'>
    <Banner data={data[2].info[1]}/>
    <h1>Search by City</h1>
    <section>
      {
        cities.map(city => 
        <div key={city._id} className='allcities-selection'>
          <p>{city.name}</p>
        </div>)
      }
    </section>
    {
      error && <h2>The site is currently down please check back later! </h2>
    }
    </div>
  )
}

export default AllCities