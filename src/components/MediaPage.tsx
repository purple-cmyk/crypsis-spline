function MediaPage() {
  const mediaItems = [
    {
      title: "Crypsis",
      caption: "Media Spotlight",
      desc: "Crypsis is our flagship media story, showing how the platform identifies fake apps, malicious ads, and high-risk URLs before they can harm users.",
      highlights: [
        "Trusted threat intelligence and evidence-backed monitoring.",
        "A strong brand narrative for partners, regulators, and users.",
        "Focused on visibility for Crypsis in the broader media landscape.",
      ],
    },
  ]

  return (
    <section className="media-page" id="media">
      <div className="glass-container">
        <div className="glass-header">
          <span className="glass-kicker">Media</span>
          <h2 className="glass-heading">Crypsis</h2>
          <p className="glass-subtext">
            A dedicated media section for Crypsis, highlighting our platform's mission and brand story in the fight against fake digital threats.
          </p>
        </div>

        <div className="glass-grid">
          {mediaItems.map((item) => (
            <article className="glass-card" key={item.title}>
              <div className="glass-card-borderbeam" />
              <div className="glass-card-aurora" />
              <div className="glass-card-blurspot" />
              <div className="glass-card-sheen" />
              <div className="card-content">
                <span className="glass-card-index">01</span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <ul>
                  {item.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MediaPage;
