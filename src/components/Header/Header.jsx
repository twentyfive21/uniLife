import React,{useState} from 'react'
import './Header.css'
import house from '../../assets/header/house.png'
import heart from '../../assets/header/heart.png'
import contact from '../../assets/header/email.png'
import ContactForm from '../ContactForm/ContactForm'
import {Link} from 'react-router-dom'
import Modal from 'react-modal'


function Header() {
   // create state for modal 
   const [isOpen, setIsOpen] = useState(false)
   // Styling for modal 
   const customStyles = {
     content: {
       top: '50%',
       left: '50%',
       right: 'auto',
       bottom: 'auto',
       marginRight: '-50%',
       transform: 'translate(-50%, -50%)',
       backgroundColor: 'rgba(0, 0, 0, 0)',
       border: "none",
     },
   };
   // Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
   // this is for accessibility and screen readers 
   Modal.setAppElement(document.getElementById('root'));

  return (
    <header>
    <Link to='/'>
    <section id='header' className='header-horz'>
        <img src={house} alt='house icon'/>
        <h2>UniLife</h2>
    </section>
    </Link>
    <section className='header-right'>
        <div className='header-horz'>
        <img src={heart} alt='heart'/>
        <button>Shortlist</button>
        </div>
        <div onClick={()=>setIsOpen(true)} className='header-horz'>
        <img src={contact} alt='contact us'/>
        <button>Contact Us</button>
        </div>
    </section>
    <Modal
          isOpen={isOpen}
          style={customStyles}
          // closes the modal if you click outside the image 
          onRequestClose={()=>setIsOpen(false)}
          contentLabel="Picture Modal">
         <ContactForm />
      </Modal>
    </header>
  )
}

export default Header