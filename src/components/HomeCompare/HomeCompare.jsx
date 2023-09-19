import React from 'react'
import './HomeCompare.css'
import data from '../../utils/data.js'
import man from '../../assets/middle/man.png'
import { Link } from 'react-scroll';

function HomeCompare() {
  return (
    <div className='compare-container'>
      <section className='top-compare-box'>
        <h2>Compare all inclusive student homes.</h2>
        <section className='top-compare'>
        {data[0].info.map(item => (
          <div key={item.id} className='compare-card'>
            <img src={item.img} alt={item.title}/>
            <div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          </div>
        ))}
        </section>
      </section>
      <section className='bCompare-container'>
        <div className='left-bcompare'>
          {
            data[1].info.map(item => (
              <div key={item.id} className='bc-box'> 
              <img src={item.img} alt={item.title}/>
              <div className='bc-column'>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
              </div>
            ))
          }
          <Link to='header'spy={true} smooth={true} duration={1000} ><button id='header'>Search & Compare</button></Link>
        </div>
        <img src={man} className='man' alt='man holding phone'/>
      </section>
    </div>
  )
}

export default HomeCompare
{/* <p>{data[0].info[0].title}</p> */}