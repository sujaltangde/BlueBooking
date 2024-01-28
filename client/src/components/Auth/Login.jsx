import React from 'react'

export const Login = () => {
  return (
    <>


        <div className='min-h-screen  bg-custom-color md:px-0 px-6 flex justify-center items-center'>
            <div className=' md:w-1/3 bg-white pb-8'>
              <div className=' py-3 px-4 w-full rounded'>
                <div className='text-3xl font-semibold'>Sign In</div>
                <div className='pt-3'>
                  <button className='border flex items-center gap-2 py-2 px-2 text-base'> 
                  <span><img src="/images/googleIcon.png" className='h-[1.4rem]' alt="googleIcon.png" /></span> Sign In with Google</button>
                </div>
                <div className='pt-3  flex flex-col gap-2'>
                  <div className='flex flex-col '>
                    <label htmlFor="email">Email</label>
                    <input type="text" className='border px-2 py-1 border-gray-400 outline-none' />
                  </div>
                  <div className='flex flex-col'>
                    <label htmlFor="password">Password</label>
                    <input type="text" className='border px-2 py-1 border-gray-400 outline-none' />
                  </div>
                  <div className='pt-5'>
                    <button className='w-full font-semibold bg-blue-500 py-2 text-white'>Sign In</button>
                  </div>
                </div>

              </div>
            </div>
        </div>
    
    </>
  )
}
