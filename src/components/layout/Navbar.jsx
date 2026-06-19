import { useState, useEffect } from 'react'

export default function Navbar() {
  return (
    <nav
      aria-label="Primary navigation"
      className={`absolute top-0 left-0 right-0 z-50 transition-all duration-300`}
    >
      <div className="max-w-8xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" aria-label="RemoteRecruit home">
          <img
            src="/Logo.png"
            alt="RemoteRecruit"
            loading="lazy"
            width="180"
            height="52"
            className="h-10 w-auto ml-6 mt-2"
          />
        </a>

        <div className="flex items-center gap-4">
          <button
            href="#"
            className={`text-sm font-medium transition-colors text-white cursor-pointer duration-200`}
          >
            Sign In
          </button>
          <button
            href="#"
            className="text-sm font-semibold bg-[#49A0C7] cursor-pointer text-white px-5 py-2.5 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-blue-400/25 hover:-translate-y-px focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3B5BF5]"
          >
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  )
}
