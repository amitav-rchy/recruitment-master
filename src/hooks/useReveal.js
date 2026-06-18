import { useRef } from 'react'
import { useInView } from 'framer-motion'

export function useReveal(amount = 0.15) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount })
  return { ref, inView }
}
