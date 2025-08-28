'use client'

import { SignIn } from '@clerk/nextjs';

export default function SignInPage() {
  return (
    <div className="flex justify-center items-center min-h-screen w-full px-4">
      <SignIn
        path="/sign-in"
        routing="path"
        signUpUrl={undefined} // không cho đăng ký
        appearance={{
          layout: { logoPlacement: 'inside' },
          elements: {
            formButtonPrimary: "bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg w-full",
            formFieldInput: "border border-neutral-500 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white bg-gray-800"
          },
        }}
      />
    </div>
  );
}
