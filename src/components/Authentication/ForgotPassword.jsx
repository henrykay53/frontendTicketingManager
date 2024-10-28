import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';

const ForgotPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      // Simulate API call
      console.log(data);
      toast.success('Password reset link sent! Please check your email.');
    } catch (error) {
      toast.error('Failed to send reset link. Try again.');
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='bg-white py-10 px-8 w-[90%] lg:w-[30%] mt-20 mx-auto rounded-lg shadow-md'>
      <h1 className='text-4xl font-semibold text-yellow-500 text-center mb-8'>Forgot Password</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Email Input */}
        <div className='mb-6'>
          <input
            {...register('email', {
              required: 'Email is required.',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Please enter a valid email.',
              },
            })}
            placeholder='Enter your email'
            className='w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500'
            type='email'
          />
          {errors.email && (
            <p className='text-red-500 text-sm mt-2'>{errors.email.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <div className='flex justify-center'>
          <button
            type='submit'
            className={`w-[50%] py-3 rounded-lg text-white font-bold transition ${
              isLoading
                ? 'bg-yellow-300 cursor-not-allowed'
                : 'bg-yellow-500 hover:bg-yellow-600'
            }`}
            disabled={isLoading}
          >
            {isLoading ? 'Sending...' : 'Reset Password'}
          </button>
        </div>
      </form>

      <ToastContainer position='top-right' autoClose={3000} hideProgressBar={false} />
    </div>
  );
};

export default ForgotPassword;
