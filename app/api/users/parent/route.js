const PARENTAPI  = 'http://localhost:3000/parents'

export async function GET(request) {
    try {
        const response = await fetch(PARENTAPI);
        if(!response.ok) throw new Error('Failed to fetch the parents data');
        const data = response.json();
        return new Response(JSON.stringify(data), {status: 200});
    }   
    catch(err) {
        return new Response(JSON.stringify({message: 'Internal server error'}), {status: 500})
    }
    
}

export async function POST(request) {
    try {
        const newParent = await request.json();
        const response = await fetch(PARENTAPI, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application.json'
            },
            body: JSON.stringify(newParent)
        });
        if(!response.ok) throw new Error('Failed to create the parent')
        const data = await response.json();
        return new Response(JSON.stringify(data), {status: 201});
    }
    catch(err) {
        return new Response(JSON.stringify({message: 'Failed to create the parent'}), {status: 500})
    }
}

export async function PUT(request) {
    try {
        const UpdateParent = await request.json();
        const response = await fetch(PARENTAPI, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(UpdateParent)
        });
        if(!response.ok) throw new Error('Failed to Update the parent');
        const data = response.json();
        return new Response(JSON.stringify(data), {status: 200});
    }
    catch(err) {
        return new Response(JSON.stringify({message: 'Failed to create the parent'}), {status: 500} )
    }
}

export async function DELETE(request) {
    try {
        const { id } = await request.json();
        const response = await fetch(PARENTAPI, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id })
        });
        if(!response.ok) throw new Error('Failed to delete the parent');
        return new Response(null, {status: 204});
    }
    catch(err) {
        return new Response(JSON.stringify({message: 'Failed to delete parent'}), {status: 500});
    }
}