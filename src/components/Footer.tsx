import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-cta-card">
        <div className="footer-cta-header">
          <h2>
            Are you ready to <span>protect your brand?</span>
          </h2>
          <p>
            Join the fight against fake apps, malicious ads, and deceptive URLs.
            To get started, reach out to us directly or connect with our team.
          </p>
        </div>

        <div className="footer-cta-content">
          <div className="footer-contact-list">
            <div className="footer-contact-box">
              <div className="footer-contact-icon">📞</div>
              <div>
                <span>Call Us</span>
                <p>+91 9650784785</p>
              </div>
            </div>

            <div className="footer-contact-box">
              <div className="footer-contact-icon">✉️</div>
              <div>
                <span>Email Us</span>
                <p>aryan@crypsis.in</p>
              </div>
            </div>
          </div>

          <div className="footer-or">OR</div>

          <div className="footer-cta-action">
            <p>Reach out and we’ll help you secure your digital ecosystem.</p>
            <button className="footer-cta-button">Get Started Now</button>
          </div>
        </div>

        <div className="footer-cta-note">
          Our team is ready to help you detect and prevent fake apps, malicious
          ads, and brand impersonation threats.
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