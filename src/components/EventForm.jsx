import React, { useState } from 'react';
import axios from 'axios';

const EventForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/events', { title, description, date });
      alert('Event Created');
    } catch (err) {
      alert('Error creating event');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      <button type="submit">Create Event</button>
    </form>
  );
};

export default EventForm;
