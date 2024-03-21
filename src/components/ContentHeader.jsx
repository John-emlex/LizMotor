import React from 'react'
import { BiNotification, BiSearch } from 'react-icons/bi'

const ContentHeader = () => {
  return (
    <div className='content--header'>
        <h1 className='header--title'>
            Dashboard
            <div className='header--activity'>
                 <div className='searxh-box'>
                    <input type='text' placeholder='Search anything here...'/>
                    <BiSearch className='icon'/>
                 </div>

                 <div className='notify'>
                    <BiNotification className='icon'/>
                 </div>
            </div>
        </h1>
    </div>
    
  )
}

export default ContentHeader