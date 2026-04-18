function SolutionPage() {
  const steps = [
    {
      title: "Data Ingestion",
      desc: "Collect signals from apps, ads, and URLs across multiple sources in real time.",
    },
    {
      title: "Central Intelligence",
      desc: "All signals are processed and stored in a unified repository for correlation and analysis.",
    },
    {
      title: "Detection Engines",
      desc: "AI-driven systems identify fake apps, malicious ads, and risky URLs.",
    },
    {
      title: "Continuous Learning",
      desc: "Each detection strengthens the system, enabling faster and more accurate future threat identification.",
    },
  ]

  return (
    <section className="solution-page">
      <div className="solution-bg">
        <div className="solution-grid-pattern" />
        <div className="solution-ambient solution-ambient-1" />
        <div className="solution-ambient solution-ambient-2" />
        <div className="solution-center-glow" />
        <div className="solution-overlay" />
      </div>

      <div className="solution-header">
        <span className="solution-kicker">Architecture</span>
        <h2>
          Crypsis <span>Solution Architecture</span>
        </h2>
        <p>
          An end-to-end intelligence system designed to detect, analyze, and
          eliminate fake apps, malicious ads, and risky URLs.
        </p>
      </div>

      <div className="solution-spline-wrap">
        <div className="solution-spline">
          <iframe
            src="https://my.spline.design/webdiagram-FxF73h3VhbF6Q355JH3eiPHH/"
            frameBorder="0"
            title="Solution Diagram"
          />
        </div>
      </div>

      <div className="solution-steps">
        {steps.map((step, i) => (
          <article className="solution-card" key={i}>
            <div className="solution-card-borderbeam" />
            <div className="solution-card-aurora" />
            <div className="solution-card-blurspot" />
            <div className="solution-card-sheen" />

            <div className="solution-card-content">
              <span className="step-number">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default SolutionPage