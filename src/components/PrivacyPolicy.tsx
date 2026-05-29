import { Link } from 'react-router-dom'

function PrivacyPolicy() {
  return (
    <div className="page-shell">
      <div className="page-frame">
        <div className="page-panel">
          <div className="page-toolbar">
            <Link to="/" className="page-back-btn">
              ← Back to home
            </Link>
            <div className="page-badge">Last updated May 2026</div>
          </div>

          <header className="page-header">
            <p className="page-kicker">Privacy Policy</p>
            <h1 className="page-title">How Crypsis handles your data</h1>
            <p className="page-description">
              We collect and process data to deliver cybersecurity services
              transparently, securely, and in a way that protects your rights.
            </p>
          </header>

          <article className="page-content">
            <section>
              <h2>1. Information We Collect</h2>
              <p>We may collect the following categories of information:</p>
              <ul>
                <li>Personal details such as name, email, phone, and organization.</li>
                <li>Technical data like IP address, browser, operating system, and device identifiers.</li>
                <li>Usage data including pages visited, actions taken, and feature usage.</li>
                <li>Security-specific information required to support threat detection and mitigation.</li>
              </ul>
            </section>

            <section>
              <h2>2. How We Use Your Information</h2>
              <p>We use information to:</p>
              <ul>
                <li>Provide and maintain our services.</li>
                <li>Improve platform performance and user experience.</li>
                <li>Respond to inquiries and support requests.</li>
                <li>Detect, prevent, and investigate security incidents.</li>
                <li>Comply with legal and regulatory obligations.</li>
                <li>Send service-related notifications and updates.</li>
              </ul>
            </section>

            <section>
              <h2>3. Cookies and Tracking Technologies</h2>
              <p>
                We may use cookies and analytics tools to improve website
                performance and understand usage patterns. You can configure your
                browser to reject cookies, but some features may not work as expected.
              </p>
            </section>

            <section>
              <h2>4. Data Sharing and Disclosure</h2>
              <p>We do not sell personal information. We may share information with:</p>
              <ul>
                <li>Trusted service providers who support our operations.</li>
                <li>Legal authorities when required by law.</li>
                <li>Partners or affiliates when necessary to deliver services.</li>
                <li>Successors in the event of merger, acquisition, or restructuring.</li>
              </ul>
            </section>

            <section>
              <h2>5. Data Security</h2>
              <p>
                We implement technical and organizational safeguards to protect
                information from unauthorized access, disclosure, alteration, or destruction.
                No system is completely secure, but we maintain industry-standard controls.
              </p>
            </section>

            <section>
              <h2>6. Data Retention</h2>
              <p>
                We keep information only as long as necessary to fulfill the
                purposes described here, comply with legal obligations, resolve
                disputes, and enforce our agreements.
              </p>
            </section>

            <section>
              <h2>7. Your Rights</h2>
              <p>Depending on your jurisdiction, you may have rights to:</p>
              <ul>
                <li>Access your personal data.</li>
                <li>Correct inaccurate information.</li>
                <li>Delete personal information.</li>
                <li>Restrict or object to processing.</li>
                <li>Request data portability where applicable.</li>
              </ul>
            </section>

            <section>
              <h2>8. Third-Party Services</h2>
              <p>
                Crypsis may contain links to third-party sites or services. We are
                not responsible for their privacy practices, so we encourage you
                to review their privacy policies directly.
              </p>
            </section>

            <section>
              <h2>9. Children’s Privacy</h2>
              <p>
                Our services are not directed toward children under 13, and we do not
                knowingly collect personal information from this age group.
              </p>
            </section>

            <section>
              <h2>10. Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Any changes
                will be posted here with an updated revision date.
              </p>
            </section>

            <section>
              <h2>11. Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy or our data
                practices, please contact us at:
              </p>
              <p>
                <strong>Crypsis</strong>
                <br />
                Email: aryan@crypsis.ai
                <br />
                Website: https://crypsis.ai
              </p>
            </section>
          </article>
        </div>
      </div>
    </div>
  )
}

export default PrivacyPolicy;
