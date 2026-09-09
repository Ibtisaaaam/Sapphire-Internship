import { Routes, Route, Link, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail'
import NotFound from './pages/NotFound'
import { ThemeProvider, useTheme } from './context/ThemeContext'

function Navbar() {
  const { darkMode, toggleTheme } = useTheme()
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '16px 40px',
      borderBottom: darkMode ? '1px solid #1e293b' : '1px solid #e2e8f0',
      backgroundColor: darkMode ? 'rgba(11, 15, 23, 0.8)' : 'rgba(248, 250, 252, 0.8)',
      backdropFilter: 'blur(12px)',
      position: 'sticky',
      top: 0,
      zIndex: 1000
    }}>
      <div style={{ display: 'flex', gap: '35px', alignItems: 'center' }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{
            width: '28px',
            height: '28px',
            borderRadius: '8px',
            background: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            fontWeight: '800',
            fontSize: '14px'
          }}>S</div>
          <span style={{ fontSize: '20px', fontWeight: '800', letterSpacing: '-0.5px' }}>
            Sapphire
          </span>
        </Link>

        <div style={{ display: 'flex', gap: '20px' }}>
          <Link 
            to="/" 
            style={{ 
              fontWeight: '600',
              fontSize: '14px',
              color: isActive('/') ? '#6366f1' : (darkMode ? '#94a3b8' : '#64748b')
            }}
          >
            Home
          </Link>
          <Link 
            to="/products" 
            style={{ 
              fontWeight: '600',
              fontSize: '14px',
              color: isActive('/products') ? '#6366f1' : (darkMode ? '#94a3b8' : '#64748b')
            }}
          >
            Products
          </Link>
        </div>
      </div>

      <button 
        onClick={toggleTheme} 
        style={{
          cursor: 'pointer',
          padding: '8px 16px',
          borderRadius: '20px',
          border: darkMode ? '1px solid #334155' : '1px solid #cbd5e1',
          backgroundColor: darkMode ? '#1e293b' : '#ffffff',
          color: darkMode ? '#f8fafc' : '#0f172a',
          fontWeight: '600',
          fontSize: '13px',
          display: 'flex',
          alignItems: 'center',
          gap: '6px'
        }}
      >
        {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
      </button>
    </nav>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <div style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </ThemeProvider>
  )
}