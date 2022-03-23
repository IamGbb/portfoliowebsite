import React from 'react'

export const CourseCard = ({course}) => {
  return (
    <article className='course-card' onClick={() => {window.location.href = course.link}}>
        <div className='course-icon'>{course.icon}</div>
        <div className='course-info'>
        <h4>{course.name}</h4>
        
        </div>
        <span className='organization'>{course.organization}</span>
    </article> 
  )
}