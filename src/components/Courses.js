import React from 'react'
import {courses} from '../data'
import {CourseCard} from  './CourseCard'

const Courses = () => {
  return (
    <div className="courses-container" id="courses">
        <div className="projects-text">
            <h2>Courses I've Done</h2>
            <div className="courses-list">
            {courses.map((course) => {
                return(
                <CourseCard key={course.id} course={course}/>
                )
            })}
        </div>
    </div>
    </div>
  )
}

export default Courses