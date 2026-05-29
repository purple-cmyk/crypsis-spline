import { Link } from 'react-router-dom'

function TermsOfService() {
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
            <p className="page-kicker">Terms of Service</p>
            <h1 className="page-title">How Crypsis is meant to be used</h1>
            <p className="page-description">
              These Terms govern your access to Crypsis web pages, products,
              applications, and cybersecurity services. They set the rules for
              safe and responsible use of our platform.
            </p>
          </header>

          <article className="page-content">
            <section>
              <h2>1. Acceptance of Terms</h2>
              <p>
                By accessing or using Crypsis, you confirm that you have read,
                understood, and agree to comply with these Terms and all
                applicable laws and regulations.
              </p>
            </section>

            <section>
              <h2>2. Description of Services</h2>
              <p>
                Crypsis provides cybersecurity capabilities to detect and mitigate
                cloned, fake, and malicious applications, helping organizations
                protect digital trust.
              </p>
              <ul>
                <li>Clone and fake application detection.</li>
                <li>Threat intelligence and monitoring.</li>
                <li>Digital trust and brand protection services.</li>
                <li>Security analysis and reporting.</li>
                <li>Related cybersecurity solutions and tools.</li>
              </ul>
            </section>

            <section>
              <h2>3. User Responsibilities</h2>
              <p>You agree not to:</p>
              <ul>
                <li>Use Crypsis for unlawful or malicious purposes.</li>
                <li>Attempt to gain unauthorized access to systems or networks.</li>
                <li>Interfere with or disrupt the Services.</li>
                <li>Upload malicious code, malware, or harmful content.</li>
                <li>Misrepresent your identity or affiliation.</li>
                <li>Violate applicable laws or regulations.</li>
              </ul>
            </section>

            <section>
              <h2>4. Account Security</h2>
              <p>
                If you create an account, you are responsible for maintaining the
                confidentiality of your credentials and for all activity that
                occurs under your account.
              </p>
            </section>

            <section>
              <h2>5. Intellectual Property</h2>
              <p>
                All content, software, trademarks, logos, branding, text,
                graphics, and other materials provided through Crypsis are owned
                by Crypsis or its licensors and protected by applicable law.
              </p>
              <p>
                You may not copy, modify, distribute, reverse engineer, or create
                derivative works from our Services without prior written
                permission.
              </p>
            </section>

            <section>
              <h2>6. Third-Party Services</h2>
              <p>
                Crypsis may contain links to third-party websites or services. We
                do not control and are not responsible for their content,
                privacy practices, or policies.
              </p>
            </section>

            <section>
              <h2>7. Service Availability</h2>
              <p>
                We strive for reliable service, but we cannot guarantee
                uninterrupted availability. Services may be modified, suspended,
                or discontinued at any time without prior notice.
              </p>
            </section>

            <section>
              <h2>8. Disclaimer of Warranties</h2>
              <p>
                Crypsis is provided on an “AS IS” and “AS AVAILABLE” basis. We
                make no warranties, express or implied, regarding reliability,
                accuracy, availability, or suitability.
              </p>
              <p>
                While Crypsis aims to identify cybersecurity threats and harmful
                activity, no security solution can guarantee detection of every
                threat.
              </p>
            </section>

            <section>
              <h2>9. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, Crypsis will not be
                liable for indirect, incidental, special, consequential, or
                punitive damages, including loss of profits, revenue, data,
                goodwill, or business opportunities.
              </p>
            </section>

            <section>
              <h2>10. Indemnification</h2>
              <p>
                You agree to defend, indemnify, and hold harmless Crypsis, its
                directors, employees, partners, and affiliates from claims or
                losses arising from your use of the Services or violation of these
                Terms.
              </p>
            </section>

            <section>
              <h2>11. Termination</h2>
              <p>
                We may suspend or terminate access to the Services if we believe
                you have violated these Terms or applicable law.
              </p>
            </section>

            <section>
              <h2>12. Privacy</h2>
              <p>
                Your use of Crypsis is also governed by our Privacy Policy, which
                explains how we collect, use, and protect your information.
              </p>
            </section>

            <section>
              <h2>13. Governing Law</h2>
              <p>
                These Terms are governed by the laws of India, without regard to
                conflict of law principles.
              </p>
            </section>

            <section>
              <h2>14. Changes to These Terms</h2>
              <p>
                We may update these Terms from time to time. Continued use after
                changes constitutes acceptance of the revised Terms.
              </p>
            </section>

            <section>
              <h2>15. Contact Information</h2>
              <p>
                For questions regarding these Terms, please contact:
              </p>
              <p>
                <strong>Crypsis</strong>
                <br />
                Email: contact@crypsis.ai
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

export default TermsOfService;
