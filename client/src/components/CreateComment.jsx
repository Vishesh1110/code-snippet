import React, { useEffect, useState } from 'react'
import axios from 'axios'

const CreateComment = ({ snippetId }) => {

    const [text, setText] = useState("");
    const [comments, setComments] = useState([]);

    const addComment = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`http://localhost:8001/api/v1/snippet/${snippetId}/comments`, { text });
            setComments(prev =>[...prev, response.data.comment]);
            setText("");
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        const fetchComments = async () => {
            try {
                const response = await axios.get(`http://localhost:8001/api/v1/snippet/${snippetId}/comments`);
                console.log(response.data);
                setComments(Array.isArray(response.data) ? response.data : response.data.comments ?? []);
            } catch (error) {
                console.log("Error at fetching comment", error);
            }
        }
        fetchComments()
    }, [])

    return (
        <div>
            {(comments ?? []).map((comment, index) => (
                <li key={index} className='ml-4 text-sm'>{comment?.text ?? comment}</li>
            ))}
            <form onSubmit={addComment} className='mt-4 flex flex-col gap-2 '>
                <input
                    type='text'
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder='Add comment...'
                    className='border rounded px-2 text-sm py-1'
                />
                <button className='bg-blue-700 text-white rounded-lg px-4'>Comment</button>
            </form>
        </div>
    )
}

export default CreateComment