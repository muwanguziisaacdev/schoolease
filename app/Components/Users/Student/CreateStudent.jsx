import Image from 'next/image';
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudUpload } from '@fortawesome/free-solid-svg-icons';

const [firstname, setFirstName] = useState('');
const [lastname, setlastName] = useState('');
const [birthdate, setBirthDate] = useState();
const [country, setCountry] = useState('');
const [email, setEmail] = useState('');
const [district, setDistrict] = useState('');
const [parish, setParish] = useState('');
const [county, setCounty] = useState('');
const [village, setVillage] = useState('');

const CreateNewStudent = () => {
  return (
    <div className='container-view bg-purple-950'>
        <header className='w-full text-white font-bold text-xl p-4 border-b-[.5px] border-gray-500'>
            <h2>Student details</h2>
        </header>
        <form action="" className='mt-5 grid grid-cols-1 md:grid-cols-3 px-6'>
            <div className="profile-pic flex flex-col gap-4">
                <Image 
                    src={'/my-picture.jpg'}
                    width={300}
                    height={100}
                    alt='student picture'
                    className='rounded-md'
                />
                <div className="photo-actions flex gap-10">
                    <button className='p-4 rounded-[20px] bg-purple-500 text-white font-medium'>Choose file</button>
                    <button className='p-4 rounded-[20px] bg-red-900 text-red-500 text-xl'>Remove</button>                
                </div>
            </div>
            <div className="details">
                <label htmlFor="first-ame">
                    <h2>First name</h2>
                    <input 
                        type="text" 
                        placeholder='James' 
                        id='first-name'
                        value={firstname}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                    
                </label>
                <label htmlFor="last-name">
                    <h2>Last name</h2>
                    <input 
                        type="text" 
                        placeholder='Walya' 
                        id='last-name'
                        value={lastname}
                        onChange={(e) => setlastName(e.target.value)}
                    />
                </label>
                <label htmlFor="birthdata&place" className='flex flex-col gap-4 w-[260px]'>
                    <h2>Date & Place of birth</h2>
                    <input type="date" />
                    <input 
                    type="text" 
                    placeholder='Uganda'
                    value={birthdate}
                    onChange={(e) => setBirthDate(e.target.value)}
                    />
                </label>
                <label htmlFor="email">
                    <h2>Email</h2>
                    <input 
                        type="text" 
                        placeholder='hello@email.com' 
                        id="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>
            </div>
            <div>
                        <label htmlFor="district">
                            <h2>District</h2>
                            <input 
                                type="text" 
                                placeholder='district'
                                value={district}
                                onChange={(e) => setDistrict(e.target.value)}
                            />
                        </label>
                        <label htmlFor="parish">
                            <h2>Parish</h2>
                            <input 
                                type="text" 
                                placeholder='Parish'
                                value={parish}
                                onChange={(e) => setParish(e.target.value)}
                            />
                        </label>
                        <label htmlFor="s-county">
                            <h2>Sub County</h2>
                            <input 
                                type="text" 
                                placeholder='Sub county'
                                value={county}
                                onChange={(e) => setCounty(e.target.value)}
                            />
                        </label>
                        <label htmlFor="village">
                            <h2>Village</h2>
                            <input 
                                type="text" 
                                placeholder='Village'
                                value={village}
                                onChange={(e) => setVillage(e.target.value)}
                            />
                        </label>
            </div>

        </form>
        <form action="" className='px-4'>
        <h2 className='text-xl font-bold text-white py-4 mt-5 border-b-[.5px] border-gray-500'>Parent or Gurdian details</h2>
        <div className='grid grid-cols-1 md:grid-cols-3 mt-10 items-center'>
            <div>
                <label htmlFor="first-ame">
                        <h2>First name</h2>
                        <input type="text" placeholder='James' id='first-name'/>
                    </label>
                    <label htmlFor="last-name">
                        <h2>Last name</h2>
                        <input type="text" placeholder='James' id='last-name'/>
                    </label>
                    <label htmlFor="email">
                        <h2>Email</h2>
                        <input type="text" placeholder='hello@email.com' id="email" />
                    </label>
                    <label htmlFor="contact">
                        <h2>Phone Number</h2>
                        <input type="tel" placeholder='+25670*******' id="email" />
                    </label>
                </div>
                <div>
                <label htmlFor="district">
                            <h2>District</h2>
                            <input type="text" placeholder='district'/>
                        </label>
                        <label htmlFor="parish">
                            <h2>Parish</h2>
                            <input type="text" placeholder='Parish'/>
                        </label>
                        <label htmlFor="s-county">
                            <h2>Sub County</h2>
                            <input type="text" placeholder='Sub county'/>
                        </label>
                        <label htmlFor="village">
                            <h2>Village</h2>
                            <input type="text" placeholder='Village'/>
                        </label>
                </div>
                <div>
                <h2 className='text-white font-medium py-2'>Attach documents</h2>
                <div className="upload w-[500px] bg-slate-300 h-[300px] rounded-md flex justify-center items-center flex-col">
                    
                    <FontAwesomeIcon icon={ faCloudUpload } className='text-9xl'/>
                    <button className='p-4 rounded-[20px] bg-gray-400 text-white font-medium'>Choose File</button>
                </div>
                </div>
            </div>
        </form>
        <div className='w-full flex justify-center my-10'>
            <button 
                type='submit' 
                className='bg-blue-600 py-4 px-6 w-2/5 m-auto text-white font-medium text-2xl rounded-md'
            >
                Submit
            </button>
        </div>

    </div>
  )
}

export default CreateNewStudent;