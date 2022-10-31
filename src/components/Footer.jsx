import React from 'react'

export const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
  return (
    <>
        <div className='bg-amber-200 flex justify-between p-5'>
          <div>
            <p>{year}|<span className='font-bold'>Daniel Arechua</span></p>  
          </div>  

          <div className='w-1/4 flex justify-between'>
            <a href="#">Linkedin</a>
            <a href="#">GithUb</a>
            <a href="#">Instagram</a>
          </div>
        </div>    
        
    </>
  )
}
