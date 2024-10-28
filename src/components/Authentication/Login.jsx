import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Login, Eye, EyeSlash } from 'iconsax-react';
import { useForm } from 'react-hook-form';
import { loginUser } from './apis/authServices';
import { ToastContainer, toast } from 'react-toastify';

const SignIn = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(prev => !prev);
  };

  const onSubmit = async (data) => {
    setIsLoading(true);
    setErrorMessage('');
    try {
      const response = await loginUser(data);
      toast.success('Login successful! 🎉');
      navigate('/'); // Redirect to home page
    } catch (error) {
      toast.error('Login failed. Please try again.');
      setErrorMessage(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='bg-white shadow-md rounded-xl w-[90%] lg:w-[30%] mt-16 mx-auto p-8'>
      {/* Header Section */}
      <div className='flex items-center justify-center mb-6'>
        <h1 className='text-4xl font-semibold text-yellow-500'>Login</h1>
        <Login size={32} className='ml-2 text-yellow-500' />
      </div>

      {/* Form Section */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='mb-5'>
          <label className='block text-gray-700 font-medium mb-2'>Email</label>
          <input
            {...register('email', { required: true })}
            placeholder='Enter your email'
            className='w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition'
            type='email'
          />
          {errors.email?.type === 'required' && (
            <p className='text-red-500 mt-1 text-sm'>Email is required</p>
          )}
        </div>

        <div className='mb-5 relative'>
          <label className='block text-gray-700 font-medium mb-2'>Password</label>
          <input
            {...register('password', { required: true })}
            placeholder='Enter your password'
            className='w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition'
            type={isPasswordVisible ? 'text' : 'password'}
          />
          <div className='absolute right-3 top-10 cursor-pointer'>
            {isPasswordVisible ? (
              <EyeSlash size={24} onClick={togglePasswordVisibility} />
            ) : (
              <Eye size={24} onClick={togglePasswordVisibility} />
            )}
          </div>
          {errors.password?.type === 'required' && (
            <p className='text-red-500 mt-1 text-sm'>Password is required</p>
          )}
        </div>

        <div className='flex justify-between items-center mb-5'>
          <Link to='/forgot-password' className='text-yellow-500 text-sm hover:underline'>
            Forgot Password?
          </Link>
        </div>

        <div className='flex justify-center'>
          <button
            type='submit'
            disabled={isLoading}
            className={`w-full py-3 px-6 rounded-lg text-white font-semibold ${
              isLoading ? 'bg-yellow-300 cursor-not-allowed' : 'bg-yellow-500 hover:bg-yellow-600 transition'
            }`}
          >
            {isLoading ? 'Logging in...' : 'Log In'}
          </button>
        </div>
      </form>

      <div className='text-center mt-6'>
        <span className='text-gray-600'>Don't have an account? </span>
        <Link to='/register' className='text-yellow-500 font-medium hover:underline'>
          Register
        </Link>
      </div>

      <ToastContainer position='top-right' autoClose={3000} hideProgressBar={false} />
    </div>
  );
};

export default SignIn;
