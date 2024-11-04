// src/components/KanbanBoard.js

import React from 'react';
import TicketCard from './TicketCard';
import './KanbanBoard.css';

function KanbanBoard({ tasks, grouping }) {
  const groupedTasks = tasks.reduce((acc, task) => {
    const key = task[grouping];
    if (!acc[key]) acc[key] = [];
    acc[key].push(task);
    return acc;
  }, {});

  return (
    <div className="kanban-board">
      {Object.entries(groupedTasks).map(([group, tasks]) => (
        <div key={group} className="kanban-column">
          <h2>{group}</h2>
          {tasks.map((task) => (
            <TicketCard key={task.id} ticket={task} />
          ))}
        </div>
      ))}
    </div>
  );
}

export default KanbanBoard;
