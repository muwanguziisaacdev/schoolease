'use client'

import { createContext, useContext, useEffect, useState } from "react"

export const StudentContext = createContext();

export const useStudent = () => useContext(StudentContext);

const APISTUDENT = '/api/users/student'

export const StudentContextProvider =  ({ children }) => {
    // let handle the create, edit and the delete
    const [students, setStudents] = useState();

    useEffect(() => {
        const fetchStudent = async () => {
            try {
                const response = await fetch(APISTUDENT);
                const data = await response.json();
                setStudents(data);
            }
            catch(err) {
                console.log('Failed to fetch student data', err);
            }
        
        }
        fetchStudent();
    }, []);

    const handleCreateStudent = async (student) => {
        try {
            const response = await fetch(APISTUDENT, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(student)
            });
            const newStudent = await response.json();
            setStudents((prevStudent) => [...prevStudent, newStudent]);
            
        }
        catch(err) {
            console.log('Failed to create a new student', err)
        }
    }

    const handleUpdateStudent = async (student) => {
        try {
            const response = await fetch(APISTUDENT, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(student)
            });
            const updatedStudent = await response.json();
            setStudents((prevStudent) => {
                prevStudent.map((student) => student.id === updatedStudent.id ? updatedStudent : student);
            });
        }
        catch(err) {
            console.log('Failed to update the student', err)
        }
    }

    const handleDeleteStudent = async (id) => {
        try {
            await fetch(APISTUDENT, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ id })
            });
            setStudents((prevStudent) => {
                prevStudent.filter((student) => student.id !== id);
            });
        }
        catch(err) {
            console.log('Failed to delete the student', err);
        }
    }
    return (
        <StudentContext.Provider value={{students, handleCreateStudent, handleUpdateStudent, handleDeleteStudent}}>
                {children}
        </StudentContext.Provider>
    )
}