const SectionTitle = ({ eyebrow, title, description, align = 'center' }) => {
  return (
    <div className={`section-title ${align === 'left' ? 'section-title-left' : ''}`}>
      <span className="section-title-eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  )
}

export default SectionTitle
