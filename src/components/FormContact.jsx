import React from 'react'

export const FormContact = () => {
  return (
    <>
      <form action=""
        className='flex flex-col md:w-5/12 m-4'
      >
        <label htmlFor="" className='my-4'>Email</label>
        <input 
          className='bg-slate-600 border-2 p-2'
          type="email" 
          placeholder='your@email.com'
        />

        <label htmlFor="" className='my-4'>Message</label>
        <input 
          type="textarea" 
          placeholder='what is on your mind'
          className=' h-44 bg-slate-600 border-2 p-2'
          name="" id="" />
        <input type="submit" name="send" value={'SEND'} id="" 
           className='self-end bg-white w-24 text-black font-bold my-4 p-4 '
        />
      </form>
    </>
    
  )
}
