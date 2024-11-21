import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPersonBooth,faGraduationCap, faCalendar, faPersonRifle  } from '@fortawesome/free-solid-svg-icons'

const Dashboard = () => {
  return (
    <div>
        <main className=' container-view '>
          <aside className='absolute top-0 right-0 bg-slate-200 w-[30vh] h-[100vh] rounded-md'>

          </aside>
          <div className="view-dashboard w-[80%]">
            <div className=' bg-slate-200 h-[70px] items-center flex justify-evenly text-xl rounded-md shadow-md'>
                <div className='flex items-center gap-3'>
                  <FontAwesomeIcon icon={faGraduationCap} className='p-3 bg-purple-950 rounded-full text-white'/>
                  <h2 className='flex flex-col text-sm'>
                    <span className='font-medium text-gray-500'>Students</span>
                    <span className='font-bold text-purple-900 text-xl'>93K</span>
                  </h2>
                </div>
                <div className='flex items-center gap-3'>
                  <FontAwesomeIcon icon={faPersonRifle} className='p-3 bg-[#f12d1f] rounded-full text-white'/>
                  <h2 className='flex flex-col text-sm'>
                    <span className='font-medium text-gray-500'>Teachers</span>
                    <span className='font-bold text-purple-900 text-xl'>74K</span>
                  </h2>
                </div>
                <div className='flex items-center gap-3'>
                  <FontAwesomeIcon icon={faCalendar} className='p-3 bg-yellow-500 rounded-full text-white'/>
                  <h2 className='flex flex-col text-sm'>
                    <span className='font-medium text-gray-500'>Events</span>
                    <span className='font-bold text-purple-900 text-xl'>40K</span>
                  </h2>
                </div>
              </div>
              <div className="charts flex gap-3 justify-between mt-5">
                <div className="chart"></div>
                <div className="chart"></div>
              </div>
              <div className='mt-7 flex justify-between gap-3'>
                <div className="calendar w-2/5 bg-slate-200 h-[400px] rounded-md"></div>
                <div className="table w-3/4 bg-slate-200 h-[400px] rounded-md"></div>
              </div>
          </div>
        </main>
    </div>
  )
}

export default Dashboard