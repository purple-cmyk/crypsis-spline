function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-brand">
        <a href="#home" className="nav-link brand">
          CRYPSIS
        </a>
      </div>

      <nav className="navbar-center" aria-label="Primary">
        <a href="#cases" className="nav-link">
          NEED
        </a>
        <a href="#library" className="nav-link">
          SOLUTION
        </a>
        <a href="#resources" className="nav-link">
          ABOUT US
        </a>
      </nav>

      <div className="navbar-actions">
        <button className="talk-btn">Talk</button>
      </div>
    </header>
  )
}

export default Navbar