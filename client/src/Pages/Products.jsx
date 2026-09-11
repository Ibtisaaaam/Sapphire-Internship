import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../services/api';

const getProductImage = (title) => {
  const name = title.toLowerCase();
  if (name.includes('keyboard')) return 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&q=80';
  if (name.includes('gaming headset')) return 'https://images.unsplash.com/photo-1613040809024-b4ef7ba99bc3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aGVhZHBob25lfGVufDB8fDB8fHww';
  if (name.includes('headphones')) return 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80';
  if (name.includes('monitor')) return 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500&q=80';
  if (name.includes('chair')) return 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&q=80';
  if (name.includes('lamp')) return 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500&q=80';
  if (name.includes('watch')) return 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80';
  return 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500&q=80';
};

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts()
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div style={{ textAlign: 'center', padding: '50px', fontSize: '18px', color: 'inherit' }}>
        Loading store catalog...
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>
      <h2 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '30px', color: 'inherit' }}>
        Store Products
      </h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: '24px'
      }}>
        {products.map((product) => (
          <div key={product.id} style={{
            border: '1px solid rgba(156, 163, 175, 0.3)',
            borderRadius: '12px',
            overflow: 'hidden',
            backgroundColor: 'var(--card-bg, #ffffff)',
            color: 'var(--text-color, #111827)',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
            display: 'flex',
            flexDirection: 'column',
            justify: 'space-between'
          }}>
            <div>
              {/* Product Image */}
              <div style={{ width: '100%', height: '200px', backgroundColor: '#f3f4f6' }}>
                <img
                  src={getProductImage(product.title)}
                  alt={product.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500&q=80';
                  }}
                />
              </div>

              {/* Product Info */}
              <div style={{ padding: '16px' }}>
                <span style={{
                  fontSize: '11px',
                  fontWeight: 'bold',
                  color: '#2563eb',
                  backgroundColor: 'rgba(37, 99, 235, 0.1)',
                  padding: '4px 8px',
                  borderRadius: '4px',
                  textTransform: 'uppercase'
                }}>
                  {product.category}
                </span>

                <h3 style={{ fontSize: '18px', fontWeight: '600', margin: '10px 0 6px 0', color: '#111827' }}>
                  {product.title}
                </h3>

                <p style={{ fontSize: '22px', fontWeight: 'bold', color: '#059669', margin: '8px 0' }}>
                  ${parseFloat(product.price).toFixed(2)}
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div style={{ padding: '16px', paddingTop: '0', display: 'flex', gap: '10px' }}>
              <button style={{
                flex: 1,
                backgroundColor: '#f3f4f6',
                color: '#1f2937',
                border: '1px solid #d1d5db',
                padding: '10px',
                borderRadius: '6px',
                cursor: 'pointer',
                fontWeight: '600',
                fontSize: '13px'
              }}>
                Add to Cart
              </button>

              <button style={{
                flex: 1,
                backgroundColor: '#2563eb',
                color: '#ffffff',
                border: 'none',
                padding: '10px',
                borderRadius: '6px',
                cursor: 'pointer',
                fontWeight: '600',
                fontSize: '13px'
              }}>
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;