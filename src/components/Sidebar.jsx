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
        <a href='#' className='item'>
          <BiSearchAlt className='icon'/>
          Research
        </a>
        <a href='#' className='item'>
        <BiCalendarEvent className='icon'/>
          Planning
        </a>
        <a href='#' className='item'>
          <BiPalette className='icon'/>
          Designing
        </a>
        <a href='#' className='item'>
          <BiCog className='icon'/>
          Manufacturiing
        </a>
        <a href='#' className='item'>
          <BiDollarCircle className='icon'/>
          Sales/Marketing
        </a>
      </div>

    </div>
  )
}

export default Sidebar