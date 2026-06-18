import { motion } from 'framer-motion'
import Badge from '../ui/Badge.jsx'
import { useReveal } from '../../hooks/useReveal.js'
import { fadeLeft, fadeRight } from '../../animations/variants.js'

export default function ShowcaseTalents() {
  const { ref: leftRef, inView: leftIn } = useReveal()
  const { ref: rightRef, inView: rightIn } = useReveal()

  return (
    <section aria-labelledby="showcase-heading" className="py-20 md:py-28 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12 md:gap-16">
        {/* Text */}
        <motion.div
          ref={leftRef}
          variants={fadeLeft}
          initial="hidden"
          animate={leftIn ? 'visible' : 'hidden'}
          className="flex-1"
        >
          <Badge text="Custom Profile" />
          <h2
            id="showcase-heading"
            className="text-3xl md:text-4xl font-bold text-[#0B1E4F] mb-5 leading-snug"
          >
            Showcase Your Talents
          </h2>
          <p className="text-gray-500 text-base leading-relaxed">
            Personalize your profile with everything that makes you unique. Add an
            introductory video and other media for a personal touch that stands out to
            employers and candidates.
          </p>
        </motion.div>

        {/* Image */}
        <motion.div
          ref={rightRef}
          variants={fadeRight}
          initial="hidden"
          animate={rightIn ? 'visible' : 'hidden'}
          className="flex-1 flex justify-center"
        >
          <div className="relative">
            <span aria-hidden="true" className="absolute -top-3 -right-3 w-3 h-3 rounded-full bg-[#3B5BF5]" />
            <img
              src="/Group 132.png"
              alt="Developer profile showcasing completed jobs, skills and client feedback"
              loading="lazy"
              width="480"
              height="340"
              className="w-full max-w-md rounded-2xl shadow-2xl shadow-blue-100"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
