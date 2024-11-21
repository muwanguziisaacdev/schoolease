'use client'

import { createContext, useContext, useEffect, useState } from "react"

export const ParentContext = createContext();

export const useParent = () => useContext(ParentContext);

export const ParentContextProvider =  ({ children }) => {
    const [parents, setParents] = useState();
    const PARENTAPI = 'api/user/parent'
    // fetch items
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(PARENTAPI);
                const data = await response.json()
                setParents(data);
            }
            catch(err) {
                console.log('Failed to fetch the parents data')
            }
        }
        fetchData();
    }, []);

    const handleCreateParent = async (parent) => {
        try {
            const response = await fetch(PARENTAPI, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(parent)
            }
            );
            const newParent = response.json();
            setParents((prevParent) => [...prevParent, newParent]);
        }
        catch(err) {
            console.log('Failed to create the parent', err)
        }
    }
    const handleUpdateParent = async (parent) => {
        try {
            const response = await fetch(PARENTAPI, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(parent)
            }
            );
            const UpdateParent = response.json();
            setParents((prevParent) => 
            prevParent.map((p) => p.id === UpdateParent.id ? UpdateParent : p));
        }
        catch(err) {
            console.log('Failed to create the parent', err)
        }
    }
    const handleDeleteParent = async (id) => {
        try {
            const response = await fetch(PARENTAPI, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(id)
            }
            );
            setParents((prevParent) => prevParent.filter((p) => p.id !== id));
        }
        catch(err) {
            console.log('Failed to create the parent', err)
        }
    }
    return (
        <ParentContext.Provider value={{handleCreateParent, handleUpdateParent, handleDeleteParent}}>
            { children }
        </ParentContext.Provider>
    )
}