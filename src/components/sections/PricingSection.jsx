import { motion } from 'framer-motion'
import { Check, X } from 'lucide-react'
import { useReveal } from '../../hooks/useReveal.js'
import { fadeUp, stagger, staggerItem, EASE } from '../../animations/variants.js'
import { FREE_FEATURES, PREMIUM_FEATURES } from '../../data/index.js'

function GemIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="#49A0C7" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 3L2 9l10 12L22 9l-4-6H6z" />
      <path d="M2 9h20M6 3l4 6M18 3l-4 6M12 21L8 9M12 21l4-12" stroke="white" strokeWidth="0.5" fill="none" />
    </svg>
  )
}

export default function PricingSection() {
  const { ref, inView } = useReveal()

  return (
    <section
      aria-labelledby="pricing-heading"
      className="pt-16 md:pt-28 pb-0 bg-white"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-14 md:pb-16">
        <motion.h2
          ref={ref}
          id="pricing-heading"
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0B1E4F] mb-8 md:mb-12 text-center"
        >
          Help Is One Click Away
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5"
          variants={stagger}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >

          {/* ── Free / Basic card ── */}
          <motion.div
            variants={staggerItem}
            whileHover={{ y: -4 }}
            transition={{ type: 'spring', stiffness: 300, damping: 22 }}
            className="rounded-2xl flex flex-col overflow-hidden"
            style={{ background: '#EEF2F9' }}
          >
            {/* Card body — stacks on xs, row on sm+ */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 p-5 sm:p-6 flex-1">
              {/* Left: plan label */}
              <div className="flex sm:flex-col flex-row items-center sm:justify-center sm:items-center gap-3 sm:gap-0 sm:w-24 shrink-0">
                <p className="text-xl sm:text-2xl font-bold leading-tight" style={{ color: '#49A0C7' }}>
                  Free
                </p>
                <p className="text-sm text-gray-400 sm:mt-0.5">Basic</p>
              </div>

              {/* Divider — vertical on sm+, horizontal on xs */}
              <div className="h-px sm:h-auto sm:w-px bg-gray-200 self-stretch" />

              {/* Right: features */}
              <ul className="flex-1 flex flex-col justify-center gap-2 sm:gap-2.5" aria-label="Free plan features">
                {FREE_FEATURES.map((feature) => (
                  <li
                    key={feature.text}
                    className="flex items-start gap-2 text-xs sm:text-sm"
                    style={{ color: feature.included ? '#374151' : '#9CA3AF' }}
                  >
                    {feature.included ? (
                      <Check size={14} className="shrink-0 mt-0.5" style={{ color: '#49A0C7' }} aria-hidden="true" />
                    ) : (
                      <X size={14} className="shrink-0 mt-0.5 text-gray-400" aria-hidden="true" />
                    )}
                    {feature.text}
                  </li>
                ))}
              </ul>
            </div>

            {/* Button */}
            <div className="px-5 sm:px-6 pb-5 sm:pb-6">
              <a
                href="#"
                className="block text-center bg-white border border-[#0B1E4F] text-[#0B1E4F] text-sm font-semibold py-3 rounded-xl transition-all duration-200 hover:bg-[#0B1E4F] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B1E4F]"
              >
                Get Started
              </a>
            </div>
          </motion.div>

          {/* ── Premium card ── */}
          <motion.div
            variants={staggerItem}
            whileHover={{ y: -4 }}
            transition={{ type: 'spring', stiffness: 300, damping: 22 }}
            className="bg-white rounded-2xl flex flex-col"
            style={{ boxShadow: '0 8px 32px rgba(13,27,62,0.12)' }}
          >
            {/* Premium badge */}
            <div className="flex items-center gap-1.5 px-5 sm:px-6 pt-4 sm:pt-5 pb-1">
              <GemIcon />
              <span className="text-sm font-semibold" style={{ color: '#49A0C7' }}>
                Premium
              </span>
            </div>

            {/* Card body — stacks on xs, row on sm+ */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 px-5 sm:px-6 py-3 flex-1">
              {/* Left: price */}
              <div className="flex sm:flex-col flex-row items-center sm:justify-center sm:items-start gap-3 sm:gap-0 sm:w-24 shrink-0">
                <p className="text-xl sm:text-2xl font-bold text-[#0B1E4F] leading-tight">$79.99</p>
                <p className="text-xs text-gray-400 sm:mt-0.5">Per Month</p>
              </div>

              {/* Divider */}
              <div className="h-px sm:h-auto sm:w-px bg-gray-100 self-stretch" />

              {/* Right: features */}
              <ul className="flex-1 flex flex-col justify-center gap-2 sm:gap-2.5" aria-label="Premium plan features">
                {PREMIUM_FEATURES.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-xs sm:text-sm text-gray-700">
                    <Check size={14} className="shrink-0 mt-0.5" style={{ color: '#49A0C7' }} aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Button */}
            <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-3">
              <a
                href="#"
                className="block text-center text-white text-sm font-semibold py-3 rounded-xl transition-all duration-200 hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1A3A6B]"
                style={{ background: '#1A3A6B' }}
              >
                Get Started
              </a>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  )
}
