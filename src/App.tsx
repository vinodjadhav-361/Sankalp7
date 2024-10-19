import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App: React.FC = () => {
  const [message, setMessage] = useState<string>('');
  const [mongoStatus, setMongoStatus] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const testResponse = await axios.get('http://localhost:5000/api/test');
        setMessage(testResponse.data.message);
        
        const statusResponse = await axios.get('http://localhost:5000/api/mongodb-status');
        setMongoStatus(statusResponse.data.status);
      } catch (error) {
        console.error('Error fetching data:', error);
        setMessage('Error connecting to server');
        setMongoStatus('Unknown');
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Sankalp - Hindu Social Network</h1>
      <p>Server Message: {message}</p>
      <p>MongoDB Status: {mongoStatus}</p>
    </div>
  );
};

export default App;