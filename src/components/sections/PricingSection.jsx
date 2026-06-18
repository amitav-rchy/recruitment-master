import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { useReveal } from '../../hooks/useReveal.js'
import { fadeUp, EASE } from '../../animations/variants.js'
import { FREE_FEATURES, PREMIUM_FEATURES } from '../../data/index.js'

export default function PricingSection() {
  const { ref, inView } = useReveal()

  return (
    <section
      aria-labelledby="pricing-heading"
      className="py-20 md:py-28 bg-[#F8F9FF]"
    >
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2
          ref={ref}
          id="pricing-heading"
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-3xl md:text-4xl font-bold text-[#0B1E4F] mb-12 text-center"
        >
          Help Is One Click Away
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Free plan */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.65, ease: EASE, delay: 0.1 }}
            className="bg-white rounded-2xl border border-gray-200 p-8 flex flex-col"
          >
            <div className="mb-6">
              <p className="text-xs text-gray-400 font-medium mb-1">Free</p>
              <p className="text-2xl font-bold text-[#0B1E4F]">Basic</p>
            </div>

            <ul className="space-y-3 flex-1 mb-8" aria-label="Free plan features">
              {FREE_FEATURES.map((feature) => (
                <li key={feature} className="flex items-start gap-2 text-sm text-gray-600">
                  <Check size={15} className="text-[#3B5BF5] shrink-0 mt-0.5" aria-hidden="true" />
                  {feature}
                </li>
              ))}
            </ul>

            <a
              href="#"
              className="block text-center border-2 border-[#0B1E4F] text-[#0B1E4F] text-sm font-semibold py-3 rounded-xl transition-all duration-200 hover:bg-[#0B1E4F] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B1E4F]"
            >
              Get Started
            </a>
          </motion.div>

          {/* Premium plan */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.65, ease: EASE, delay: 0.2 }}
            className="rounded-2xl p-8 flex flex-col"
            style={{
              background: 'linear-gradient(150deg, #0B1E4F 0%, #14336B 100%)',
            }}
          >
            <div className="mb-6">
              <p className="text-xs text-blue-300 font-medium mb-1">Premium</p>
              <p className="text-2xl font-bold text-white">
                $79.99{' '}
                <span className="text-base font-normal text-blue-300">Per Month</span>
              </p>
            </div>

            <ul className="space-y-3 flex-1 mb-8" aria-label="Premium plan features">
              {PREMIUM_FEATURES.map((feature) => (
                <li key={feature} className="flex items-start gap-2 text-sm text-blue-100">
                  <Check size={15} className="text-blue-300 shrink-0 mt-0.5" aria-hidden="true" />
                  {feature}
                </li>
              ))}
            </ul>

            <a
              href="#"
              className="block text-center bg-white text-[#0B1E4F] text-sm font-semibold py-3 rounded-xl transition-all duration-200 hover:bg-blue-50 hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Get Started
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
