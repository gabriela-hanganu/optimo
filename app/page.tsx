"use client";
import React from 'react';
import LoginForm from "./ui/login-form";
import { Logo } from "./logo/logo";


export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-15 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-30">
        <Logo />
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          <LoginForm onSubmit={(data: any) => { console.log(data); }} />
        </div>
      </div>
    </main>
  );
}
