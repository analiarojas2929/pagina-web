import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion'
import { ArrowUpRight, Code2, Sparkles } from 'lucide-react'

export default function HeroVisual() {
  const reduceMotion = useReducedMotion()
  const pointerX = useMotionValue(0)
  const pointerY = useMotionValue(0)
  const rotateX = useSpring(pointerX, { stiffness: 110, damping: 22 })
  const rotateY = useSpring(pointerY, { stiffness: 110, damping: 22 })

  const resetTilt = () => {
    pointerX.set(0)
    pointerY.set(0)
  }

  const handlePointerMove = (event) => {
    if (reduceMotion || event.pointerType !== 'mouse') return
    const bounds = event.currentTarget.getBoundingClientRect()
    pointerX.set((0.5 - (event.clientY - bounds.top) / bounds.height) * 9)
    pointerY.set(((event.clientX - bounds.left) / bounds.width - 0.5) * 11)
  }

  return (
    <motion.div
      className="hero-visual"
      initial={reduceMotion ? false : { opacity: 0, y: 28, scale: 0.94 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.9, delay: 0.2 }}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetTilt}
      onPointerCancel={resetTilt}
      aria-hidden="true"
    >
      <div className="hero-orbit hero-orbit-outer"><i /></div>
      <div className="hero-orbit hero-orbit-inner"><i /></div>
      <span className="hero-orbit-spark"><Sparkles size={19} /></span>
      <motion.div className="hero-tilt-stage" style={reduceMotion ? undefined : { rotateX, rotateY }}>
        <div className="hero-card">
          <div className="hero-card-top">
            <div className="hero-card-brand"><span>A&amp;D</span> DIGITAL STUDIO</div>
            <div className="hero-card-menu"><i /><i /><i /></div>
          </div>
          <div className="hero-card-body">
            <span className="hero-card-kicker">IDEA · ESTRATEGIA · DESARROLLO</span>
            <div className="hero-card-heading">Tu próximo<br /><b>proyecto digital.</b></div>
            <div className="hero-card-subline" />
            <div className="hero-card-button">Hablemos <ArrowUpRight size={13} /></div>
            <div className="hero-design-trail"><i /><i /><i /></div>
          </div>
          <div className="hero-card-footer">
            <span>A&amp;D DIGITAL</span><span>TECNOLOGÍA A MEDIDA</span>
          </div>
          <div className="hero-card-shine" />
        </div>
        <div className="hero-float-card"><span><Code2 size={16} /></span> Tecnología para impulsar tus ideas</div>
      </motion.div>
    </motion.div>
  )
}
