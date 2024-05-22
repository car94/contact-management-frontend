import api from '../api';
import { Contact } from '../types'

export const getContacts = async (): Promise<Contact[]> => {
  const response = await api.get('/contacts');
  return response.data;
};

export const getContact = async (id: number): Promise<Contact> => {
  const response = await api.get(`/contacts/${id}`);
  return response.data;
};

export const createContact = async (contact: Omit<Contact, 'id'>): Promise<Contact> => {
  const response = await api.post('/contacts', contact);
  return response.data;
};

export const updateContact = async (id: number, contact: Omit<Contact, 'id'>): Promise<Contact> => {
  const response = await api.put(`/contacts/${id}`, contact);
  return response.data;
};

export const deleteContact = async (id: number): Promise<void> => {
  await api.delete(`/contacts/${id}`);
};
