import './photodiary.css';
import img3 from '../../img/img3.jpg';
import img4 from '../../img/img4.jpg';
import img6 from '../../img/img6.jpg';
import img7 from '../../img/img7.jpg';
import img8 from '../../img/img8.jpg';
import img9 from '../../img/img9.jpg';
import avatar from '../../img/avatar.png';
import jdgreen from '../../img/jd-green.png';
import jd from '../../img/jd.png';
import faceb from '../../img/faces.png';
import face from '../../img/face.png';
import tw from '../../img/tw.png';
import g from '../../img/g+.png';
import t from '../../img/t.png';
import pint from '../../img/pint.png';
import React from 'react'
import { NavLink } from 'react-router-dom';

const Photodiary = () => {
  return (
    <div className='photodiary-all'>
      <div className='container'>
        <div className='photodiary-wrap'>
          <p className='photo-title'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <img src={img7} alt='img7' className='photo-img' />
          <img src={img8} alt='img8' className='photo-img' />
          <img src={img9} alt='img9' className='photo-img' />
          <p className='photodiary-italic'>“Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.” </p>
          <p className='photo-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
          <div className='photo-social'>
            <p>Share</p>
            <ul className="social-photo">
              <li className="social-photo"><NavLink to="#!"><img src={faceb} alt="Link" /></NavLink></li>
              <li className="social-photo"><NavLink to="#!"><img src={tw} alt="Link" /></NavLink></li>
              <li className="social-photo"><NavLink to="#!"><img src={g} alt="Link/" /></NavLink></li>
              <li className="social-photo"><NavLink to="#!"><img src={t} alt="Link/" /></NavLink></li>
              <li className="social-photo"><NavLink to="#!"><img src={pint} alt="Link/" /></NavLink></li>
            </ul>
          </div>
        </div>
      </div>
      <div className='photo-line'>
        <div className='container'>
          <div className='photodiary-wrap'>
            <h4 className='photo-line-h4'>you may also like</h4>
            <div className='photo-line-blocks'>
              <div className='photo-block'>
                <img src={img6} alt='img6' className='photo-line-img' />
                <h2 className='photo-line-title'>Cold winter days</h2>
              </div>
              <div className='photo-block'>
                <img src={img4} alt='img4' className='photo-line-img' />
                <h2 className='photo-line-title'>A day exploring the Alps</h2>
              </div>
              <div className='photo-block'>
                <img src={img3} alt='img3' className='photo-line-img' />
                <h2 className='photo-line-title'>American dream</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='photodiary-wrap'>
          <h4 className='coments-h4'>2 comments</h4>
          <div className='coments-blocks'>
            <div className='coments-block'>
              <img src={avatar} alt='avatar' className='coment-img' />
              <div className='coment'>
                <h5 className='coment-h5'>John Doe</h5>
                <p className='coment-p'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo!</p>
                <h4 className='coment-h4'>Reply</h4>
              </div>
            </div>
            <div className='coments-block'>
              <img src={jdgreen} alt='jdgreen' className='coment-img'/>
              <div className='coment'>
                <h5 className='coment-h5'>John Doe</h5>
                <p className='coment-p'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo!</p>
                <h4 className='coment-h4'>Reply</h4>
              </div>
            </div>
            <div className='coments-block'>
              <img src={jd} alt='jd' className='coment-img-fix'/>
              <div className='coment'>
                <input className='coment-input' placeholder='Join the discussion'></input>
                <div className='coment-social'>
                  <p>Connected with </p>
                  <ul className="social-coment">
                    <li className="social-coment"><NavLink to="#!"><img src={tw} alt="Link" /></NavLink></li>
                    <li className="social-coment"><NavLink to="#!"><img src={face} alt="Link" /></NavLink></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Photodiary
