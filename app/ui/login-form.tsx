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
import {useRouter} from 'next/router';

interface LoginFormProps {
  onSubmit: (data: { email: string; password: string }) => void;
}

interface FormValues {
  email: string;
  password: string;
}

export default function LoginForm({ onSubmit }: LoginFormProps) {
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();
  const router = useRouter();

  const onSubmitHandler: SubmitHandler<FormValues> = (data) => {
    onSubmit(data);
    router.push('/dashboard');
  };

  return (
    <form className="space-y-3" onSubmit={handleSubmit(onSubmitHandler)}>
      <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">
        <h1 className={`${lusitana.className} mb-3 text-2xl`}>
          Please log in to continue.
        </h1> 
        <div className="w-full">
          <div>
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
          Log in <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
        </Button>
      </div>
    </form>
  );
}
