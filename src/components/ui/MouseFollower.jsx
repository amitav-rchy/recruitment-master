import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function MouseFollower() {
  const [visible, setVisible] = useState(false)
  const [hovered, setHovered] = useState(false)
  const [isTouch, setIsTouch] = useState(true)

  const x = useMotionValue(-200)
  const y = useMotionValue(-200)

  const blobX = useSpring(x, { stiffness: 110, damping: 26, mass: 0.6 })
  const blobY = useSpring(y, { stiffness: 110, damping: 26, mass: 0.6 })

  const ringX = useSpring(x, { stiffness: 320, damping: 22 })
  const ringY = useSpring(y, { stiffness: 320, damping: 22 })

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return
    setIsTouch(false)

    const onMove = (e) => { x.set(e.clientX); y.set(e.clientY); setVisible(true) }
    const onLeave = () => setVisible(false)
    const onEnter = () => setVisible(true)
    const onOver = (e) => {
      setHovered(!!e.target.closest('a, button, [role="button"], input, textarea, select'))
    }

    window.addEventListener('mousemove', onMove)
    document.addEventListener('mouseleave', onLeave)
    document.addEventListener('mouseenter', onEnter)
    window.addEventListener('mouseover', onOver)
    return () => {
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseleave', onLeave)
      document.removeEventListener('mouseenter', onEnter)
      window.removeEventListener('mouseover', onOver)
    }
  }, [x, y])

  if (isTouch) return null

  return (
    <>
      {/* Glow blob — lagging behind */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9996] rounded-full"
        style={{
          x: blobX,
          y: blobY,
          translateX: '-50%',
          translateY: '-50%',
          background: 'radial-gradient(circle, rgba(73,160,199,0.28) 0%, rgba(73,160,199,0.04) 65%, transparent 100%)',
          filter: 'blur(12px)',
        }}
        animate={{
          opacity: visible ? 1 : 0,
          width: hovered ? 80 : 56,
          height: hovered ? 80 : 56,
        }}
        transition={{ opacity: { duration: 0.2 }, width: { duration: 0.25 }, height: { duration: 0.25 } }}
      />

      {/* Ring — snappy follower */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9997] rounded-full"
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
          border: '1.5px solid rgba(73,160,199,0.5)',
        }}
        animate={{
          opacity: visible ? 1 : 0,
          width: hovered ? 44 : 28,
          height: hovered ? 44 : 28,
          borderColor: hovered ? 'rgba(73,160,199,0.8)' : 'rgba(73,160,199,0.5)',
        }}
        transition={{ opacity: { duration: 0.15 }, width: { duration: 0.2 }, height: { duration: 0.2 } }}
      />

      {/* Precise center dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] rounded-full"
        style={{
          x,
          y,
          translateX: '-50%',
          translateY: '-50%',
          width: 5,
          height: 5,
          background: '#49A0C7',
        }}
        animate={{ opacity: visible && !hovered ? 0.9 : 0 }}
        transition={{ duration: 0.12 }}
      />
    </>
  )
}
