'use client'

import { createContext, useContext, useEffect, useState } from "react"

export const TeacherContext = createContext();

export const useTeachers = () => useContext(TeacherContext);

export const TeacherContextProvider = ({children}) => {
    const [teachers, setTeachers] = useState();

    const TEACHERAPI = 'api/users/teacher'
    useEffect(() => {
        const fetchTeachers = async () => {
            try {
                const response = await fetch(TEACHERAPI);
                const data = await response.json();
                setTeachers(data);
            }
            catch(err) {
                console.log('Failed to fetch teachers data')
            }
        }
        fetchTeachers();
    }, []);

    const handleCreateTeacher = async (teacher) => {
        try {   
            const response = await fetch(TEACHERAPI, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(teacher)
            })
            const newTeacher = await response.json();
            setTeachers((prevTeacher) => [...prevTeacher, newTeacher]);
        }
        catch(err) {
            console.log('Failed to create the new Teacher', err)
        }
    }

    const handleUpdateTeacher = async (teacher) => {
        try {
            const response = await fetch(TEACHERAPI, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(teacher)
            });
            const updatedTeacher = await response.json();
            setTeachers((prevTeacher) => 
                prevTeacher.map((teacher) => teacher.id === updatedTeacher.id ? updatedTeacher : teacher
        ));
        }
        catch(err) {
            console.log('Failed to update the student', err)
        }
    }

    const handleDeleteTeacher = async (id) => {
        try {
            const response = await fetch(TEACHERAPI, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ id })
            });
            setTeachers((prevTeacher) => prevTeacher.filter((teacher) => teacher.id !== id));
        }
        catch(err) {
            console.log('Failed to delete the teacher', err);
        }
    }
    return (
        <TeacherContext.Provider value={{ teachers, handleCreateTeacher, handleUpdateTeacher, handleDeleteTeacher }}>
            {children}
        </TeacherContext.Provider>
    )
}