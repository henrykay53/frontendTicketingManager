import React from 'react'
import { Link } from 'react-router-dom';
import { Eye, EyeSlash } from 'iconsax-react';

const Register = () => {
    return (


        <div className='bg-gray-100 py-10  w-[30%] mt-20 m-auto rounded-lg shadow-lg '>

            <div className='flex items-center'>
                <h1 className='text-3xl  text-yellow-400 ml-5 '>Register  </h1>

            </div>

            <form action="">


                <div className=" flex flex-col gap-10 items-center mx-5 py-5">

                    <input placeholder='First name' className='w-full text-lg ring-2 ring-gray-500 focus:ring-yellow-500 p-2  rounded-sm' type="text" />
                    <input placeholder='Last name' className='w-full text-lg  ring-2 ring-gray-500 focus:ring-yellow-500 p-2  rounded-sm' type="text" />

                </div>

                <div className='flex flex-col gap-10 mx-5 items-center py-5'>
                    <select className='w-full p-3' name="gender">
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>

                    <input placeholder='Phone number' className='w-full text-lg  ring-2 ring-gray-500 focus:ring-yellow-500 p-2  rounded-sm' type="text" />



                </div>

                <div className='flex flex-col gap-10 mx-5 items-center py-5'>
                    <input placeholder='Email' className='w-full text-lg  ring-2 ring-gray-500 focus:ring-yellow-500 p-2  rounded-sm' type="text" />
                    <input className='w-full p-3' type="date" />

                </div>

                <div className='flex flex-col gap-10 mx-5 items-center py-5 pb-4'>
                    <div className='w-full'>
                        <input placeholder='Password' className='w-full text-lg  ring-2 ring-gray-500 p-2 rounded-sm' type="password" />
                        <Eye className='absolute bottom-60 right-[37%] ' />
                        <EyeSlash className='absolute bottom-60 right-[100%]' />

                    </div>

                    <div className='w-full'>
                        <input placeholder='Confirm Password' className='w-full text-lg  ring-2 ring-gray-500 p-2 rounded-sm' type="password" />
                        <Eye className='absolute bottom-40 right-[37%]' />
                        <EyeSlash className='absolute bottom-60 right-[100%]' />

                    </div>



                </div>



            </form>

            <span className='ml-5 font-bold'>Already have an account? <Link to='/login'><span className='text-yellow-400'>Login</span></Link></span>

        </div>







    )
}

export default Register;
