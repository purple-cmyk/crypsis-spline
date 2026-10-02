function GlassPage() {
  const features = [
    {
      title: "Fake & Clone Apps",
      desc: "Fake & clone apps installed on user devices pose a significant national security threat.",
    },
    {
      title: "Spam/Scam Ads",
      desc: "Malicious ads running on popular platforms often bypass protection mechanisms and exploit users.",
    },
    {
      title: "Fake/Clone URLs",
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
    <section className="glass-page" id="glass-page">
      <div className="glass-bg">
        <div className="glass-grid-pattern" />
        <div className="glass-ambient glass-ambient-1" />
        <div className="glass-ambient glass-ambient-2" />
        <div className="glass-ambient glass-ambient-3" />
        <div className="glass-center-glow" />
        <div className="glass-overlay" />
      </div>

      <div className="glass-container">
        <div className="glass-header">
          <span className="glass-kicker">Threat Landscape</span>
          <h2 className="glass-heading">Problems We Address</h2>
          <p className="glass-subtext">
            Crypsis identifies high-risk digital surfaces across apps, ads, URLs,
            and privacy attack vectors before they impact users at scale.
          </p>
        </div>

        <div className="glass-grid">
          {features.map((feature, i) => (
            <article className="glass-card" key={i}>
              <div className="glass-card-borderbeam" />
              <div className="glass-card-aurora" />
              <div className="glass-card-blurspot" />
              <div className="glass-card-sheen" />
              <div className="card-content">
                <span className="glass-card-index">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </div>
            </article>
          ))}
        </div>

       

      </div>
    </section>
  )
}

export default GlassPage;