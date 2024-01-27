import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <>

        <div className=' fixed min-w-full z-10 '>
                <div className='bg-white shadow-sm shadow-gray-300 py-3 px-6 flex justify-between'>
                    <Link to="/" className='text-2xl font-medium flex flex-row items-center gap-1 w-full md:w-1/4 '>
                        <span> <img src="/favicon.ico" className='h-8' alt="logo.png" /> </span>
                        BlueBooking
                    </Link>

                    <div className=' w-3/4 hidden md:flex items-center justify-end flex-row gap-7'>
                        <Link to="/support" className='font-medium hover:underline text-lg'>Support</Link>
                        <Link to="/about" className='font-medium hover:underline text-lg'>About</Link>
                        <Link to="/auth/login" className='bg-blue-500 rounded hover:underline text-white px-8 font-semibold  py-2 '>Sign In</Link>
                    </div>
                </div>
        </div>
    
    </>
  )
}
