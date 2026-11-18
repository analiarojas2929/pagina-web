import { motion, useReducedMotion } from 'framer-motion'

const SectionTitle = ({ eyebrow, title, description, align = 'center' }) => {
  const reduceMotion = useReducedMotion()
  return (
    <motion.div
      className={`section-title ${align === 'left' ? 'section-title-left' : ''}`}
      initial={reduceMotion ? false : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
    >
      <span className="section-title-eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </motion.div>
  )
}

export default SectionTitle
