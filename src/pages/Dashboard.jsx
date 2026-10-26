
// This is for the API handshake section.
import { useState, useEffect } from 'react';

function Dashboard() {
  const [users, setUsers] = useState([]);
// useEffect allows for the fetching of the API.
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => {
        // Demonstrates proof of network connection.
        console.log("Fetched users array:", data); 
        setUsers(data);
      })
    //   Error handling if the fetch fails.
      .catch((error) => console.error("Error fetching data:", error));
}, []);

  return (
    <div>
      <h2>API Handshake Test</h2>
      <p>Successfully loaded {users.length} users. Check your browser console!</p>
    </div>
  );
}

export default Dashboard;