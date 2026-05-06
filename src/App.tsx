import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import GlassPage from './components/GlassPage'
import MediaPage from './components/MediaPage'
import SolutionPage from './components/SolutionPage'
import AboutUs from './components/AboutUs'
import Footer from './components/Footer'
import PrivacyPolicy from './components/PrivacyPolicy'
import TermsOfService from './components/TermsOfService'

function App() {
  return (
    <Router>
      <div className="background-glow"></div>
      <div className="background-noise"></div>
      <div className="background-dots"></div>
      <div className="background-vignette"></div>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Hero />
              <GlassPage />
              <MediaPage />
              <SolutionPage />
              <AboutUs />
              <Footer />
            </>
          }
        />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
      </Routes>
    </Router>
  )
}

export default App