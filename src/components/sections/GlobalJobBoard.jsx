import { motion } from 'framer-motion'
import Badge from '../ui/Badge.jsx'
import { useReveal } from '../../hooks/useReveal.js'
import { fadeLeft, fadeRight } from '../../animations/variants.js'

export default function GlobalJobBoard() {
  const { ref: leftRef, inView: leftIn } = useReveal()
  const { ref: rightRef, inView: rightIn } = useReveal()

  return (
    <section aria-labelledby="global-heading" className="py-20 md:py-28 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12 md:gap-16">
        {/* Text */}
        <motion.div
          ref={leftRef}
          variants={fadeLeft}
          initial="hidden"
          animate={leftIn ? 'visible' : 'hidden'}
          className="flex-1"
        >
          <Badge text="Global Reach" />
          <h2
            id="global-heading"
            className="text-3xl md:text-4xl font-bold text-[#0B1E4F] mb-5 leading-snug"
          >
            The First Fully Global Job Board, Anywhere, Ever
          </h2>
          <p className="text-gray-500 text-base leading-relaxed">
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
          <div className="relative">
            <span aria-hidden="true" className="absolute -top-4 -left-4 w-3 h-3 rounded-full bg-[#3B5BF5]" />
            <img
              src="/Find Work.png"
              alt="RemoteRecruit job board showing available positions worldwide"
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
