// src/components/TicketCard.js

import React from 'react';
import './TicketCard.css';

function TicketCard({ ticket }) {
  return (
    <div className="ticket-card">
      <h4>{ticket.title}</h4>
      <p><strong>Priority:</strong> {ticket.priority}</p>
      <p><strong>Status:</strong> {ticket.status}</p>
      <p><strong>User:</strong> {ticket.userId}</p>
    </div>
  );
}

export default TicketCard;
