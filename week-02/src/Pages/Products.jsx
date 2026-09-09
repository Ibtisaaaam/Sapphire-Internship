import { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import axios from 'axios'
import { useTheme } from '../context/ThemeContext'

export default function Products() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  
  const [searchParams, setSearchParams] = useSearchParams()
  const searchQuery = searchParams.get('q') || ''

  const navigate = useNavigate()
  const { darkMode } = useTheme()

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then((response) => {
        setProducts(response.data)
        setLoading(false)
      })
      .catch((err) => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  const filteredProducts = products.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  )

  if (loading) return <div style={{ textAlign: 'center', padding: '80px 0' }}><h3>Loading catalog items...</h3></div>
  if (error) return <div style={{ textAlign: 'center', padding: '80px 0', color: '#ef4444' }}><h3>Error loading catalog: {error}</h3></div>

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px', flexWrap: 'wrap', gap: '20px' }}>
        <div>
          <h1 style={{ fontSize: '32px', fontWeight: '800', letterSpacing: '-0.5px', marginBottom: '6px' }}>Store Catalog</h1>
          <p style={{ fontSize: '14px', color: darkMode ? '#94a3b8' : '#64748b' }}>Live inventory fetched from FakeStore API</p>
        </div>

        <input
          type="text"
          placeholder="🔍 Search products..."
          value={searchQuery}
          onChange={(e) => setSearchParams(e.target.value ? { q: e.target.value } : {})}
          style={{
            padding: '12px 20px',
            width: '320px',
            borderRadius: '12px',
            border: darkMode ? '1px solid #334155' : '1px solid #cbd5e1',
            outline: 'none',
            fontSize: '14px',
            backgroundColor: darkMode ? '#111827' : '#ffffff',
            color: darkMode ? '#f8fafc' : '#0f172a'
          }}
        />
      </div>

      {filteredProducts.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '80px 0', color: darkMode ? '#94a3b8' : '#64748b' }}>
          <h3>No products match your query "{searchQuery}"</h3>
        </div>
      ) : (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
          gap: '24px'
        }}>
          {filteredProducts.map((product) => (
            <div key={product.id} style={{
              border: darkMode ? '1px solid #1e293b' : '1px solid #e2e8f0',
              borderRadius: '16px',
              padding: '20px',
              backgroundColor: darkMode ? '#111827' : '#ffffff',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              boxShadow: darkMode ? '0 4px 15px rgba(0,0,0,0.2)' : '0 4px 15px rgba(0,0,0,0.03)'
            }}>
              <div>
                <div style={{ background: '#ffffff', borderRadius: '12px', padding: '20px', marginBottom: '16px', textAlign: 'center' }}>
                  <img src={product.image} alt={product.title} style={{ height: '140px', maxWidth: '100%', objectFit: 'contain' }} />
                </div>
                <span style={{ fontSize: '11px', textTransform: 'uppercase', color: '#6366f1', fontWeight: '800', letterSpacing: '0.5px' }}>
                  {product.category}
                </span>
                <h4 style={{ fontSize: '15px', fontWeight: '700', margin: '8px 0', lineHeight: '1.4' }}>
                  {product.title.length > 35 ? product.title.slice(0, 35) + '...' : product.title}
                </h4>
              </div>

              <div>
                <div style={{ fontSize: '20px', fontWeight: '800', margin: '16px 0 12px' }}>
                  ${product.price}
                </div>
                <button 
                  onClick={() => navigate(`/products/${product.id}`)}
                  style={{
                    width: '100%',
                    padding: '10px',
                    borderRadius: '8px',
                    border: 'none',
                    backgroundColor: '#6366f1',
                    color: '#ffffff',
                    fontWeight: '700',
                    fontSize: '13px',
                    cursor: 'pointer'
                  }}
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}