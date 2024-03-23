import React from 'react'
import '../styles/teacherList.css';
import image1 from '/Users/mac/Desktop/LizMotor/src/assets/WhatsApp Image 2024-03-20 at 2.24.13 PM.jpeg' 

const programmers = [
    {
        image: image1,
        name: 'John C Peter'
    }
]

const TeacherList = () => {
  return (
    <div className='teacher--list'>
        <div className='list--header'>
            <h2>Teachers</h2>
            <select>
                <option value='english'>English</option>
                <option value='hindi'>Hindi</option>
            </select>
        </div>
        <div className='list--container'>
            {programmers.map((programmer) => (
                <div className='list'>
                    <div className='teacher--detail'>
                        <img src={programmer.image} alt={programmer.name}/>
                        <h2>{programmer.name}</h2>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default TeacherList