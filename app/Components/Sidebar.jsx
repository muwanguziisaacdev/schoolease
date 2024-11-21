import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faGraduationCap, faPersonRifle, faDollar, faBullhorn, faMessage, faPerson, faBook, faCalendar, faArrowTrendUp  } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'


const Sidebar = () => {
  return (
    <div className='md:w-[25vh] md:h-[100vh] xl:w-[30vh] bg-violet-800 md:fixed top-0 left-0 p-4'>
        <h1 className='flex items-center text-2xl text-white gap-2'>
            <span className='bg-red-400 px-4 py-2  rounded-[40px] '>A</span>
            <span>Akademi</span>
        </h1>
        <ul className='flex flex-col text-white h-[70%]  justify-evenly'>
            <Link href={'/admin/dashboard'} className='flex items-center gap-2 text-xl'>
                <FontAwesomeIcon icon={faHome}/>
                <h2>Dashboard</h2>
            </Link>
            <Link href={'/admin/users/students/studentstable'} className='flex items-center gap-2 text-xl'>
                <FontAwesomeIcon icon={faGraduationCap}/>
                <h2>Student</h2>
            </Link>
            <Link href={'/admin/users/teachers/teacherlist'} className='flex items-center gap-2 text-xl'>
                <FontAwesomeIcon icon={faPersonRifle}/>
                <h2>Teacher</h2>
            </Link>
            <Link href={'/admin/users/parents'} className='flex items-center gap-2 text-xl'>
                <FontAwesomeIcon icon={faPerson}/>
                <h2>Parents</h2>
            </Link>
            <Link href={'/admin/finances'} className='flex items-center gap-2 text-xl'>
                <FontAwesomeIcon icon={faDollar}/>
                <h2>Finances</h2>
            </Link>
            <Link href={'/admin/events'} className='flex items-center gap-2 text-xl'>
                <FontAwesomeIcon icon={faCalendar}/>
                <h2>Events</h2>
            </Link>
            <Link href={'/admin/events'} className='flex items-center gap-2 text-xl'>
                <FontAwesomeIcon icon={faBook}/>
                <h2>Exams</h2>
            </Link>
            <Link href={'/admin/events'} className='flex items-center gap-2 text-xl'>
                <FontAwesomeIcon icon={faArrowTrendUp}/>
                <h2>Results</h2>
            </Link>
            <Link href={'/admin/events'} className='flex items-center gap-2 text-xl'>
                <FontAwesomeIcon icon={faMessage}/>
                <h2>Messages</h2>
            </Link>
            <Link href={'/admin/events'} className='flex items-center gap-2 text-xl'>
                <FontAwesomeIcon icon={faBullhorn}/>
                <h2>Announcements</h2>
            </Link>
        </ul>
    </div>
  )
}

export default Sidebar