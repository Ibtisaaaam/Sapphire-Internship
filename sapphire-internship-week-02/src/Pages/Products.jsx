import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function Products() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    // Axios GET Request to fetch live products
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

  if (loading) return <h3>Loading products from API...</h3>
  if (error) return <h3>Error loading products: {error}</h3>

  return (
    <div>
      <h1>Products Catalog</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '20px', marginTop: '20px' }}>
        {products.slice(0, 8).map((product) => (
          <div key={product.id} style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px', textAlign: 'center' }}>
            <img src={product.image} alt={product.title} style={{ height: '100px', objectFit: 'contain' }} />
            <h4 style={{ fontSize: '14px', margin: '10px 0' }}>{product.title.slice(0, 25)}...</h4>
            <p><strong>${product.price}</strong></p>
            <button 
              onClick={() => navigate(`/products/${product.id}`)}
              style={{ padding: '6px 12px', cursor: 'pointer' }}
            >
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}