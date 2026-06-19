import { motion } from 'framer-motion'
import PremiumCard from '../ui/PremiumCard.jsx'
import { useReveal } from '../../hooks/useReveal.js'
import { fadeLeft, fadeRight } from '../../animations/variants.js'

export default function FeeFree() {
  const { ref: leftRef, inView: leftIn } = useReveal()
  const { ref: rightRef, inView: rightIn } = useReveal()

  return (
    <section
      aria-labelledby="feefree-heading"
      className="py-20 md:py-28 bg-[#F8F9FF] overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-6 flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16 justify-between">
        {/* Card illustration */}
        <motion.div
          ref={leftRef}
          variants={fadeLeft}
          initial="hidden"
          animate={leftIn ? 'visible' : 'hidden'}
          className="flex-1 flex justify-center"
        >
          <div className="relative">
            <span aria-hidden="true" className="absolute -top-4 -left-4 w-3 h-3 rounded-full bg-[#3B5BF5]" />
            <PremiumCard />
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          ref={rightRef}
          variants={fadeRight}
          initial="hidden"
          animate={rightIn ? 'visible' : 'hidden'}
          className="flex-1"
        >
          <h3 className="bg-secondary font-[300] px-4 py-2 rounded-full inline-block text-[12px] font-semibold text-gray-600">Actually Fee Free</h3>
          <h2
            id="feefree-heading"
            className="text-3xl md:text-4xl text-[#0B1E4F] mb-5 leading-snug mt-8"
            style={{ fontWeight: 500 }}
          >
            Fee-Free Forever
          </h2>
          <p className="text-gray-500 text-base leading-relaxed text-[19px]" style={{ maxWidth: '450px', lineHeight: '1.9' }}>
            We don't charge you fees and we don't put up paywalls. We're the bridge that
            connects job opportunities with the best candidates, with no middleman
            involved.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
