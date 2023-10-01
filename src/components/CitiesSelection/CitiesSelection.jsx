import React from 'react'
import './CitiesSelection.css'

function CitiesSelection() {
  return (
    <form className='citydetail-form'>
    <fieldset>
    <label htmlFor="bedroom">Min Bedroom</label>
      <select id='bedroom'>
        <option disabled>Any bedroom</option>
        <option value="1">1</option>
      </select>
    </fieldset>
    <fieldset>
    <label htmlFor="bathroom">Min Bathroom</label>
      <select id='bathroom'>
        <option disabled>Any bathroom</option>
        <option value="1">1</option>
      </select>
      </fieldset>
      <fieldset>
    <label htmlFor="price">Max Price</label>
      <select id='price'>
        <option disabled>Any Price</option>
        <option value="1">1</option>
      </select>
      </fieldset>
      <fieldset>
    <label htmlFor="homeType">Home Type</label>
      <select id='homeType'>
        <option disabled>Any type</option>
        <option value="detached">detached</option>
        <option>apartment</option>
        <option>unfurnished</option>
      </select>
      </fieldset>
  </form>
  )
}

export default CitiesSelection