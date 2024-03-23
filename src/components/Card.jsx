import React from 'react';
import { BiLinkExternal, BiShareAlt } from 'react-icons/bi';

const courses = [
    {
        title: 'External',
        icon: <BiLinkExternal />
    },{
        title: 'Internal',
        icon: <BiShareAlt />
    }
]


const Card = () => {
  return (
    <div className='card--container'>
        {courses.map((item) => (
            <div className='card'>
                 <div className='card--cover'>{item.icon}</div>
                  <div className='card--title'>
                    {item.title}
                  </div>
            </div>
        ))}
    </div>
  )
}

export default Card