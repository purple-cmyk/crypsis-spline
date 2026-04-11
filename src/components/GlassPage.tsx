function GlassPage() {
  return (
    <section className="glass-page">
      {/* Background Spline */}
      <div className="glass-bg">
        <iframe
          src="https://my.spline.design/waveform-i1QBKR7o9JGuvPOPAtOGARoU/"
          frameBorder="0"
          className="glass-spline"
          title="Waveform Background"
        />
        <div className="glass-overlay" />
      </div>

      {/* Content */}
      <div className="glass-container">
        <h2 className="glass-heading">Our Capabilities</h2>

        <div className="glass-grid">
          {Array.from({ length: 6 }).map((_, i) => (
            <div className="glass-card" key={i}>
              <div className="card-content">
                <h3>Feature {i + 1}</h3>
                <p>
                  This is a sample description showcasing a clean glassmorphic
                  card with subtle blur, depth, and lighting.
                </p>
                <button className="card-btn">Learn More</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default GlassPage