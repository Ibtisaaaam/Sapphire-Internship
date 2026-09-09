import React, { useState, useEffect } from 'react';

function TaskCard(props) {
  return (
    <div style={{ border: '1px solid #cbd5e1', padding: '10px', margin: '8px 0', borderRadius: '6px', backgroundColor: '#f8fafc' }}>
      <h4 style={{ margin: '0 0 4px 0', color: '#1e293b' }}>Task: {props.title}</h4>
      <p style={{ margin: 0, color: props.isCompleted ? '#16a34a' : '#dc2626', fontWeight: 'bold' }}>
        Status: {props.isCompleted ? 'Completed' : 'Pending'}
      </p>
    </div>
  );
}

export default function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Learn React Setup', completed: true },
    { id: 2, text: 'Master Props & State', completed: true }
  ]);
  const [inputText, setInputText] = useState('');

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=3')
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;
    setTasks([...tasks, { id: Date.now(), text: inputText, completed: false }]);
    setInputText('');
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  return (
    <div style={{ padding: '30px', fontFamily: 'Arial, sans-serif', maxWidth: '650px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center', color: '#0f172a' }}>React Fundamentals (Days 5–7)</h1>
      <hr style={{ margin: '20px 0' }} />

      <section style={{ marginBottom: '30px' }}>
        <h2>Day 5: Components & Props</h2>
        <TaskCard title="Environment Setup & Vite" isCompleted={true} />
        <TaskCard title="JSX and Reusable Components" isCompleted={true} />
      </section>

      <section style={{ marginBottom: '30px', padding: '15px', border: '1px solid #e2e8f0', borderRadius: '8px' }}>
        <h2>Day 6: Dynamic Todo App (useState)</h2>
        <form onSubmit={handleAddTask} style={{ display: 'flex', gap: '10px', marginBottom: '15px' }}>
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Add a new task..."
            style={{ flex: 1, padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
          <button type="submit" style={{ padding: '8px 16px', backgroundColor: '#2563eb', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
            Add Task
          </button>
        </form>

        {tasks.map((task) => (
          <div
            key={task.id}
            onClick={() => toggleTask(task.id)}
            style={{
              padding: '10px',
              margin: '6px 0',
              backgroundColor: task.completed ? '#dcfce7' : '#f1f5f9',
              borderRadius: '4px',
              cursor: 'pointer',
              textDecoration: task.completed ? 'line-through' : 'none'
            }}
          >
            {task.text} {task.completed ? '✓' : ''}
          </div>
        ))}
      </section>

      <section style={{ padding: '15px', border: '1px solid #e2e8f0', borderRadius: '8px' }}>
        <h2>Day 7: Live API Integration (useEffect)</h2>
        {loading ? (
          <p>Loading API Data...</p>
        ) : (
          posts.map((post) => (
            <div key={post.id} style={{ padding: '8px 0', borderBottom: '1px solid #f1f5f9' }}>
              <h4 style={{ margin: '0 0 4px 0', textTransform: 'capitalize', color: '#334155' }}>{post.title}</h4>
              <p style={{ margin: 0, fontSize: '13px', color: '#64748b' }}>{post.body}</p>
            </div>
          ))
        )}
      </section>
    </div>
  );
}