import { useState } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer';
import AllCities from './pages/AllCities/AllCities';
import CityContextProvider from './contexts/CityContext';
import CityDetails from './pages/CityDetails/CityDetails';


function App() {

  return (
    <>
    <BrowserRouter>
    
    <CityContextProvider>
    <Header/>

    <Routes>
    <Route path='/' element={<Homepage />} />
    <Route path='/allcities' element={<AllCities />} />
    <Route path='/citydetails' element={<CityDetails />} />
    </Routes>
    
    <Footer />
    </CityContextProvider>

    </BrowserRouter>
    </>
  )
}

export default App
