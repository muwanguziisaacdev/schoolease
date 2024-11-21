'use client'
import TeacherCardComponent from '@/app/Components/Users/Teacher/TeacherCard';
import React, {useState} from 'react'

const TeacherList = () => {
    const [teachers, setTeachers] = useState([
        {id: 1, names: 'Mugabe Peter', subjects: ['Biology', 'Physics', 'Mathmematics'], role: 'Teacher'},
        {id: 2, names: 'John Doe', subjects: ['Biology', 'Physics', 'Mathmematics'], role: 'Teacher'},
        {id: 3, names: 'Looks Cat', subjects: ['Biology', 'Physics', 'Mathmematics'], role: 'Teacher'},
        {id: 4, names: 'Andrew Stevano', subjects: ['Biology', 'Physics', 'Mathmematics'], role: 'Teacher'},
        {id: 5, names: 'Cathenna', subjects: ['Biology', 'Physics', 'Mathmematics'], role: 'Teacher'},
        {id: 6, names: 'Hrisovalantis', subjects: ['Biology', 'Physics', 'Mathmematics'], role: 'Teacher'}
    ]);
  return (
    <div className='container-view'>
        <ul className='flex flex-wrap gap-5'>
        {teachers.map((teacher) => (
            <li key={teacher.id}>
                <TeacherCardComponent
                    id = {teacher.id}
                    name = {teacher.names} 
                    subjects = {teacher.subjects} 
                    role = {teacher.role} />
            </li>
            ))}
        </ul>
        <div>

        </div>
    </div>
  )
}

export default TeacherList