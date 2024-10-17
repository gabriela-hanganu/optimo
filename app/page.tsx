"use client";
import React, { useState } from 'react';
import LoginForm from "./ui/login-form";
import { Logo } from "./logo/logo";
import RegisterForm from './ui/register-form';
import { Table } from 'lucide-react';
import CustomersTable from './ui/customers/table';


export default function Page() {
  const [isLogin, setIsLogin] = useState(true)

  return (
    <main className="flex min-h-screen flex-col">
      <div className="flex h-15 shrink-0 items-end bg-indigo-700 p-4 md:h-30">
        <Logo />
      </div>
      <div className="flex-grow container mx-auto px-4 py-8 flex items-center justify-center">
        <div className="w-full max-w-md">
          {isLogin ?
            <RegisterForm onSubmit={(data: any) => { console.log(data); }} /> :
            <LoginForm onSubmit={(data: any) => { console.log(data); }} />
          }
        </div>

      </div>
      <div className="flex-grow container mx-auto px-4 flex items-center justify-center">
        <button
          onClick={() => setIsLogin(!isLogin)}
          className="text-sm text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline"
        >
          {isLogin ? "Need an account? Sign up" : "Already have an account? Log in"}
        </button>
      </div>

    </main>
  );
}
