import { motion } from 'framer-motion'
import { useReveal } from '../../hooks/useReveal.js'
import { fadeRight, stagger, staggerItem } from '../../animations/variants.js'

export default function ShowcaseTalents() {
  const { ref: leftRef, inView: leftIn } = useReveal()
  const { ref: rightRef, inView: rightIn } = useReveal()

  return (
    <section aria-labelledby="showcase-heading" className="py-16 md:py-28 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 flex flex-col md:flex-row items-center gap-10 md:gap-16 justify-between">

        {/* Text — staggered */}
        <motion.div
          ref={leftRef}
          variants={stagger}
          initial="hidden"
          animate={leftIn ? 'visible' : 'hidden'}
          className="flex-1"
        >
          <motion.div variants={staggerItem}>
            <h3 className="bg-secondary font-[300] px-4 py-2 rounded-full inline-block text-[12px] font-semibold text-gray-600">
              Custom Profile
            </h3>
          </motion.div>

          <motion.h2
            id="showcase-heading"
            variants={staggerItem}
            className="text-2xl sm:text-3xl md:text-4xl text-[#0B1E4F] mb-5 leading-snug mt-6 md:mt-8"
            style={{ fontWeight: 500 }}
          >
            Showcase Your Talents
          </motion.h2>

          <motion.p
            variants={staggerItem}
            className="text-gray-500 leading-relaxed text-base sm:text-[18px] md:text-[19px]"
            style={{ maxWidth: '450px', lineHeight: '1.9' }}
          >
            Personalize your profile with everything that makes you unique. Add an
            introductory video and other media for a personal touch that stands out to
            employers and candidates.
          </motion.p>
        </motion.div>

        {/* Image */}
        <motion.div
          ref={rightRef}
          variants={fadeRight}
          initial="hidden"
          animate={rightIn ? 'visible' : 'hidden'}
          className="flex-1 flex justify-center"
          whileHover={{ scale: 1.02 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
        >
          <div className="relative w-full max-w-md md:max-w-none">
            <span aria-hidden="true" className="absolute -top-3 -right-3 w-3 h-3 rounded-full bg-[#3B5BF5]" />
            <img
              src="/showcase.png"
              alt="Developer profile showcasing completed jobs, skills and client feedback"
              loading="lazy"
              width="480"
              height="340"
              className="w-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
