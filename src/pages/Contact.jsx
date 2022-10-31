import React from 'react'
import { FormContact } from '../components/FormContact'

export const Contact = () => {
  return (
    <>
      <div className='bg-slate-600 md:flex w-full md:justify-around text-white'>
        <div className='md:w-2/6 m-4'>
           <h1 className='text-5xl w-full font-bold mb-4'>Say hi!</h1>
           <p className='text-2xl'>If you want to get in touch with me, please send me a message.</p>
        </div>
        <FormContact/>
      </div>
    </>
  )
}
