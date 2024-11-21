// here we shall perform some crud operations

const TEACHERAPI = 'http://localhost:3000/teachers'
// GET TEACHERS

export async function GET(request) {
    try {
        const response = await fetch(TEACHERAPI);
        if(!response.ok) throw new Error('Failed to fetch the teacher data');
        const data = await response.json();
        return new Response(JSON.stringify(data), {status: 200});
    }
    catch(err) {
        return new Response(JSON.stringify({message: 'Internal server error'}, {status: 500}));
    }
}

export async function POST(request) {
    try {
        const newTeacher = await request.json();
        const response = await fetch(TEACHERAPI, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newTeacher)
        })
        if(!response.ok) throw new Error('Failed to create the teachers data');
        const data = response.json();
        return new Response(JSON.stringify(data), {status: 201});
    }
    catch(err) {
        return new Response(JSON.stringify({message: 'Failed to create the teacher'}), {status: 500});
    }
}

export async function PUT(request) {
    try {
        const updateTeacher = await request.json();
        const response = await fetch(TEACHERAPI, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updateTeacher)
        });
        if(!response.ok) throw new Error('Failed to fetch the teachers data');
        const data = await response.json();
        return new Response(JSON.stringify(data), {status: 200});
    }
    catch(err) {
        return new Response(JSON.stringify({message: 'Failed to Update the teacher'}), {status: 500});
    }
}

export async function DELETE(request) {
    try {
        const { id  } = await request.json();
        const response = await fetch(`localhost/5000/teacher/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if(!response.ok) throw new Error('Failed to delete the teacher')
        return new Response(null, {status: 204}) //successfull deletion

    }
    catch(err) {
        return new Response(JSON.stringify({message: 'Failed to delete the teacher'}), {status: 500});
    }
    
}