import React, {useContext} from 'react'
import './AllCities.css'
import Banner from '../../components/Banner/Banner'
import data from '../../utils/data'
import { CityContext } from '../../contexts/CityContext'
import { useNavigate } from 'react-router-dom'

function AllCities() {

  const navigate = useNavigate();
  const {error, cities} = useContext(CityContext);

  const handleChosenCity = (city) => {
    navigate(`/citydetails/${city}`)
  }

  return (
    <div className='allcities-container'>
    <Banner data={data[2].info[1]}/>
    <h1>Search by City</h1>
    <section>
      {
        cities?.map(city => 
        <button onClick={()=>handleChosenCity(city?._id)} key={city?._id} className='allcities-selection'>
          <p>{city?.name}</p>
        </button>)
      }
    </section>
    {
      error && <h2>The site is currently down please check back later! </h2>
    }
    </div>
  )
}

export default AllCities