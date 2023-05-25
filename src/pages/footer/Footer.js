import './footer.css';
import face from '../../img/face.png';
import twitter from '../../img/twitter.png';
import instagram from '../../img/insta.png';
import React from 'react'
import { NavLink } from 'react-router-dom';

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
            <li className="social__item"><NavLink to="#!"><img src={face} alt="Link" /></NavLink></li>
            <li className="social__item"><NavLink to="#!"><img src={twitter} alt="Link" /></NavLink></li>
            <li className="social__item"><NavLink to="#!"><img src={instagram} alt="Link/" /></NavLink></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer
