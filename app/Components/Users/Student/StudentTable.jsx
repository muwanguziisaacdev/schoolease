'use client'
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faContactCard, faEnvelope } from '@fortawesome/free-solid-svg-icons'

const StudentTableComponent = () => {
    const [students, setStudents] = useState([
        {id: 1, names: 'Muwanguzi Isaac', date: 'March 25, 2024', parentName: 'Babirye Sarah', city: 'Mukono', telContact: '+256709675989', email: 'muwanguziisaacuganda@gmail.com', grade: 'S.4'},
        {id: 2, names: 'Muwanguzi Isaac', date: 'March 25, 2024', parentName: 'Babirye Sarah', city: 'Mukono', telContact: '+256709675989', email: 'muwanguziisaacuganda@gmail.com', grade: 'S.4'},
        {id: 3, names: 'Muwanguzi Isaac', date: 'March 25, 2024', parentName: 'Babirye Sarah', city: 'Mukono', telContact: '+256709675989', email: 'muwanguziisaacuganda@gmail.com', grade: 'S.4'}
    ])
  return (
    <div className='container-view'>
        <table className=''>
            <thead>
                <tr>
                    <th>
                        <input type="checkbox" />
                    </th>
                    <th>Name</th>
                    <th>ID</th>
                    <th>Date</th>
                    <th>Parent Name</th>
                    <th>City</th>
                    <th>Contact</th>
                    <th>Grade</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {students.map((student) => (
                    <tr key={student.id}>
                        <td><input type="checkbox" /></td>
                        <td>{student.names}</td>
                        <td className='text-purple-800'>{`ID ${student.id}`}</td>
                        <td className='text-gray-700'>{student.date}</td>
                        <td>{student.parentName}</td>
                        <td>{student.city}</td>
                        <td className='flex justify-evenly'>
                            <FontAwesomeIcon icon={faContactCard} className='cursor-pointer'/>
                            <FontAwesomeIcon icon={faEnvelope} className='cursor-pointer'/>
                        </td>
                        <td className=''>{student.grade}</td>
                        <td>
                            <div className='dots'>
                                <div className="dot"></div>
                                <div className="dot"></div>
                                <div className="dot"></div>
                            </div>
                        </td>
                    </tr>
                ))}

            </tbody>
        </table>
    </div>
  )
}

export default StudentTableComponent;