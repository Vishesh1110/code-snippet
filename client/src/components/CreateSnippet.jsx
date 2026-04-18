import React from 'react'

const CreateSnippet = () => {
  return (
    <div className='mt-10'>
      <form action="" className='flex flex-col space-y-4'>
        <input type="text" placeholder='Title' className='border rounded-2xl px-2 py-1 w-fit' />
        <textarea placeholder='Write code Snippet here...' className='border rounded-2xl px-2 py-1'></textarea>
        <button className='w-fit bg-black text-white px-6 py-2 rounded-2xl'>Add</button>
      </form>
    </div>
  )
}

export default CreateSnippet
