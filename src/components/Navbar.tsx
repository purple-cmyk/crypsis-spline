import { useEffect, useState } from "react"

function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>

      {/* BRAND */}
      <a href="#home" className="navbar-brand">
        <img
          src="/crypsis_logo.svg"
          alt="Crypsis"
          className="navbar-logo"
        />
        <span className="navbar-title">CRYPSIS</span>
      </a>

      {/* CENTER NAV */}
      <nav className="navbar-center">
        <a href="#cases" className="nav-link">NEED</a>
        <a href="#library" className="nav-link">SOLUTION</a>
        <a href="#resources" className="nav-link">ABOUT US</a>
      </nav>

      {/* ACTION */}
      <div className="navbar-actions">
        <button className="talk-btn">CONTACT US</button>
      </div>

    </header>
  )
}

export default Navbar