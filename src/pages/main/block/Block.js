import React from 'react'

const block = ({img, title, category}) => {
  return (
    <div className='block'>
      <img src={img} alt='img4' />
      <h4 className='block-h4'>{category}</h4>
      <h2 className='block-h2'>{title}</h2>
      <p className='block-p'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea </p>
    </div>
  )
}

export default block
