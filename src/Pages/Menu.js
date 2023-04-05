import { width } from '@mui/system';
import React from 'react'
import menu from './bar.jpg'; // gives image path
const Menu = () => {
  return (
    <div className='menu'>
    <img src={menu} alt="this is menu"/>
    </div>
  )
}

export default Menu