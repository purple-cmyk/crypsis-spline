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
      {/* Heading */}
      <div className="solution-header">
        <h2>
          Crypsis <span>Solution Architecture</span>
        </h2>
        <p>
          An end-to-end intelligence system designed to detect, analyze, and
          eliminate fake apps, malicious ads, and risky URLs.
        </p>
      </div>

      {/* Spline Diagram */}
      <div className="solution-spline">
        <iframe
          src="https://my.spline.design/webdiagram-FxF73h3VhbF6Q355JH3eiPHH/"
          frameBorder="0"
          title="Solution Diagram"
        />
      </div>

      {/* Steps */}
      <div className="solution-steps">
        {steps.map((step, i) => (
          <div className="solution-card" key={i}>
            <span className="step-number">0{i + 1}</span>
            <h3>{step.title}</h3>
            <p>{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default SolutionPage