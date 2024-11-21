import Image from 'next/image'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faContactCard, faMessage } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

const TeacherCardComponent = ({name, subjects, role, id}) => {
  return (
    <>
        <div className='flex flex-col items-center justify-evenly w-[350px] bg-[#020214] text-white font-medium  h-[350px] gap-2 rounded-md'>
          <div className="profile-picture">
            <Image 
              src={'/my-picture.jpg'}
              width={100}
              height={100}
              alt='Profile picture'
              className='rounded-full w-[100px] h-[100px] mt-5'
            />
          </div>
          <h2 className='text-xl'> { name }</h2>
          <h2 className='text-gray-500'> {role } </h2>
          <ul className='flex gap-2 subjects-list'>
            {subjects.map((subject, index) => (
              <li key={index} className='px-4 py-2 text-sm rounded-md cursor-pointer'>{subject}</li>
            ))}
          </ul>
          <div className='flex gap-5'>
            <button className='flex items-center gap-2 px-6 py-2 bg-purple-900 rounded-[10px]'>
              <Link href={`/admin/users/teachers/details/${id}`}>
                <FontAwesomeIcon icon={faContactCard}/>
                <h2>Profile</h2>
              </Link>

            </button>
            <button className='flex items-center gap-2 px-6 py-2 bg-orange-600 rounded-[10px]'>
              <FontAwesomeIcon icon={faMessage} />
              <h2>Chat</h2>
            </button>
          </div>
        </div>
    </>
  )
}

export default TeacherCardComponent