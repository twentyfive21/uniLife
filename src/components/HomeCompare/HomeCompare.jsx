import React from 'react'
import './HomeCompare.css'
import data from '../../utils/data.js'

function HomeCompare() {
  return (
    <div className='compare-container'>
      <section className='top-compare-box'>
        <h2>Compare all inclusive student homes.</h2>
        <section className='top-compare'>
        {data[0].info.map(item => (
          <div key={item.id} className='compare-card'>
            <img src={item.img} />
            <div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          </div>
        ))}
        </section>
      </section>
      <section>
        
      </section>
    </div>
  )
}

export default HomeCompare
{/* <p>{data[0].info[0].title}</p> */}