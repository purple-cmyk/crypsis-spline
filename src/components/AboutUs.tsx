function AboutUs() {
  const items = [
    {
      title: "Mission",
      desc: "To build a unified intelligence layer that protects users and organizations from evolving digital threats.",
    },
    {
      title: "Vision",
      desc: "To create a secure digital ecosystem where trust, authenticity, and safety are guaranteed.",
    },
    {
      title: "Approach",
      desc: "Leveraging AI-driven detection, real-time monitoring, and continuous learning to stay ahead of emerging threats.",
    },
  ]

  return (
    <section className="about-page" id="about-us">
      <div className="about-bg">
        <div className="about-grid-pattern" />
        <div className="about-ambient about-ambient-1" />
        <div className="about-ambient about-ambient-2" />
        <div className="about-center-glow" />
        <div className="about-overlay" />
      </div>

      <div className="about-container">
        <div className="about-left">
          <span className="about-kicker">Who We Are</span>

          <h2 className="about-heading">
            About <span>Crypsis</span>
          </h2>

          <p className="about-desc">
            Crypsis is an end-to-end platform addressing the fake and clone app
            ecosystem, supporting government agencies and enterprises facing
            brand impersonation threats.
          </p>

          <p className="about-desc secondary">
            By combining intelligent detection systems with centralized
            intelligence, Crypsis continuously identifies, analyzes, and
            eliminates malicious digital threats across apps, ads, and URLs.
          </p>
        </div>

        <div className="about-right">
          {items.map((item, i) => (
            <article className="about-card" key={i}>
              <div className="about-card-borderbeam" />
              <div className="about-card-aurora" />
              <div className="about-card-blurspot" />
              <div className="about-card-sheen" />

              <div className="about-card-content">
                <span className="about-card-index">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutUs