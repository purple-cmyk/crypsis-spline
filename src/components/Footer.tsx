import { Link } from "react-router-dom"

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-cta-card">
        <div className="footer-cta-header">
          <span className="footer-label">Contact Us</span>

          <h2>
            Are you ready to <span>protect your brand?</span>
          </h2>

          <p>
            Join the fight against fake apps, malicious ads, and deceptive URLs.
            Reach out to us directly or connect with our team.
          </p>
        </div>

        <div className="footer-cta-content">
          <div className="footer-contact-list">
            <div className="footer-contact-box">
              <span className="footer-card-number">01</span>
              <h3>Call Us</h3>
              <p>+91 9650784785</p>
            </div>

            <div className="footer-contact-box">
              <span className="footer-card-number">02</span>
              <h3>Email Us</h3>
              <p>aryan@crypsis.in</p>
            </div>
          </div>

          <div className="footer-cta-action">
            <div className="footer-action-card">
              <span className="footer-card-number">03</span>
              <h3>Get Started</h3>
              <p>Reach out and secure your digital ecosystem.</p>
              <button className="footer-cta-button">Get Started</button>
            </div>
          </div>
        </div>

        <div className="footer-cta-note">
          Our team helps detect and prevent fake apps, malicious ads, and brand
          impersonation threats.
        </div>
      </div>

      <div className="footer-bottom-bar">
        <div className="footer-brand-block">
          <h3>Crypsis</h3>
          <p>
            Protecting users and enterprises through intelligent detection,
            continuous monitoring, and centralized threat intelligence.
          </p>
        </div>

        <div className="footer-bottom-row">
          <p>© {new Date().getFullYear()} Crypsis. All rights reserved.</p>

          <div className="footer-legal-links">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-of-service">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer