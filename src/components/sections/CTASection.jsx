import { motion } from 'framer-motion'
import { useReveal } from '../../hooks/useReveal.js'
import { fadeLeft, fadeRight } from '../../animations/variants.js'

export default function CTASection() {
  const { ref, inView } = useReveal(0.1)

  return (
    <section
      aria-labelledby="cta-heading"
      className="relative overflow-hidden"
      style={{
        background: 'linear-gradient(150deg, #081840 0%, #0F2A5E 40%, #16406E 70%, #1A527A 100%)',
      }}
    >
      {/* Polygon decoration */}
      <img
        src="/Polygon 4.png"
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="absolute top-8 left-8 md:left-12 w-10 h-10 md:w-14 md:h-14 object-contain"
      />

      {/* Decorative dots */}
      <span aria-hidden="true" className="absolute bottom-10 right-10 w-3 h-3 rounded-full bg-blue-400 opacity-50" />
      <span aria-hidden="true" className="absolute top-20 right-1/3 w-2 h-2 rounded-full bg-indigo-300 opacity-30" />

      <div ref={ref} className="max-w-6xl mx-auto flex flex-col md:flex-row items-stretch">
        {/* App screenshot — rises from bottom */}
        <motion.div
          variants={fadeLeft}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="flex-1 flex items-end justify-center pt-16 px-6 overflow-hidden"
        >
          <img
            src="/Find Work.png"
            alt="RemoteRecruit app — Let's Find Work screen"
            loading="lazy"
            width="420"
            height="300"
            className="w-full max-w-sm rounded-t-2xl shadow-2xl shadow-black/30"
          />
        </motion.div>

        {/* Text */}
        <motion.div
          variants={fadeRight}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="flex-1 flex flex-col justify-center px-6 py-16 md:py-24"
        >
          <p className="text-[#93B4FF] text-sm font-medium mb-3 tracking-wide">
            Are you ready?
          </p>
          <h2
            id="cta-heading"
            className="text-3xl md:text-4xl font-bold text-white mb-5 leading-snug"
          >
            Help is only a few clicks away!
          </h2>
          <p className="text-blue-200/75 text-base mb-8 leading-relaxed">
            Click Below to get set up super quickly and find help now!
          </p>

          <div>
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-[#3B5BF5] text-white text-sm font-semibold px-6 py-3 rounded-full transition-all duration-200 hover:bg-[#2D4DE0] hover:shadow-xl hover:shadow-blue-900/40 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <img
                src="/RR Icon Logo.png"
                alt=""
                aria-hidden="true"
                loading="lazy"
                className="h-5 w-5 object-contain"
              />
              Get Started
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
