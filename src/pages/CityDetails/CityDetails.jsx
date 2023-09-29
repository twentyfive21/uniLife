import React from 'react'
import './CityDetails.css'
import Banner from '../../components/Banner/Banner'
import data from '../../utils/data'

function CityDetails() {
  return (
    <div>
    <Banner data={data[2].info[2]}/>
    </div>
  )
}

export default CityDetails