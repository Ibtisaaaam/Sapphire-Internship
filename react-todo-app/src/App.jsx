import React from 'react';

function TaskCard(props) {
  return (
    <div style={{
      border: '1px solid #e2e8f0',
      padding: '15px',
      margin: '10px 0',
      borderRadius: '8px',
      backgroundColor: '#f8fafc',
      textAlign: 'left'
    }}>
      <h3 style={{ margin: '0 0 5px 0', color: '#1e293b' }}>
        Task: {props.title}
      </h3>
      <p style={{ margin: 0, color: props.isCompleted ? '#16a34a' : '#dc2626', fontWeight: 'bold' }}>
        Status: {props.isCompleted ? 'Completed' : 'Pending'}
      </p>
    </div>
  );
}

export default function App() {
  return (
    <div style={{ padding: '30px', fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: '0 auto' }}>
      <h1 style={{ color: '#0f172a' }}>Day 5: React Fundamentals</h1>
      <p style={{ color: '#64748b' }}>Components & Props Demonstration</p>
      
      <TaskCard title="Setup Node.js & Vite Environment" isCompleted={true} />
      <TaskCard title="Understand JSX Syntax & Rules" isCompleted={true} />
      <TaskCard title="Learn Component Reusability & Props" isCompleted={true} />
      <TaskCard title="Build Interactive Todo App with State (Day 6)" isCompleted={false} />
    </div>
  );
}