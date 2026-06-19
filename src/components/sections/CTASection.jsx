import { motion } from 'framer-motion'
import { useReveal } from '../../hooks/useReveal.js'
import { fadeLeft, stagger, staggerItem } from '../../animations/variants.js'

export default function CTASection() {
  const { ref, inView } = useReveal(0.1)

  return (
    <section
      aria-labelledby="cta-heading"
      className="relative overflow-hidden"
    >
      {/* Small teal circle — bottom right */}
      <span
        aria-hidden="true"
        className="absolute bottom-8 right-8 sm:bottom-12 sm:right-16 w-4 h-4 sm:w-5 sm:h-5 rounded-full"
        style={{ background: '#49A0C7' }}
      />

      <div
        ref={ref}
        className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between"
      >
        {/* ── Left: overlapping screenshots ── */}
        <motion.div
          variants={fadeLeft}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="flex-1 relative flex items-center justify-center py-10 md:py-16 px-6 md:pl-16 md:pr-24"
          style={{ minHeight: 'clamp(300px, 50vw, 460px)' }}
        >
          {/* Main app screenshot */}
          <img
            src="/Find Work.png"
            alt="RemoteRecruit app — Let's Find Work screen"
            loading="lazy"
            className="absolute left-0 z-0 w-full max-w-[240px] sm:max-w-[280px] md:max-w-[640px] rounded-2xl shadow-2xl"
            style={{ boxShadow: '0 20px 60px rgba(13,27,62,0.12)' }}
          />
        </motion.div>

        {/* ── Right: text + CTA ── */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="flex-1 flex flex-col justify-center py-10 md:py-20 px-6 md:px-16"
        >
          <motion.p
            variants={staggerItem}
            className="text-sm font-semibold mb-3 md:mb-4 tracking-wide"
            style={{ color: '#49A0C7' }}
          >
            Are you ready?
          </motion.p>

          <motion.h2
            id="cta-heading"
            variants={staggerItem}
            className="font-extrabold leading-tight mb-4 md:mb-5"
            style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)', color: '#0D1B3E' }}
          >
            Help is only a few clicks away!
          </motion.h2>

          <motion.p
            variants={staggerItem}
            className="text-sm sm:text-base leading-relaxed mb-8 md:mb-10 max-w-xs"
            style={{ color: '#7A8CA8' }}
          >
            Click Below to get set up super quickly and find help now!
          </motion.p>

          <motion.div variants={staggerItem}>
            <a
              href="#"
              className="inline-flex items-center gap-3 md:gap-4 self-start rounded-full px-4 py-2.5 transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              style={{
                background: 'rgba(255,255,255,0.55)',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(255,255,255,0.85)',
                boxShadow: '0 4px 24px rgba(73,160,199,0.18)',
              }}
            >
              <span
                className="w-10 h-10 md:w-11 md:h-11 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: '#49A0C7' }}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </span>
              <span className="font-semibold text-sm md:text-base pr-2 md:pr-3" style={{ color: '#0D1B3E' }}>
                Get Started
              </span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
