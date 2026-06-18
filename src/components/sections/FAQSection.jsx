import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useReveal } from '../../hooks/useReveal.js'
import { fadeUp } from '../../animations/variants.js'
import { FAQ_DATA } from '../../data/index.js'

function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="w-full text-left py-5 flex items-center justify-between gap-4 group cursor-pointer"
      >
        <span className="text-sm font-semibold text-[#0B1E4F] group-hover:text-[#3B5BF5] transition-colors duration-200">
          {question}
        </span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="shrink-0 text-gray-400"
          aria-hidden="true"
        >
          <ChevronDown size={18} />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="faq-answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="text-sm text-gray-500 leading-relaxed pb-5">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQSection() {
  const { ref, inView } = useReveal()

  return (
    <section aria-labelledby="faq-heading" className="py-20 md:py-28">
      <div className="max-w-2xl mx-auto px-6">
        <motion.h2
          ref={ref}
          id="faq-heading"
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-3xl md:text-4xl font-bold text-[#0B1E4F] mb-10"
        >
          Common Questions
        </motion.h2>

        <div>
          {FAQ_DATA.map((item, i) => (
            <FAQItem key={i} question={item.question} answer={item.answer} />
          ))}
        </div>

        <div className="mt-8">
          <a
            href="#"
            className="inline-block border-2 border-[#0B1E4F] text-[#0B1E4F] text-sm font-semibold px-6 py-2.5 rounded-md transition-all duration-200 hover:bg-[#0B1E4F] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B1E4F]"
          >
            More Questions
          </a>
        </div>
      </div>
    </section>
  )
}
