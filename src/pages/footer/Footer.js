import './footer.css';
import face from '../../img/face.png';
import twitter from '../../img/twitter.png';
import instagram from '../../img/insta.png';
import React from 'react'

const Footer = () => {
  return (
    <div className='footer-all'>
      <div className='footer'>
        <div className='footer-left'>
          <p>Terms and conditions</p>
          <p>Privacy</p>
        </div>
        <div className='footer-right'>
          <p>Follow</p>
          <ul className="social">
            <li className="social__item"><a href="#!"><img src={face} alt="Link" /></a></li>
            <li className="social__item"><a href="#!"><img src={twitter} alt="Link" /></a></li>
            <li className="social__item"><a href="#!"><img src={instagram} alt="Link/" /></a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer
