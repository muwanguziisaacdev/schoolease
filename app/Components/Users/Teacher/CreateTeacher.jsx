'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudUpload } from '@fortawesome/free-solid-svg-icons';
import { useTeachers } from '@/app/Contexts/users/TeacherContext';
import { v4 as uuidv4 } from 'uuid';

const CreateNewTeacher = () => {
    const [teacherDetails, setTeacherDetails] = useState({
        firstname: '',
        lastname: '',
        birthdate: '',
        country: '',
        email: '',
        district: '',
        parish: '',
        county: '',
        village: '',
        university: '',
        degree: '',
        startDate: '',
        endDate: '',
    });

    const [profilePicture, setProfilePicture] = useState(null);
    const [attachedDocs, setAttachedDocs] = useState(null);

    const { handleCreateTeacher } = useTeachers();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setTeacherDetails((prev) => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e, setFile) => {
        if (e.target.files.length > 0) {
            setFile(e.target.files[0]);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await handleCreateTeacher({
                id: uuidv4(),
                ...teacherDetails,
                profilePicture,
                attachedDocs,
            });
            setTeacherDetails({
                firstname: '',
                lastname: '',
                birthdate: '',
                country: '',
                email: '',
                district: '',
                parish: '',
                county: '',
                village: '',
                university: '',
                degree: '',
                startDate: '',
                endDate: '',
            });
            setProfilePicture(null);
            setAttachedDocs(null);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="container-view bg-purple-950">
            <header className="w-full text-white font-bold text-xl p-4 border-b-[.5px] border-gray-500">
                <h2>Teacher Details</h2>
            </header>
            <form onSubmit={handleSubmit} className="mt-5 px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="profile-pic flex flex-col items-center gap-4">
                    <Image
                        src={profilePicture ? URL.createObjectURL(profilePicture) : '/default-profile.jpg'}
                        width={300}
                        height={300}
                        alt="Teacher profile"
                        className="rounded-md"
                    />
                    <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        id="profile-pic-upload"
                        onChange={(e) => handleFileChange(e, setProfilePicture)}
                    />
                    <div className="photo-actions flex gap-4">
                        <label htmlFor="profile-pic-upload" className="p-4 bg-purple-500 text-white font-medium rounded-md cursor-pointer">
                            Choose File
                        </label>
                        <button
                            type="button"
                            className="p-4 bg-red-900 text-white font-medium rounded-md"
                            onClick={() => setProfilePicture(null)}
                        >
                            Remove
                        </button>
                    </div>
                </div>
                <div className="details">
                    <label className="block mb-4">
                        <h2>First Name</h2>
                        <input
                            type="text"
                            name="firstname"
                            placeholder="James"
                            value={teacherDetails.firstname}
                            onChange={handleInputChange}
                            className="w-full p-2 rounded-md"
                        />
                    </label>
                    {/* Repeat similar label for other fields */}
                </div>
                <div className="education-details">
                    <h2 className="text-xl font-bold text-white py-4 border-b-[.5px] border-gray-500">Education Details</h2>
                    <label className="block mb-4">
                        <h2>University</h2>
                        <input
                            type="text"
                            name="university"
                            placeholder="Makerere University"
                            value={teacherDetails.university}
                            onChange={handleInputChange}
                            className="w-full p-2 rounded-md"
                        />
                    </label>
                    {/* Repeat similar label for degree, startDate, endDate */}
                    <label className="block mb-4">
                        <h2>Attach Documents</h2>
                        <input
                            type="file"
                            accept=".pdf,.docx"
                            className="hidden"
                            id="attach-docs"
                            onChange={(e) => handleFileChange(e, setAttachedDocs)}
                        />
                        <label htmlFor="attach-docs" className="p-4 bg-gray-400 text-white font-medium rounded-md cursor-pointer">
                            Choose File
                        </label>
                    </label>
                </div>
                <div className="col-span-full flex justify-center mt-6">
                    <button type="submit" className="bg-blue-600 py-4 px-6 text-white font-medium text-2xl rounded-md">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CreateNewTeacher;
