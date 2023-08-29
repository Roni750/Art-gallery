import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { Footer } from './components/footer'
import { Index } from './views'
import { ImageDetails } from './views/image-details'

function App() {

  return (
    <Router>
      <section className="main-layout">
        <main>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="image/:imageId" element={<ImageDetails />} />
          </Routes>
        </main>
        <Footer />
      </section>
    </Router>
  )
}

export default App