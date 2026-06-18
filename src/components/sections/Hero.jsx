import { motion } from 'framer-motion'

const EASE = [0.22, 1, 0.36, 1]

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden"
      style={{
        background: 'linear-gradient(145deg, #112070 0%, #1848b0 50%, #1e55c8 100%)',
      }}
    >
      {/* Dark blob — center-right bottom (renders first so lighter blob sits above it) */}
      <div
        aria-hidden="true"
        className="absolute rounded-full"
        style={{
          width: '800px',
          height: '800px',
          top: '370px',
          left: '27%',
          background: 'rgba(4, 8, 26, 0.92)',
        }}
      />

      {/* Lighter blue blob — bottom left */}
      <div
        aria-hidden="true"
        className="absolute rounded-full"
        style={{
          width: '320px',
          height: '320px',
          top: '370px',
          left: '-35px',
          background: 'rgba(26, 100, 210, 0.75)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-2xl mx-auto px-6 pt-36 pb-28 text-center">
        <motion.h1
          id="hero-heading"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="text-4xl md:text-[2.75rem] font-bold text-white mb-6 leading-tight"
        >
          RemoteRecruit's Difference
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.18, ease: EASE }}
          className="text-white/85 text-base md:text-lg leading-relaxed"
        >
          RemoteRecruit is connecting the world with an easy-to-use platform that lets
          full-time, part-time, and freelance workers showcase their talents to businesses
          that need them. With no paywalls, no fees, and no barriers, there's nothing but
          you, your talents, and the next step in your career.
        </motion.p>
      </div>

      {/* Wave separator */}
      <div aria-hidden="true" className="relative h-16 md:h-20 -mb-px">
        <svg
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          className="absolute inset-0 w-full h-full"
        >
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="black" />
        </svg>
      </div>
    </section>
  )
}
