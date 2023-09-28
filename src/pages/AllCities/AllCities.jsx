import React from 'react'
import './AllCities.css'
import Banner from '../../components/Banner/Banner'
import data from '../../utils/data'

function AllCities() {
  return (
    <div>
    <Banner data={data[2].info[1]}/>
    </div>
  )
}

export default AllCities