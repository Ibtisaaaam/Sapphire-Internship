import { useNavigate } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'

export default function Home() {
  const navigate = useNavigate()
  const { darkMode } = useTheme()

  const cardStyle = {
    padding: '28px',
    border: darkMode ? '1px solid #1e293b' : '1px solid #e2e8f0',
    borderRadius: '16px',
    backgroundColor: darkMode ? '#111827' : '#ffffff',
    textAlign: 'left',
    boxShadow: darkMode ? '0 4px 20px rgba(0,0,0,0.2)' : '0 4px 20px rgba(0,0,0,0.03)'
  }

  return (
    <div style={{ textAlign: 'center', padding: '40px 10px' }}>
      <div style={{
        display: 'inline-block',
        padding: '6px 16px',
        borderRadius: '20px',
        backgroundColor: darkMode ? 'rgba(99, 102, 241, 0.15)' : 'rgba(99, 102, 241, 0.08)',
        color: '#6366f1',
        fontWeight: '700',
        fontSize: '13px',
        marginBottom: '24px',
        border: '1px solid rgba(99, 102, 241, 0.2)'
      }}>
        Sapphire Internship — Week 02 Production Release
      </div>

      <h1 style={{
        fontSize: '48px',
        fontWeight: '800',
        lineHeight: '1.15',
        marginBottom: '20px',
        letterSpacing: '-1px'
      }}>
        Discover Premium Products <br />
        <span style={{
          background: 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          Built for Modern E-Commerce
        </span>
      </h1>

      <p style={{
        fontSize: '17px',
        color: darkMode ? '#94a3b8' : '#475569',
        maxWidth: '620px',
        margin: '0 auto 35px',
        lineHeight: '1.6',
        fontWeight: '400'
      }}>
        A high-performance Single Page Application powered by React Router v6, Axios REST integration, and persistent URL search state.
      </p>

      <div style={{ display: 'flex', gap: '15px', justifyContent: 'center' }}>
        <button 
          onClick={() => navigate('/products')}
          style={{
            padding: '14px 32px',
            fontSize: '15px',
            fontWeight: '700',
            backgroundColor: '#6366f1',
            color: '#ffffff',
            border: 'none',
            borderRadius: '10px',
            cursor: 'pointer',
            boxShadow: '0 10px 25px -5px rgba(99, 102, 241, 0.4)'
          }}
        >
          Explore Catalog →
        </button>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '24px',
        marginTop: '60px'
      }}>
        <div style={cardStyle}>
          <div style={{ fontSize: '24px', marginBottom: '12px' }}>⚡</div>
          <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '8px' }}>Fast Client Routing</h3>
          <p style={{ fontSize: '14px', color: darkMode ? '#94a3b8' : '#64748b', lineHeight: '1.5' }}>
            Instant page transitions via React Router DOM without full reload overhead.
          </p>
        </div>

        <div style={cardStyle}>
          <div style={{ fontSize: '24px', marginBottom: '12px' }}>🌐</div>
          <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '8px' }}>Live REST API Integration</h3>
          <p style={{ fontSize: '14px', color: darkMode ? '#94a3b8' : '#64748b', lineHeight: '1.5' }}>
            Asynchronous live product payload fetching using Axios HTTP client.
          </p>
        </div>

        <div style={cardStyle}>
          <div style={{ fontSize: '24px', marginBottom: '12px' }}>🔍</div>
          <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '8px' }}>URL State Persistence</h3>
          <p style={{ fontSize: '14px', color: darkMode ? '#94a3b8' : '#64748b', lineHeight: '1.5' }}>
            Synchronized search queries through `useSearchParams` parameters.
          </p>
        </div>
      </div>
    </div>
  )
}