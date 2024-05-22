import React, { useState } from 'react';
import './App.css';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import { Contact } from './types';

const App: React.FC = () => {
  const [editingContact, setEditingContact] = useState<null | Contact>(null);
  const [refreshKey, setRefreshKey] = useState(0);

  const handleSave = () => {
    setEditingContact(null);
    setRefreshKey(prevKey => prevKey + 1);
  };

  return (
    <div className="App">
      <ContactList key={refreshKey} />
      <ContactForm contact={editingContact ?? undefined} onSave={handleSave} />
    </div>
  );
};

export default App;
