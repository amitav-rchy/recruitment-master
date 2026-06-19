import { motion } from 'framer-motion'
import PremiumCard from '../ui/PremiumCard.jsx'
import { useReveal } from '../../hooks/useReveal.js'
import { stagger, staggerItem, fadeLeft } from '../../animations/variants.js'

export default function FeeFree() {
  const { ref: leftRef, inView: leftIn } = useReveal()
  const { ref: rightRef, inView: rightIn } = useReveal()

  return (
    <section
      aria-labelledby="feefree-heading"
      className="py-16 md:py-28 overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-6 flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16 justify-between">

        {/* Card illustration */}
        <motion.div
          ref={leftRef}
          variants={fadeLeft}
          initial="hidden"
          animate={leftIn ? 'visible' : 'hidden'}
          className="flex-1 flex justify-center"
          whileHover={{ y: -8 }}
          transition={{ type: 'spring', stiffness: 260, damping: 22 }}
        >
          <div className="relative">
            <span aria-hidden="true" className="absolute -top-4 -left-8 w-5 h-5 rounded-full bg-[#3573AB]" />
            <PremiumCard />
          </div>
        </motion.div>

        {/* Text — staggered */}
        <motion.div
          ref={rightRef}
          variants={stagger}
          initial="hidden"
          animate={rightIn ? 'visible' : 'hidden'}
          className="flex-1"
        >
          <motion.div variants={staggerItem}>
            <h3 className="bg-secondary font-[300] px-4 py-2 rounded-full inline-block text-[12px] font-semibold text-gray-600">
              Actually Fee Free
            </h3>
          </motion.div>

          <motion.h2
            id="feefree-heading"
            variants={staggerItem}
            className="text-2xl sm:text-3xl md:text-4xl text-[#0B1E4F] mb-5 leading-snug mt-6 md:mt-8"
            style={{ fontWeight: 500 }}
          >
            Fee-Free Forever
          </motion.h2>

          <motion.p
            variants={staggerItem}
            className="text-gray-500 leading-relaxed text-base sm:text-[18px] md:text-[19px]"
            style={{ maxWidth: '450px', lineHeight: '1.9' }}
          >
            We don't charge you fees and we don't put up paywalls. We're the bridge that
            connects job opportunities with the best candidates, with no middleman
            involved.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
