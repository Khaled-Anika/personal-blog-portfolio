'use client'

import Link from 'next/link'
import { useState } from 'react'

const NavMenuItems: Array<{
    id: string;
    title: string;
    href: string;
  }> = [
    { id: 'portfolio', title: 'Portfolio', href: '/portfolio' },
    { id: 'blog', title: 'Blogs', href: '/blogs' },
    { id: 'contact', title: 'Contact', href: '/contact' }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold">
              Anika
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
                {NavMenuItems.map((item) => (
                    <Link key={item.id} href={item.href} className="text-gray-600 hover:text-gray-900">{item.title}</Link>
                ))}
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={!isOpen ? "M4 6h16M4 12h16M4 18h16" : "M6 18L18 6M6 6l12 12"} />
                </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NavMenuItems.map((item) => (
                <Link key={item.id} href={item.href} className="block text-gray-600 hover:text-gray-900">{item.title}</Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar