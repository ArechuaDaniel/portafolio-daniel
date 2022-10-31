import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen)
  }
  return (
    <>
        <div className='bg-slate-600 text-white flex p-5 justify-between'>
          <div>
            <h2 className='font-bold ml-5'>Daniel Arechua</h2>
          </div>
          <div className='flex bg-red-700 w-1/3'>
            
            <button className='flex flex-auto'
              onClick={() =>  handleToggle()}
            >
            { !navbarOpen ? <i class="fa-sharp fa-solid fa-bars"></i> : 
            <>
             <a href="#" className='hover:text-cyan-300'>About</a>
             <a href="#" className='hover:text-cyan-300'>Projects</a>
             <a href="#" className='hover:text-cyan-300'>Contact</a> 
            </>
            }
            </button>
          </div>
        </div>
    </>
  )
}
