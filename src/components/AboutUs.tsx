function AboutUs() {
  return (
    <section className="about-page">
      <div className="about-container">
        {/* LEFT SIDE */}
        <div className="about-left">
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

        {/* RIGHT SIDE */}
        <div className="about-right">
          <div className="about-card">
            <h3>Mission</h3>
            <p>
              To build a unified intelligence layer that protects users and
              organizations from evolving digital threats.
            </p>
          </div>

          <div className="about-card">
            <h3>Vision</h3>
            <p>
              To create a secure digital ecosystem where trust, authenticity,
              and safety are guaranteed.
            </p>
          </div>

          <div className="about-card">
            <h3>Approach</h3>
            <p>
              Leveraging AI-driven detection, real-time monitoring, and
              continuous learning to stay ahead of emerging threats.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs