import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Login, Eye, EyeSlash } from 'iconsax-react';
import { useForm } from "react-hook-form"


const SignIn = () => {

    const {
        register,
        handleSubmit,
        // watch,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => console.log(data)

    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setIsPasswordVisible((prevState) => !prevState);
    };
    return (

        <div className='bg-gray-100 py-10  w-[90%] lg:w-[30%] mt-20 m-auto rounded-lg shadow-lg '>

            <div className='flex items-center'>
                <h1 className='text-3xl ml-5  text-yellow-400'>Login </h1>
                <Login className='mt-2 ml-2' />
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>


                <div className="py-10 mx-5">

                    <input
                        {...register("email", { required: true })}
                        placeholder='Email'
                        className='w-full text-lg ring-2 ring-gray-300 focus:outline-yellow-500 p-2  rounded-sm' type="text" />

                    {errors.email?.type === "required" && (
                        <p role="alert">*required</p>
                    )}

                </div>

                <div className='mx-5 mb-4'>
                    <div className='w-full'>
                        <input
                            {...register("password", { required: true })}
                            placeholder='Password'
                            className='w-full text-lg  ring-2 ring-gray-300 focus:outline-yellow-500 p-2 rounded-sm'
                            type={isPasswordVisible ? 'text' : 'password'} />

                        {isPasswordVisible ? (
                            <EyeSlash
                                className='absolute top-[30%] right-[10%] lg:right-[37%] cursor-pointer'
                                onClick={togglePasswordVisibility} // Toggle visibility
                            />
                        ) : (
                            <Eye
                                className='absolute top-[30%] right-[10%] lg:right-[37%] cursor-pointer'
                                onClick={togglePasswordVisibility} // Toggle visibility
                            />
                        )}

                    </div>

                    {errors.password?.type === "required" && (
                        <p role="alert">*required</p>
                    )}


                </div>

                <div className='flex justify-center'>
                    <button className='w-[50%] bg-yellow-400 hover:bg-yellow-500 transition text-white text-lg px-10  py-2  font-bold rounded-lg my-4 '>Log In</button>

                </div>



            </form>

            <span className='ml-5 font-bold'>Don't have an account? <Link to='/register'><span className='text-yellow-400'>Register</span></Link></span>
            <span className='ml-5 font-bold'><Link to='/forgot-password'><span className='text-yellow-400'>Forgot Passord?</span></Link></span>





        </div>



    )
}

export default SignIn;
