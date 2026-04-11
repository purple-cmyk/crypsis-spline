function GlassPage() {
  const features = [
    {
      title: "Fake & Clone Apps",
      desc: "Fake & clone apps installed on user devices pose a significant national security threat.",
    },
    {
      title: "Problematic Ads",
      desc: "Malicious ads running on popular platforms often bypass protection mechanisms and exploit users.",
    },
    {
      title: "Problematic URLs",
      desc: "Banned or high-risk URLs such as real money gaming platforms need stricter monitoring and control.",
    },
    {
      title: "Data Privacy Risks",
      desc: "Unauthorized data collection and tracking mechanisms compromise user privacy and sensitive information.",
    },
    {
      title: "Phishing Attacks",
      desc: "Deceptive interfaces and links are used to steal user credentials and financial information at scale.",
    },
    {
      title: "Unverified Applications",
      desc: "Apps without proper verification can introduce malware, spyware, or hidden vulnerabilities into devices.",
    },
  ]

  return (
    <section className="glass-page">
      <div className="glass-bg">
        <div className="wave-layer wave-1" />
        <div className="wave-layer wave-2" />
        <div className="wave-layer wave-3" />
        <div className="wave-glow wave-glow-1" />
        <div className="wave-glow wave-glow-2" />
        <div className="glass-overlay" />
        <div className="glass-noise" />
      </div>

      <div className="glass-container">
        <h2 className="glass-heading">PROBLEM</h2>

        <div className="glass-grid">
          {features.map((feature, i) => (
            <div className="glass-card" key={i}>
              <div className="card-content">
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default GlassPage