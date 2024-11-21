import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faMoon, faMessage, faBell } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'


const Header = () => {
  return (
    <>
        <header className='h-[8vh] md:h-[10vh] p-4 absolute top-0 left-[25vh] xl:left-[30vh] right-0 bg-slate-200 text-purple-900'>
            <nav className='flex justify-between items-center'>
                <div className='flex gap-2'>
                    <div className='grid grid-cols-3 '>
                        <div className="dots"></div>
                        <div className="dots"></div>
                        <div className="dots"></div>
                        <div className="dots"></div>
                        <div className="dots"></div>
                        <div className="dots"></div>
                        <div className="dots"></div>
                        <div className="dots"></div>
                        <div className="dots"></div>
                    </div>
                    <h2 className='text-2xl font-medium'>Dashboard</h2>
                </div>
                <ul className='w-[50%] flex justify-between items-center'>
                    <FontAwesomeIcon icon={faSearch}/>
                    <FontAwesomeIcon icon={faMoon}/>
                    <FontAwesomeIcon icon={faMessage}/>
                    <FontAwesomeIcon icon={faBell}/>
                    <div className="profile-pic">
                        <Image
                            src={'/my-picture.jpg'}
                            width={50}
                            height={50}
                            alt='profile picture'
                            className='rounded-full'
                        />
                    </div>
                </ul>
            </nav>
        </header>
    </>
  )
}

export default Header