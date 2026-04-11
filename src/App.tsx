import Navbar from './components/Navbar'
import Hero from './components/Hero'
import GlassPage from './components/GlassPage'

function App() {
  return (
    <div className="page-shell">
      <div className="page-frame">
        <Navbar />
        <Hero />
        <GlassPage />
      </div>
    </div>
  )
}

export default App