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
      <div className="max-w-6xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16">
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
          <p className="text-sm font-semibold text-[#3B5BF5] mb-3 tracking-wide">
            Actually Fee Free
          </p>
          <h2
            id="feefree-heading"
            className="text-3xl md:text-4xl font-bold text-[#0B1E4F] mb-5 leading-snug"
          >
            Fee-Free Forever
          </h2>
          <p className="text-gray-500 text-base leading-relaxed">
            We don't charge you fees and we don't put up paywalls. We're the bridge that
            connects job opportunities with the best candidates, with no middleman
            involved.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
