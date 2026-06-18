import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      aria-label="Primary navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" aria-label="RemoteRecruit home">
          <img
            src="/Logo.png"
            alt="RemoteRecruit"
            loading="lazy"
            width="140"
            height="32"
            className="h-8 w-auto"
          />
        </a>

        <div className="flex items-center gap-4">
          <a
            href="#"
            className={`text-sm font-medium transition-colors duration-200 ${
              scrolled
                ? 'text-[#0B1E4F] hover:text-[#3B5BF5]'
                : 'text-white/90 hover:text-white'
            }`}
          >
            Sign In
          </a>
          <a
            href="#"
            className="text-sm font-semibold bg-[#3B5BF5] text-white px-5 py-2.5 rounded-full transition-all duration-200 hover:bg-[#2D4DE0] hover:shadow-lg hover:shadow-blue-400/25 hover:-translate-y-px focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3B5BF5]"
          >
            Sign Up
          </a>
        </div>
      </div>
    </nav>
  )
}
