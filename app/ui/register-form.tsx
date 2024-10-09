import { lusitana } from '@/app/ui/fonts/fonts';
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import {
  AtSymbolIcon,
  KeyIcon
} from '@heroicons/react/24/outline';
import { ArrowRightIcon } from '@heroicons/react/20/solid';
import { Button } from './button';
import ErrorMessage from './error-mesage';
import { useRouter } from 'next/navigation';
import { User } from 'lucide-react';

interface RegisterFormProps {
  onSubmit: (data: { email: string; password: string }) => void;
}

interface FormValues {
  email: string;
  password: string;
}

export default function RegisterForm({ onSubmit }: RegisterFormProps) {
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();
  const router = useRouter();

  const onSubmitHandler: SubmitHandler<FormValues> = (data) => {
    onSubmit(data);
    router.push('/dashboard');
  };

  return (
    <form className="flex-grow container mx-auto px-4 py-8 flex items-center justify-center" onSubmit={handleSubmit(onSubmitHandler)}>
      <div className="w-full max-w-md">
        <h2 className={`${lusitana.className} mb-3 text-2xl`}>
          Please register to continue.
        </h2>
        <div className="w-full">
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Enter your full name"
                required
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <User className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </div>
            </div>
          </div>
          <div className='mt-4'>
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="email"
            >
              Email
            </label>
            <div className="relative">
              <>
                <input
                  className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500 [&:not(:placeholder-shown):not(:focus):invalid~span]:block invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-400 valid:[&:not(:placeholder-shown)]:border-green-500"
                  id="email"
                  type="email"
                  placeholder="Enter your email address"
                  {...register('email', {
                    required: 'Please fill out this field.',
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: 'Please enter a valid email address.',
                    },
                  })}
                />
                <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
              </>

            </div>
            {errors.email && <ErrorMessage message={errors.email.message} />}
          </div>
          <div className="mt-4">
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="password"
            >
              Password
            </label>
            <div className="relative">
              <div className="relative">
                <input
                  className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                  id="password"
                  type="password"
                  placeholder="Enter password"
                  {...register('password', {
                    required: 'Please fill out this field.',
                    minLength: {
                      value: 6,
                      message: 'Password must be at least 6 characters long.',
                    },
                  })}
                />
                <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />

              </div>
              {errors.password && <ErrorMessage message={errors.password.message} />}
            </div>
          </div>
        </div>
        <Button type="submit" className="mt-4 w-half center">
          Register <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
        </Button>
      </div>
    </form>
  );
}
