import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'

export default function ProductDetail() {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // URL se aane wali ID ke mutabiq dynamic API call
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        setProduct(res.data)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [id])

  if (loading) return <h3>Loading product #{id} details...</h3>
  if (!product) return <h3>Product not found!</h3>

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <Link to="/products">← Back to Products</Link>
      <div style={{ marginTop: '20px', textAlign: 'center' }}>
        <img src={product.image} alt={product.title} style={{ height: '200px', objectFit: 'contain' }} />
        <h2>{product.title}</h2>
        <p style={{ color: '#666' }}>Category: {product.category}</p>
        <p>{product.description}</p>
        <h3>Price: ${product.price}</h3>
      </div>
    </div>
  )
}