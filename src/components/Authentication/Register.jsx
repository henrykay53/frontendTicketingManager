import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeSlash } from 'iconsax-react';
import { useForm } from 'react-hook-form';
import { registerUser } from './apis/authServices';
import { ToastContainer, toast } from 'react-toastify';

const Register = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const password = watch('password');
  const confirmPassword = watch('confirm_password');

  const togglePasswordVisibility = () => setIsPasswordVisible(prev => !prev);

  const validateAge = value => {
    const selectedDate = new Date(value);
    const today = new Date();
    let age = today.getFullYear() - selectedDate.getFullYear();
    if (
      today.getMonth() < selectedDate.getMonth() ||
      (today.getMonth() === selectedDate.getMonth() && today.getDate() < selectedDate.getDate())
    ) {
      age--;
    }
    return age >= 18 || 'You must be at least 18 years old.';
  };

  const validatePasswordsMatch = value => value === password || 'Passwords do not match';

  const onSubmit = async data => {
    setIsLoading(true);
    try {
      const response = await registerUser(data);
      toast.success('Registration successful! 🎉');
    } catch (error) {
      if (!navigator.onLine) {
        toast.error('No internet connection. Please check and try again.');
      } else {
        toast.error('Registration failed. Please try again.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='bg-white shadow-md rounded-xl w-[90%] lg:w-[30%] mt-10 mx-auto p-8'>
      <h1 className='text-4xl font-semibold text-yellow-500 text-center mb-6'>Register</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Name Fields */}
        <div className='flex flex-col gap-6 mb-4'>
          <input
            {...register('first_name', { required: true })}
            placeholder='First Name'
            className='w-full p-3 border border-gray-300 rounded-lg  focus:outline-yellow-500'
          />
          {errors.first_name && <p className='text-red-500 text-sm'>First name is required</p>}

          <input
            {...register('last_name', { required: true })}
            placeholder='Last Name'
            className='w-full p-3 border border-gray-300 rounded-lg focus:outline-yellow-500'
          />
          {errors.last_name && <p className='text-red-500 text-sm'>Last name is required</p>}
        </div>

        {/* Gender and Phone */}
        <div className='flex flex-col gap-6 mb-4'>
          <select
            {...register('gender', { required: true })}
            className='w-full p-3 border border-gray-300 rounded-lg focus:outline-yellow-500 text-gray-500'
          >
            <option value=''>Select Gender</option>
            <option value='male'>Male</option>
            <option value='female'>Female</option>
          </select>
          {errors.gender && <p className='text-red-500 text-sm'>Gender is required</p>}

          <input
            {...register('phone', { required: true })}
            placeholder='Phone Number'
            className='w-full p-3 border border-gray-300 rounded-lg focus:outline-yellow-500'
            type='tel'
          />
          {errors.phone && <p className='text-red-500 text-sm'>Phone number is required</p>}
        </div>

        {/* Email and Date of Birth */}
        <div className='flex flex-col gap-6 mb-4'>
          <input
            {...register('email', { required: true })}
            placeholder='Email Address'
            className='w-full p-3 border border-gray-300 rounded-lg focus:outline-yellow-500'
            type='email'
          />
          {errors.email && <p className='text-red-500 text-sm'>Email is required</p>}

          <input
            {...register('date_of_birth', { required: true, validate: validateAge })}
            className='w-full p-3 border border-gray-300 rounded-lg focus:outline-yellow-500'
            type='date'
          />
          {errors.date_of_birth && (
            <p className='text-red-500 text-sm'>{errors.date_of_birth.message}</p>
          )}
        </div>

        {/* Password and Confirm Password */}
        <div className='flex flex-col gap-6 mb-6'>
          {/* Password Field */}
          <div className='relative'>
            <input
              {...register('password', { required: true })}
              placeholder='Password'
              className='w-full p-3 border border-gray-300 rounded-lg focus:outline-yellow-500 pr-10'
              type={isPasswordVisible ? 'text' : 'password'}
            />
            {isPasswordVisible ? (
              <EyeSlash
                className='absolute top-[50%] right-3 transform -translate-y-1/2 cursor-pointer'
                onClick={togglePasswordVisibility}
              />
            ) : (
              <Eye
                className='absolute top-[50%] right-3 transform -translate-y-1/2 cursor-pointer'
                onClick={togglePasswordVisibility}
              />
            )}
            {errors.password && <p className='text-red-500 text-sm'>Password is required</p>}
          </div>

          {/* Confirm Password Field */}
          <div className='relative'>
            <input
              {...register('confirm_password', {
                required: true,
                validate: validatePasswordsMatch,
              })}
              placeholder='Confirm Password'
              className='w-full p-3 border border-gray-300 rounded-lg focus:outline-yellow-500 pr-10'
              type={isPasswordVisible ? 'text' : 'password'}
            />
            {isPasswordVisible ? (
              <EyeSlash
                className='absolute top-[50%] right-3 transform -translate-y-1/2 cursor-pointer'
                onClick={togglePasswordVisibility}
              />
            ) : (
              <Eye
                className='absolute top-[50%] right-3 transform -translate-y-1/2 cursor-pointer'
                onClick={togglePasswordVisibility}
              />
            )}
            {errors.confirm_password && (
              <p className='text-red-500 text-sm'>Password is required</p>
            )}
          </div>
        </div>
        
        {/* Submit Button */}
        <button
          type='submit'
          disabled={isLoading}
          className={`w-full py-3 rounded-lg text-white font-semibold ${
            isLoading
              ? 'bg-yellow-300 cursor-not-allowed'
              : 'bg-yellow-500 hover:bg-yellow-600 transition'
          }`}
        >
          {isLoading ? 'Registering...' : 'Register'}
        </button>
      </form>

      <div className='text-center mt-6'>
        <p className='text-gray-600'>
          Already have an account?{' '}
          <Link to='/login' className='text-yellow-500 font-medium hover:underline'>
            Login
          </Link>
        </p>
      </div>

      <ToastContainer position='top-right' autoClose={3000} hideProgressBar={false} />
    </div>
  );
};

export default Register;
