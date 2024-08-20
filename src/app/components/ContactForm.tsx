'use client'

import { useForm, SubmitHandler } from 'react-hook-form';
import { useState } from 'react';
import { postContactData } from '../lib/services';

type FormInputs = ContactData;

export default function ContactForm() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormInputs>()
  const [serverErrors, setServerErrors] = useState<string[]>([])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    setIsSubmitting(true)
    setServerErrors([])

    try {
      await postContactData(data);
      setIsSubmitted(true);
      reset();
    } catch (error) {
      if (error && typeof error === 'object' && 'errors' in error) {
        console.log('error', error);
        setServerErrors(error.errors as string[]);
      } else {
        setServerErrors(['An unexpected error occurred']);
      }
    } finally {
      setIsSubmitting(false);
    }
  }

  if (isSubmitted) {
    return <p className="text-green-600">Thank you for your message. We'll get back to you soon!</p>
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

    {serverErrors.length > 0 && (
    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
        <ul className="list-disc list-inside">
        {serverErrors.map((error, index) => (
            <li key={index}>{error}</li>
        ))}
        </ul>
    </div>
    )}

      <div>
        <label htmlFor="name" className="block mb-1">Name</label>
        <input
          id="name"
          {...register('name', { required: 'Name is required' })}
          className="w-full px-3 py-2 border rounded"
        />
        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
      </div>

      <div>
        <label htmlFor="email" className="block mb-1">Email</label>
        <input
            id="email"
            type='email'
            {...register('email', {
                required: 'Email is required',
                pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address'
                }
            })}
            className='w-full px-3 py-2 border rounded'
        />
        {errors.email && <p className='text-red-500 text-sm mt-1'>{errors.email.message}</p>}
      </div>

      <div>
        <label htmlFor="message" className="block mb-1">Message</label>
        <textarea
          id="message"
          {...register('message', { required: 'Message is required' })}
          className="w-full px-3 py-2 border rounded"
          rows={4}
        ></textarea>
        {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:bg-blue-300"
      >
        {isSubmitting ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  )
}