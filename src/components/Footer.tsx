function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* LEFT */}
        <div className="footer-left">
          <h3 className="footer-logo">Crypsis</h3>
          <p className="footer-desc">
            Protecting users and enterprises from fake apps, malicious ads, and
            digital impersonation through intelligent detection systems.
          </p>
        </div>

        {/* CENTER */}
        <div className="footer-links">
          <div>
            <h4>Product</h4>
            <a href="#">Solution</a>
            <a href="#">Features</a>
            <a href="#">Security</a>
          </div>

          <div>
            <h4>Company</h4>
            <a href="#">About</a>
            <a href="#">Careers</a>
            <a href="#">Contact</a>
          </div>

          <div>
            <h4>Resources</h4>
            <a href="#">Docs</a>
            <a href="#">Blog</a>
            <a href="#">Support</a>
          </div>
        </div>

        {/* RIGHT */}
        <div className="footer-right">
          <h4>Stay Updated</h4>
          <div className="footer-input">
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Crypsis. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer