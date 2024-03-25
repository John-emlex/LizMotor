import React from 'react'
import { BiEdit } from 'react-icons/bi'

const ProfileHeader = () => {
  return (
    <div className='profile--header'>
    <div className='header--title'>Profile</div>
    <div className='edit'>
        <BiEdit className='icon' />
    </div>
    </div>
  )
}

export default ProfileHeader