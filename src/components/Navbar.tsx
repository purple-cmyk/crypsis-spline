import { useEffect, useState } from "react"

function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 40
      setScrolled(isScrolled)
    }

    handleScroll() // run once on mount

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      
      <div className="navbar-brand">
        <a href="#home" className="nav-link brand">
          CRYPSIS
        </a>
      </div>

      <nav className="navbar-center">
        <a href="#cases" className="nav-link">NEED</a>
        <a href="#library" className="nav-link">SOLUTION</a>
        <a href="#resources" className="nav-link">ABOUT US</a>
      </nav>

      <div className="navbar-actions">
        <button className="talk-btn">CONTACT US</button>
      </div>

    </header>
  )
}

export default Navbar