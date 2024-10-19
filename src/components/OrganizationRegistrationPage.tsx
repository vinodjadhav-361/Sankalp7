import React, { useState } from 'react';
import axios from 'axios';
import { Building, Mail, FileText, Image } from 'lucide-react';

const OrganizationRegistrationPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/organizations', { name, email, description, image });
      console.log('Organization registration successful', response.data);
      // TODO: Handle successful registration (e.g., redirect to organization profile)
    } catch (error) {
      console.error('Organization registration failed', error);
      // TODO: Handle registration error (e.g., show error message)
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-saffron-50">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-saffron-800 text-center">Register Organization</h2>
        <form onSubmit={handleRegister}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-saffron-700 mb-2">Organization Name</label>
            <div className="relative">
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 pl-10 border border-saffron-300 rounded-md focus:outline-none focus:ring-2 focus:ring-saffron-500"
                required
              />
              <Building className="absolute left-3 top-2.5 text-saffron-400" size={20} />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-saffron-700 mb-2">Email</label>
            <div className="relative">
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 pl-10 border border-saffron-300 rounded-md focus:outline-none focus:ring-2 focus:ring-saffron-500"
                required
              />
              <Mail className="absolute left-3 top-2.5 text-saffron-400" size={20} />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block text-saffron-700 mb-2">Description</label>
            <div className="relative">
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full px-3 py-2 pl-10 border border-saffron-300 rounded-md focus:outline-none focus:ring-2 focus:ring-saffron-500"
                rows={3}
                required
              ></textarea>
              <FileText className="absolute left-3 top-2.5 text-saffron-400" size={20} />
            </div>
          </div>
          <div className="mb-6">
            <label htmlFor="image" className="block text-saffron-700 mb-2">Image URL</label>
            <div className="relative">
              <input
                type="url"
                id="image"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                className="w-full px-3 py-2 pl-10 border border-saffron-300 rounded-md focus:outline-none focus:ring-2 focus:ring-saffron-500"
                required
              />
              <Image className="absolute left-3 top-2.5 text-saffron-400" size={20} />
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-saffron-600 text-white py-2 px-4 rounded-md hover:bg-saffron-700 transition duration-200"
          >
            Register Organization
          </button>
        </form>
      </div>
    </div>
  );
};

export default OrganizationRegistrationPage;