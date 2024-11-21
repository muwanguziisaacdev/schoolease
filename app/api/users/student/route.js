// STUDENTS API
const SCHOOLAPI = 'http://localhost:3000/students';
// fetch the student data
export async function GET(request) {
    try {
        const response = await fetch(SCHOOLAPI);
        if(!response.ok) throw new Error('Failed to fetch Students data');
        const data = await reponse.json();
        // then we return the response
        return new Response(JSON.stringify(data), {status: 200});
    }
    catch(err) {
        return new Response(JSON.stringify({message: 'Internal Server Error'}), {status: 500});
    }
}

// Post students data
export async function POST(request) {
    try {
        const newStudent = await request.json();
        const response = await fetch(SCHOOLAPI, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newStudent)
        });
        if(!response.ok) throw new Error('Failed to create a student');
        const data = await reponse.json();
        return new Response(JSON.stringify(data), {status: 201});
        
    }
    catch(err) {
        return new Response(JSON.stringify({message: 'Failed to create student'}, {status: 500}))
    }
}

// udpate student 

export async function PUT(request) {
    try {
        const UpdateStudent = await request.json();
        const response = await fetch(SCHOOLAPI, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(UpdateStudent)
        });
        if(!response.ok) throw new Error('Failed to Update the student');
        const data = await response.json();
        return new Response(JSON.stringify(data), {status: 200});
    }
    catch(err) {
        return new Response(JSON.stringify({message: 'Failed to Update student'}, {status: 500}));
    }
    
}

// Delete student
export async function DELETE(request) {
    try {
        const { id } = await request.json();
        const response = await fetch(`localhost/5000/student/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        });
        if(!response.ok) throw new Error('Failed to delete the student');
        return new Response(null, {status: 204}) //no content for successful deletion
    }
    catch(err) {
        return new Reponse(JSON.stringify({message: 'Failed to delete the student'}, {status: 500}))
    }
}