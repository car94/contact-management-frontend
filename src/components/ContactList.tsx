import React, { useEffect, useState } from 'react';
import { getContacts, deleteContact } from '../services/contactService';
import { Contact } from '../types';

const ContactList: React.FC = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);

  useEffect(() => {
    const fetchContacts = async () => {
      const data = await getContacts();
      setContacts(data);
    };

    fetchContacts();
  }, []);

  const handleDelete = async (id: number) => {
    await deleteContact(id);
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  return (
    <div>
      <h1>Contact List</h1>
      <ul>
        {contacts.map(contact => (
          <li key={contact.id}>
            {contact.name} - {contact.email} - {contact.phone}
            <button onClick={() => handleDelete(contact.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
