import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { createComment } from '../../../comments/controller/comment';

const CreateComment = ({ snippetId }) => {

    const [text, setText] = useState("");
    const [comments, setComments] = useState([]);

    const addComment = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`http://localhost:8001/api/v1/snippet/${snippetId}/comments`, { text });
            console.log(response.data);
            // setComments([...comments, response.data.comment])
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        const fetchComments = async () => {
            try {
                const response = await axios.get(`http://localhost:8001/api/v1/snippet/${snippetId}/comments`);
                setComments(response.data.comment)
            } catch (error) {
                console.log("Error at fetching comment", error);
            }
        }
    }, [])

    return (
        <div>
            {comments.map((comment, index) => (
                <li key={index}>{comment}</li>
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