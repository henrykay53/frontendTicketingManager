import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Login, Eye, EyeSlash } from 'iconsax-react';


const SignIn = () => {

    const [isShowing, setIsShowing] = useState(true);
    return (

        <div className='bg-gray-100 py-10  w-[30%] mt-20 m-auto rounded-lg shadow-lg '>

            <div className='flex items-center'>
                <h1 className='text-3xl ml-5  text-yellow-400'>Login </h1>
                <Login />
            </div>

            <form action="">


                <div className="py-10 mx-5">

                    <input placeholder='Email' className='w-full text-lg ring-2 ring-gray-500 focus:ring-yellow-500 p-2  rounded-sm' type="text" />

                </div>

                <div className='mx-5 mb-4'>
                <div className='w-full'>
                        <input placeholder='Password' className='w-full text-lg  ring-2 ring-gray-500 p-2 rounded-sm' type="password" />
                        <Eye className='absolute top-[30%]  right-[37%] ' />
                        <EyeSlash className='absolute bottom-60 right-[100%]' />

                    </div>

                    {/* <input placeholder='Password' className='w-full text-xl font-bold ring-2 ring-gray-500 p-2 rounded-sm' type="password" /> */}
                    {/* <Eye />
                    <EyeSlash /> */}
                </div>

            </form>

            <span className='ml-5 font-bold'>Don't have an account? <Link to='/register'><span className='text-yellow-400'>Register</span></Link></span>




        </div>



    )
}

export default SignIn;
