import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeSlash } from 'iconsax-react';
import { useForm } from "react-hook-form"


const Register = () => {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => console.log(data)
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const password = watch("password");
    const confirmPassword = watch("confirmPassword");

    const validateAge = (value) => {
        const selectedDate = new Date(value);
        const today = new Date();

        const age = today.getFullYear() - selectedDate.getFullYear();
        const monthDifference = today.getMonth() - selectedDate.getMonth();
        const dayDifference = today.getDate() - selectedDate.getDate();

        // Adjust age if the month or day is before today's date
        if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
            return age - 1 >= 18 || "You must be at least 18 years old.";
        }

        return age >= 18 || "You must be at least 18 years old.";
    };

    const togglePasswordVisibility = () => {
        setIsPasswordVisible((prevState) => !prevState);
    };

    const validatePasswordsMatch = (value) => {
        return value === password || "Passwords do not match";
    };


    return (


        <div className='bg-gray-100 py-10 mb-20 w-[90%] lg:w-[30%] mt-10 m-auto rounded-lg shadow-lg '>

            <div className='flex items-center'>
                <h1 className='text-3xl  text-yellow-400 ml-5 '>Register  </h1>

            </div>

            <form onSubmit={handleSubmit(onSubmit)}>


                <div className=" flex flex-col gap-10 items-center mx-5 py-5">

                    <div className='w-full'>
                        <input
                            {...register("firstName", { required: true })}
                            placeholder='First name'
                            className='w-full text-lg ring-2 ring-gray-300 focus:outline-yellow-500 p-2  rounded-sm'
                            type="text" />

                        {errors.firstName?.type === "required" && (
                            <p role="alert">*required</p>
                        )}

                    </div>

                    <div className='w-full'>
                        <input
                            {...register("lastName", { required: true })}

                            placeholder='Last name'
                            className='w-full text-lg  ring-2 ring-gray-300 focus:outline-yellow-500 p-2  rounded-sm'
                            type="text" />

                        {errors.lastName?.type === "required" && (
                            <p role="alert">*required</p>
                        )}

                    </div>

                </div>

                <div className='flex flex-col gap-10 mx-5 items-center py-5 '>
                    <select
                        {...register("gender", { required: true })}
                        className='text-gray-500 w-full p-3 ring-2 ring-gray-300 focus:outline-yellow-500 rounded-sm' name="gender">
                        <option className='' value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                    {errors.gender?.type === "required" && (
                        <p role="alert">*required</p>
                    )}

                    <div className='w-full'>
                        <input
                            {...register("phoneNumber", { required: true })}
                            placeholder='Phone number' className='w-full text-lg  ring-2 ring-gray-300 focus:outline-yellow-500 p-2  rounded-sm' type="text" />
                        {errors.phoneNumber?.type === "required" && (
                            <p role="alert">*required</p>
                        )}
                    </div>
                </div>

                <div className='flex flex-col gap-10 mx-5 items-center py-5'>

                    <div className='w-full'>
                        <input
                            {...register("email", { required: true })}
                            placeholder='Email'
                            className='w-full text-lg  ring-2 ring-gray-300 focus:outline-yellow-500 p-2  rounded-sm'
                            type="text" />
                        {errors.email?.type === "required" && (
                            <p role="alert">*required</p>
                        )}

                       
                    </div>

                    <div className='w-full'>
                        <input
                            {...register("date", { required: true, validate: validateAge })}
                            className='w-full p-3 ring-2 rounded-sm ring-gray-300 focus:outline-yellow-500'
                            type="date" />

                        {errors.date?.type === "required" && (
                            <p role="alert">*required</p>
                        )}
                         {errors.date?.type === "validate" && (
                            <p role="alert">{errors.date.message}</p>
                        )}
                    </div>




                </div>

                <div className='flex flex-col gap-10 mx-5 items-center py-5 pb-4'>
                    <div className='w-full'>
                        <input
                            {...register("password", { required: true })}
                            placeholder='Password' className='w-full text-lg  ring-2 ring-gray-300 focus:outline-yellow-500 p-2 rounded-sm'
                            type={isPasswordVisible ? 'text' : 'password'} />
                        {isPasswordVisible ? (
                            <EyeSlash
                                className='absolute top-[68%] right-[10%] lg:right-[37%] cursor-pointer'
                                onClick={togglePasswordVisibility} // Toggle visibility
                            />
                        ) : (
                            <Eye
                                className='absolute top-[68%] right-[10%] lg:right-[37%] cursor-pointer'
                                onClick={togglePasswordVisibility} // Toggle visibility
                            />
                        )}

                        {errors.password?.type === "required" && (
                            <p role="alert">*required</p>
                        )}
                    </div>

                    <div className='w-full'>
                        <input
                            {...register("confirmPassword", { required: true, validate: validatePasswordsMatch })}

                            placeholder='Confirm Password' className='w-full text-lg  ring-2 ring-gray-300 focus:outline-yellow-500 p-2 rounded-sm'
                            type={isPasswordVisible ? "text" : "password"} />

                        {isPasswordVisible ? (
                            <EyeSlash
                                className='absolute bottom-[20%] right-[10%] lg:right-[37%] cursor-pointer'
                                onClick={togglePasswordVisibility} // Toggle visibility
                            />
                        ) : (
                            <Eye
                                className='absolute bottom-[20%] right-[10%] lg:right-[37%] cursor-pointer'
                                onClick={togglePasswordVisibility} // Toggle visibility
                            />
                        )}

                        {errors.confirmPassword?.type === "required" && (
                            <p role="alert">*required</p>
                        )}

                        {errors.confirmPassword && errors.confirmPassword.type === "validate" && (
                            <p role="alert">{errors.confirmPassword.message}</p>
                        )}


                    </div>



                </div>

                <div className='flex justify-center'>
                    <button className=' bg-yellow-400 hover:bg-yellow-500 transition text-white text-lg px-10 py-2 font-bold rounded-lg my-4 '>Create Account</button>

                </div>

            </form>

            <span className='ml-5 font-bold'>Already have an account? <Link to='/login'><span className='text-yellow-400'>Login</span></Link></span>

        </div>







    )
}

export default Register;
