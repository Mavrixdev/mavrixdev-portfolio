'use client'

import { ClerkProvider, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="dark">
          <header className="flex justify-between items-center p-4 border-b border-gray-700">
            <Link href="/dashboard" className="text-xl font-bold">Admin Dashboard</Link>
            <div className="flex items-center gap-4">
              <SignedOut>
                <Link href="/sign-in">
                  <button className="bg-indigo-600 px-4 py-2 rounded-lg hover:bg-indigo-700">
                    Sign In
                  </button>
                </Link>
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </div>
          </header>

          <main className="p-6">
            {children}
          </main>
        </body>
      </html>
    </ClerkProvider>
  )
}
