import { motion } from 'framer-motion'
import { useReveal } from '../../hooks/useReveal.js'
import { fadeRight, stagger, staggerItem } from '../../animations/variants.js'

export default function GlobalJobBoard() {
  const { ref: leftRef, inView: leftIn } = useReveal()
  const { ref: rightRef, inView: rightIn } = useReveal()

  return (
    <section aria-labelledby="global-heading" className="py-16 md:py-28 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 flex flex-col md:flex-row items-center gap-10 md:gap-16 justify-between">

        {/* Text — staggered children */}
        <motion.div
          ref={leftRef}
          variants={stagger}
          initial="hidden"
          animate={leftIn ? 'visible' : 'hidden'}
          className="flex-1"
        >
          <motion.div variants={staggerItem}>
            <h3 className="bg-secondary font-[300] px-4 py-2 rounded-full inline-block text-[12px] font-semibold text-gray-600">
              Global Reach
            </h3>
          </motion.div>

          <motion.h2
            id="global-heading"
            variants={staggerItem}
            className="text-2xl sm:text-3xl md:text-4xl text-[#0B1E4F] mb-5 leading-snug mt-6 md:mt-8"
            style={{ fontWeight: 500 }}
          >
            The First Fully Global Job Board, Anywhere, Ever
          </motion.h2>

          <motion.p
            variants={staggerItem}
            className="text-gray-500 leading-relaxed text-base sm:text-[18px] md:text-[19px]"
            style={{ maxWidth: '450px', lineHeight: '1.9' }}
          >
            RemoteRecruit connects candidates with opportunities around the world. With
            today's remote-first workforce, you need to be able to find the best jobs and
            the best people for them, wherever they may be.
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
          <img
            src="/global-section1.png"
            alt="RemoteRecruit job board showing available positions worldwide"
            loading="lazy"
            width="480"
            height="340"
            className="w-full max-w-md md:max-w-none md:ml-8 mt-5"
          />
        </motion.div>
      </div>
    </section>
  )
}
