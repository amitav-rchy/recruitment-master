import { motion } from 'framer-motion'
import Badge from '../ui/Badge.jsx'
import { useReveal } from '../../hooks/useReveal.js'
import { fadeLeft, fadeRight } from '../../animations/variants.js'

export default function GlobalJobBoard() {
  const { ref: leftRef, inView: leftIn } = useReveal()
  const { ref: rightRef, inView: rightIn } = useReveal()

  return (
    <section aria-labelledby="global-heading" className="py-20 md:py-28 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 flex flex-col md:flex-row items-center gap-12 md:gap-16 justify-between">
        {/* Text */}
        <motion.div
          ref={leftRef}
          variants={fadeLeft}
          initial="hidden"
          animate={leftIn ? 'visible' : 'hidden'}
          className="flex-1"
        >
          <h3 className='bg-secondary font-[300] px-4 py-2 rounded-full inline-block text-[12px] font-semibold text-gray-600'>Global Reach</h3>
          <h2
            id="global-heading"
            className="text-3xl md:text-4xl text-[#0B1E4F] mb-5 leading-snug mt-8"
            style={{ fontWeight: 500 }}
          >
            The First Fully Global Job Board, Anywhere, Ever
          </h2>
          <p className="text-gray-500 text-base leading-relaxed text-[19px]" style={{ maxWidth: '450px', lineHeight: '1.9' }}>
            RemoteRecruit connects candidates with opportunities around the world. With
            today's remote-first workforce, you need to be able to find the best jobs and
            the best people for them, wherever they may be.
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
            <img
              src="/global-section1.png"
              alt="RemoteRecruit job board showing available positions worldwide"
              loading="lazy"
              width="480"
              height="340"
              className="w-full mt-5 overflow-hidden md: ml-32"
            />

        </motion.div>
      </div>
    </section>
  )
}
