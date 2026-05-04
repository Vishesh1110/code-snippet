import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CreateComment from './CreateComment';

const CreateSnippet = () => {

  const [title, setTitle] = useState("");
  const [code, setCode] = useState("");
  const [snippets, setSnippets] = useState({});

  const createSnippet = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/v1/snippet', { title, code });
      alert(response.data.message);
    } catch (error) {
      console.log(error);
    }

  }

  useEffect(() => {
    const fetchSnippets = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/v1/snippet')
        setSnippets(response.data);
      } catch (error) {
        console.log("Error while fetching snippet", error);
      }
    }
    fetchSnippets();
  }, [])

  return (
    <div className='mt-10'>
      <form onSubmit={createSnippet} className='flex flex-col space-y-4'>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder='Title'
          className='border rounded-2xl px-2 py-1 w-fit' />
        <textarea
          placeholder='Write code Snippet here...'
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className='border rounded-2xl px-2 py-1'>

        </textarea>
        <button className='w-fit bg-black text-white px-6 py-2 rounded-2xl'>Add</button>
      </form>

      <div className='mt-5 grid md:grid-cols-3 gap-2'>
        {
          Object.values(snippets).map((snippet) => (
            <div key={snippet.id} className='p-3 border rounded'>
              <h1 className='font-bold text-xl'>{snippet.title}</h1>
              <CreateComment snippetId={snippet.id} />
            </div>
          ))
        }
      </div>

    </div>
  )
}

export default CreateSnippet
