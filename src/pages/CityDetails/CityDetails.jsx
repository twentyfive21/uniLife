import React from 'react'
import './CityDetails.css'
import Banner from '../../components/Banner/Banner'
import data from '../../utils/data'
import CitiesSelection from '../../components/CitiesSelection/CitiesSelection'
import CitiesAbout from '../../components/CitiesAbout/CitiesAbout'

function CityDetails() {
  return (
    <div>
    <Banner data={data[2].info[2]}/>
    <CitiesSelection />
    <CitiesAbout />
    </div>
  )
}

export default CityDetails