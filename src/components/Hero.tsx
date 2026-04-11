function Hero() {
  return (
    <main className="hero" id="home">
      <div className="hero-dotfield" />
      <div className="hero-vignette" />
      <div className="hero-noise" />
      <div className="hero-purple-haze" />

      <div className="hero-inner">
        <div className="hero-left">
          <h1 className="hero-title">
            We’re
            <br />
            Building
            <br />
            Cool
            <br />
            Experiences
          </h1>

          <div className="hero-tags">
            <span>WEB3</span>
            <span>\</span>
            <span>UI</span>
            <span>\</span>
            <span>3D</span>
            <span>\</span>
            <span>MOTION</span>
          </div>
        </div>

        <div className="hero-right">
          <p className="hero-copy">
            Crafting awesome stories and kinetic digital products with immersive
            interfaces, visual depth, and refined motion systems for modern brands.
          </p>

          <div className="hero-actions">
            <button className="hero-btn hero-btn-secondary">Contact Us</button>
            <button className="hero-btn hero-btn-primary">Get Started</button>
          </div>
        </div>
      </div>

      <div className="hero-spline-wrap" aria-hidden="true">
        <div className="hero-spline-glow" />
        <iframe
          className="hero-spline"
          src="https://my.spline.design/noisyglasscube-Osr20WHifvjZjIjBVQgIjS5H/"
          frameBorder="0"
          title="Noisy Glass Cube"
        />
        <div className="spline-badge-mask" />
      </div>
    </main>
  )
}

export default Hero