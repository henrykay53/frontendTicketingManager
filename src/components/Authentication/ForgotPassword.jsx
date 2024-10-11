import React from 'react'
import { useState } from 'react';
// import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form"


const ForgotPassword = () => {

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
                <h1 className='text-3xl ml-5  text-yellow-400'>Forgot Password </h1>
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

               

                <div className='flex justify-center'>
                    <button className='w-[50%] bg-yellow-500 hover:bg-yellow-300 text-white text-lg px-10  py-2  font-bold rounded-lg my-4 '>Reset Password</button>

                </div>



            </form>

    
        </div>



    )
}

export default ForgotPassword;
