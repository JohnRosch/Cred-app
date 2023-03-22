// This is my code pattern using useState in fetching API data
//Also my script pattern for mapping array from API 


import React, { useState, useEffect } from 'react';
function Apimap() {
  const [credentials, setCredentials] = useState([]);

  useEffect(() => {
    fetch('https://6097f7f1e48ec000178732cd.mockapi.io/api/vi/credentials', {
      method: 'GET',
      headers: { 'content-type': 'application/json' },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error('Failed to fetch data');
        }
      })
      .then((data) => {
        setCredentials(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      {credentials.map((credential) => (
        <div key={credential.id}>
          <h3>{credential.account}</h3>
          <h3>{credential.username}</h3>
          <h3>{credential.password}</h3>
        </div>
      ))}
    </div>
  );
}

export default Apimap;
