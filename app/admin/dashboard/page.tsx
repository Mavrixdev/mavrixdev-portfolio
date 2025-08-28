'use client';
import { ClerkProvider, RedirectToSignIn, SignedIn, SignedOut, UserProfile } from '@clerk/nextjs';

export default function Dashboard() {
  return (
    <ClerkProvider>
      <SignedIn>
        <div className="min-h-screen p-8 bg-gray-900 text-white flex flex-col items-center">
          <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

          {/* UserProfile component để quản lý avatar, profile, mật khẩu */}
          <div className="p-6 bg-gray-800 rounded-2xl shadow-lg">
            <UserProfile path="/dashboard" />
          </div>
        </div>
      </SignedIn>

      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </ClerkProvider>
  );
}
