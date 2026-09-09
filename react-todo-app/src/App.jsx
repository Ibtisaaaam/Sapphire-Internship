import React, { useState, useEffect } from 'react';

export default function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // useEffect Hook: Component load hone par automatic API trigger karta hai
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []); // Empty dependency array means ye sirf initial load par 1 martaba chalega

  return (
    <div style={{ padding: '30px', fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: '0 auto' }}>
      <h2>Day 7: React useEffect & Dynamic API Integration</h2>
      
      {loading ? (
        <p>Loading posts from API...</p>
      ) : (
        <div>
          {posts.map((post) => (
            <div
              key={post.id}
              style={{
                border: '1px solid #e2e8f0',
                padding: '15px',
                marginBottom: '10px',
                borderRadius: '8px',
                backgroundColor: '#f8fafc'
              }}
            >
              <h4 style={{ margin: '0 0 5px 0', textTransform: 'capitalize', color: '#1e293b' }}>
                {post.title}
              </h4>
              <p style={{ margin: 0, color: '#64748b', fontSize: '14px' }}>
                {post.body}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}