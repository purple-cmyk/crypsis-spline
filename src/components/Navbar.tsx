import { useEffect, useState } from "react"
import { scrollToSection } from "../utils/scrollTo"

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
      <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home') }} className="navbar-brand">
        <img
          src="/crypsis_logo.svg"
          alt="Crypsis"
          className="navbar-logo"
        />
        <span className="navbar-title">CRYPSIS</span>
      </a>

      {/* CENTER NAV */}
      <nav className="navbar-center">
        <button onClick={() => scrollToSection('glass-page')} className="nav-link">NEED</button>
        <button onClick={() => scrollToSection('solution-page')} className="nav-link">SOLUTION</button>
        <button onClick={() => scrollToSection('about-us')} className="nav-link">ABOUT US</button>
      </nav>

      {/* ACTION */}
      <div className="navbar-actions">
        <button onClick={() => scrollToSection('footer')} className="talk-btn">CONTACT US</button>
      </div>

    </header>
  )
}

export default Navbar