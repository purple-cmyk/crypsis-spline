import { useState, useEffect, useRef } from 'react'

function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const iframeRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (iframeRef.current) {
      observer.observe(iframeRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <main className="hero" id="home">
      <div className="hero-dotfield" />
      <div className="hero-vignette" />
      <div className="hero-noise" />
      <div className="hero-purple-haze" />

      <div className="hero-inner">
        <div className="hero-left">
          <h1 className="hero-title">
            Saving
            <br />
            India
            <br />
            From
            <br />
            CyberFrauds
          </h1>

          <div className="hero-tags">
            <span>SECURITY</span>
            <span>\</span>
            <span>TRINETR-I</span>
            <span>\</span>
            <span>SOLUTIONS</span>
            <span>\</span>
            <span>DEKUSION AI</span>
          </div>
        </div>

        <div className="hero-right">
          <p className="hero-copy">
            Crypsis is an end-to-end platform tackling the fake and clone app ecosystem, serving government agencies and enterprises facing brand impersonation.
          </p>

          <div className="hero-actions">
            <button className="hero-btn hero-btn-secondary">Contact Us</button>
            <button className="hero-btn hero-btn-primary">Get Started</button>
          </div>
        </div>
      </div>

      <div className="hero-spline-wrap" aria-hidden="true">
        <div className="hero-spline-glow" />
        {isVisible ? (
          <iframe
            ref={iframeRef}
            className="hero-spline"
            src="https://my.spline.design/noisyglasscube-Osr20WHifvjZjIjBVQgIjS5H/"
            frameBorder="0"
            title="Noisy Glass Cube"
          />
        ) : (
          <div
            ref={iframeRef}
            className="hero-spline"
            style={{ background: 'linear-gradient(135deg, rgba(177, 146, 255, 0.1), rgba(255, 255, 255, 0.05))' }}
          />
        )}
        <div className="spline-badge-mask" />
      </div>
    </main>
  )
}

export default Hero