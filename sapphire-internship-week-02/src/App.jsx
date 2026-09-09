import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <div style={{ fontFamily: 'sans-serif', padding: '20px' }}>
      <header>
        <h2>Sapphire Internship Week 02</h2>
        <nav style={{ display: 'flex', gap: '15px', marginBottom: '20px' }}>
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
        </nav>
      </header>

      <hr />

      <main style={{ marginTop: '20px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  )
}