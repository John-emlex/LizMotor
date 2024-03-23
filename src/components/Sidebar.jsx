import React from 'react'
import {  BiCalendarEvent, BiCar, BiCog, BiDollarCircle, BiHome, BiPalette, BiSearchAlt, } from "react-icons/bi"
import '../styles/sidebar.css'

const Sidebar = () => {
  return (
    <div className='menu' >

      <div className='logo' >
    <BiCar className='logo-icon'/>
    <h2>Liz Motors</h2>
      </div>

      <div className='menu--list' >
        <a href='#' className='item'>
          <BiHome className='icon'/>
          Dashboard
        </a>
        <a href='#' className='item item1'>
          <BiSearchAlt className='icon'/>
          Research
        </a>
        <a href='#' className='item item2'>
        <BiCalendarEvent className='icon'/>
          Planning
        </a>
        <a href='#' className='item item3'>
          <BiPalette className='icon iron3'/>
          Designing
        </a>
        <a href='#' className='item item4'>
          <BiCog className='icon icon4'/>
          Manufacturing
        </a>
        <a href='#' className='item item5'>
          <BiDollarCircle className='icon icon5'/>
          Sales/Marketing
        </a>
      </div>

    </div>
  )
}

export default Sidebar