import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LandingPage } from './pages/LandingPage'
import { DocsPage } from './pages/DocsPage'
import { BlogPage } from './pages/BlogPage'
import { ClaimPage } from './pages/ClaimPage'
import { ScrollToTop } from './components/ScrollToTop'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/docs/*" element={<DocsPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/0x" element={<ClaimPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
