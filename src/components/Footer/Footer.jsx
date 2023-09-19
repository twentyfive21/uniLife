import React from 'react'
import './Footer.css'
import fb from '../../assets/contact/fb.png'
import insta from '../../assets/contact/insta.png'
import twitter from '../../assets/contact/twitter.png'

function Footer() {
  return (
    <footer>
        <section className='top-footer'>
            <div className='tleft'>
            <h2>Keep in touch</h2>
            <p>Curious about new offerings? Sign up for our weekly newsletter and stay informed.</p>
            <form>
            <input placeholder='Your email' />
            </form>
            </div>
            <div className='tright'>
                <h2>Let’s Socialize</h2>
                <div className='socials'>
                <img src={fb} alt='facebook logo'/>
                <p>Facebook</p>
                </div>
                <div className='socials'>
                <img src={twitter} alt='twitter logo'/>
                <p>Twitter</p>
                </div>
                <div className='socials'>
                <img src={insta} alt='insta logo'/>
                <p>Instagram</p>  
                </div>
            </div>
        </section>
        <section className='bottom-footer'>
            <div className='bleft'>
                <a href='https://www.figma.com/file/Sn5caRds8rHtoOq6sLfrc0/UniLife?type=design&node-id=0-1&mode=design&t=jG7HbsqvBwS8ploY-0'>About Us</a>
                <a href='https://github.com/twentyfive21'>Terms & Conditions</a>
                <a href='https://www.apccs.police.uk/privacy-and-cookie-policy/'>Privacy & Cookie Policies</a>
            </div>
            <div className='bright'>
                <p>2023</p>
                <p>&copy;UniLife</p>
            </div>
        </section>
    </footer>
  )
}

export default Footer