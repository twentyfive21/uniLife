import search from '../assets/middle/earth.png'
import compare from '../assets/middle/compare.png'
import bills from '../assets/middle/bills.png'
import best from '../assets/middle/best.png'
import heart from '../assets/middle/heart.png'
import homeBanner from '../assets/header/banner1.jpeg'
import allBanner from '../assets/header/banner2.jpeg'
import detailBanner from '../assets/header/banner3.jpg'
const data = [
    {
       info: 
       [
        {
           id: 0,
           img: search,
           title: 'Search',
           text:'Find your dream home in the perfect area near your university.' 
        },
        {
           id: 1,
           img: compare,
           title: 'Compare',
           text:'Compare student accommodation to find the right home for you.'  
        },
        {
           id: 2,
           img: bills,
           title:'Bills Included',
           text:'Bills are included in all rent prices. No hidden fees.'  
        }
       ]
    },
    {
      info:
      [
         {
            id: 3,
            img: best,
            title: 'Best selection',
            text: 'Best selection of student accommodations. Never been easier to find a home that’s right for you.'
         },
         {
            id: 4,
            img: heart,
            title: 'Your favorite',
            text: 'Shortlist your favourite properties and send enquiries in one click.'
         },
      ]
    }, 
    {
      info: 
      [
         {
            id: 5,
            img: homeBanner,
            heading:"Find student homes with bills included",
            text: "A simple and faster way to search for student accommodation"
         },
         {
            id: 6,
            img: allBanner,
            heading:"Student Accomodation",
            text: "UniLife have student accommodation available across the UK. Whatever you’re after, we can help you find the right student accommodation for you."
         },
         {
            id: 7,
            img: detailBanner,
            heading:"Search Accomodation",
            text: "Whatever you’re after, we can help you find the right student accommodation for you."
         }

      ]
    }

]
export default data 