import { useState } from 'react'

export default function BrandLogo({
  className = '',
  compact = false,
  variant = 'horizontal',
  width,
  height,
  loading = 'eager',
  showFallbackText = true,
}) {
  const [logoAvailable, setLogoAvailable] = useState(true)

  if (!logoAvailable) {
    return (
      <span
        className={`brand-logo brand-logo-fallback ${compact ? 'brand-logo-compact' : ''} ${className}`.trim()}
        aria-label="A&D DIGITAL"
        role="img"
      >
        {showFallbackText && <strong>A&amp;D <span>DIGITAL</span></strong>}
      </span>
    )
  }

  const logoSources = {
    horizontal: '/assets/logo-ayd-digital-horizontal.png',
    dark: '/assets/logo-ayd-digital-dark.png',
    full: '/assets/logo-ayd-digital-transparent.png',
  }

  return (
    <img
      className={`brand-logo ${compact ? 'brand-logo-compact' : ''} ${className}`.trim()}
      src={`${logoSources[variant] || logoSources.horizontal}?v=3`}
      alt="A&D DIGITAL"
      width={width || (variant === 'full' ? 120 : 220)}
      height={height || (variant === 'full' ? 120 : 68)}
      loading={loading}
      decoding="async"
      onError={() => setLogoAvailable(false)}
    />
  )
}
