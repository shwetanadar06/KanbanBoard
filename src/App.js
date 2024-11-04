// src/App.js

import React, { useEffect, useState } from 'react';
import KanbanBoard from './components/KanbanBoard';
import DisplayMenu from './components/DisplayMenu';
import axios from 'axios';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [grouping, setGrouping] = useState('status');

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get('https://api.quicksell.co/v1/internal/frontend-assignment');
        setTasks(Array.isArray(response.data.tickets) ? response.data.tickets : []);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching tasks:', error);
        setTasks([]);
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);

  const handleGroupingChange = (newGrouping) => setGrouping(newGrouping);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <h1>Kanban Board</h1>
      <DisplayMenu onGroupChange={handleGroupingChange} />
      <KanbanBoard tasks={tasks} grouping={grouping} />
    </div>
  );
}

export default App;
