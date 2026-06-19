import { motion } from 'framer-motion'
import { EASE } from '../../animations/variants.js'

export default function Navbar() {
  return (
    <motion.nav
      aria-label="Primary navigation"
      className="absolute top-0 left-0 right-0 z-50"
      initial={{ opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: EASE }}
    >
      <div className="max-w-8xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <a href="#" aria-label="RemoteRecruit home">
          <img
            src="/Logo.png"
            alt="RemoteRecruit"
            loading="lazy"
            width="180"
            height="52"
            className="h-8 sm:h-10 w-auto ml-2 sm:ml-6 mt-2"
          />
        </a>

        <div className="flex items-center gap-2 sm:gap-4">
          <button className="text-xs sm:text-sm font-medium text-white transition-colors duration-200">
            Sign In
          </button>
          <button className="text-xs sm:text-sm font-semibold bg-primary text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-blue-400/25 hover:-translate-y-px focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">
            Sign Up
          </button>
        </div>
      </div>
    </motion.nav>
  )
}
