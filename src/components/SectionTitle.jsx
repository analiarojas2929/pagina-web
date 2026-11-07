const SectionTitle = ({ eyebrow, title, description }) => {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center">
      <span className="inline-flex items-center rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
        {eyebrow}
      </span>
      <h2 className="mt-5 text-3xl font-bold tracking-tight text-white md:text-4xl">{title}</h2>
      {description && <p className="mt-4 text-base text-slate-300 md:text-lg">{description}</p>}
    </div>
  )
}

export default SectionTitle
