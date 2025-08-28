'use client'

import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';

export default function DashboardPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-4">
      <SignedIn>
        <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
        <p>Chào mừng Admin 👋</p>
        <UserButton /> {/* Hiển thị nút logout */}
      </SignedIn>

      <SignedOut>
        <p>Bạn chưa đăng nhập</p>
      </SignedOut>
    </div>
  );
}
