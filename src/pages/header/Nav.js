import './nav.css';
import img from '../../img/image.jpg';
import React from 'react'

const nav = () => {
  return (
    <div className='nav-all'>
      <div className='nav'>
        <div className='logo'>
            <a href="/" className='logo-h1'>minimø</a>
        </div>
        <div className='nav-menu'>
          <ul className="nav-list">
            <li class="nav-list__item"><a href="/" class="nav-list__link">lifestyle</a></li>
            <li class="nav-list__item"><a href="/photodiary" class="nav-list__link">photodiary</a></li>
            <li class="nav-list__item"><a href="/" class="nav-list__link">music</a></li>
            <li class="nav-list__item"><a href="/" class="nav-list__link">travel</a></li>
          </ul>
        </div>
      </div>
      <div className='nav-img'>
        <img src={img} alt="title" className='image'/>
      </div>
      <div className='nav-text'>
        <h4 className='nav-text-h4'>photodiary</h4>
        <h2 className='nav-text-h2'>The perfect weekend getaway </h2>
        <p className='nav-text-p'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
      </div>
    </div>
  )
}

export default nav
