'use client'
import React, { useState } from 'react'
import { useParams } from 'next/navigation'
const TeacherProfileView = () => {
    const { id } = useParams();
    const [ teachers, setTeachers ] = useState([
        {id: 1, names: 'Mugabe Peter', subjects: ['Biology', 'Physics', 'Mathmematics'], role: 'Teacher'},
        {id: 2, names: 'John Doe', subjects: ['Biology', 'Physics', 'Mathmematics'], role: 'Teacher'},
        {id: 3, names: 'Looks Cat', subjects: ['Biology', 'Physics', 'Mathmematics'], role: 'Teacher'},
        {id: 4, names: 'Andrew Stevano', subjects: ['Biology', 'Physics', 'Mathmematics'], role: 'Teacher'},
        {id: 5, names: 'Cathenna', subjects: ['Biology', 'Physics', 'Mathmematics'], role: 'Teacher'},
        {id: 6, names: 'Hrisovalantis', subjects: ['Biology', 'Physics', 'Mathmematics'], role: 'Teacher'}
    ]);

    const teacher = teachers.find((teacher) => teacher.id === id);
    console.log(teacher)

  return (
    <div className='container-view'>
        <h2>Hello </h2>
    </div>
  )
}

export default TeacherProfileView