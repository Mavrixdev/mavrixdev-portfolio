'use client'

import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const links = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#experience', label: 'Experience' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <nav className="rounded-full fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-4xl bg-gray-900/80 backdrop-blur-md border border-gray-700 px-6 py-3 flex items-center justify-between shadow-lg">
      {/* Logo bên trái */}
      <div className="flex items-center">
        <Link href="/" className="text-lg font-bold text-white flex items-center gap-2">
          🚀 Mavrixdev
        </Link>
      </div>

      {/* Links chính giữa */}
      <div className="hidden md:flex flex-1 justify-center items-center gap-8">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* Mobile menu button bên phải */}
      <div className="flex items-center md:hidden">
        <button
          className="text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="absolute top-full mt-3 right-0 w-[200px] bg-gray-900 border border-gray-700 rounded-xl p-4 flex flex-col gap-3 shadow-xl md:hidden">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
