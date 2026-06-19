import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useReveal } from '../../hooks/useReveal.js'
import { stagger, staggerItem, fadeUp } from '../../animations/variants.js'
import { FAQ_DATA } from '../../data/index.js'

function FAQItem({ question, answer }) {
  return (
    <div className="mb-8 md:mb-10 last:mb-0">
      <div className="flex items-start justify-between gap-4 mb-3">
        <span
          style={{ fontWeight: 500 }}
          className="text-lg sm:text-[20px] md:text-[22px] text-[#0B1E4F] leading-snug"
        >
          {question}
        </span>
        <ChevronDown size={20} className="shrink-0 text-gray-400 mt-0.5" aria-hidden="true" />
      </div>
      <p
        style={{ fontWeight: 400 }}
        className="text-sm sm:text-base md:text-[18px] text-gray-500 leading-relaxed"
      >
        {answer}
      </p>
    </div>
  )
}

export default function FAQSection() {
  const { ref, inView } = useReveal(0.05)

  return (
    <section aria-labelledby="faq-heading" className="py-16 md:py-28 mt-8 md:mt-16">
      <motion.div
        ref={ref}
        className="max-w-[1400px] mx-auto px-6"
        variants={stagger}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <motion.h2
          id="faq-heading"
          variants={fadeUp}
          className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#0B1E4F] mb-10 md:mb-14"
        >
          Common Questions
        </motion.h2>

        {FAQ_DATA.map((item, i) => (
          <motion.div key={i} variants={staggerItem}>
            <FAQItem question={item.question} answer={item.answer} />
          </motion.div>
        ))}

        <motion.div variants={staggerItem} className="mt-8 md:mt-10">
          <a
            href="#"
            className="inline-block border border-[#49A0C7] text-indigo-900 text-sm font-semibold px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg transition-all duration-200 hover:bg-[#49A0C7] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#49A0C7]"
          >
            More Questions
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}
