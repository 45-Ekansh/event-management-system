import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EventForm from './components/EventForm';
import EventsList from './components/EventsLists';
import Login from './components/login';
import { AuthProvider } from './context/authContext';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<EventsList />} />
          <Route path="/create" element={<EventForm />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;