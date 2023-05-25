import arrow from '../../img/arrow.png';
import Button from './button/Button';
import { blocks } from './list/Blocks';
import Block from './block/Block';
import './main.css';
import React from 'react'

const main = () => {
  return (
    <div className='main-all'>
      <div className='container'>
        <div className='view-block'>
          <h4 className='main-h4'>Leave a comment</h4>
          <div className='blocks'>
          {blocks.slice(0,4).map((block) => {
              return <Block title={block.title} img={block.img} category={block.categoty}/>
            })}
          </div>
        </div>
      </div>
      <div className='main-line'>
        <h2 className='main-line-h2'>Sign up for our newsletter!</h2>
        <div className='input-all'>
          <input className='input-main' placeholder='Enter a valid email address'/>
          <img src={arrow} alt='arrow'className='arrow'/>
        </div>
      </div>
      <div className='container'>
        <div className='view-block'>
          <div className='blocks'>
          {blocks.slice(4,6).map((block) => {
              return <Block title={block.title} img={block.img} category={block.categoty}/>
            })}
          </div>
        </div>
      </div>
      <Button />
    </div>
  )
}

export default main
