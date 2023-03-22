import React, { useState, useEffect } from 'react';

function Apicall() {
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
          <h3>Account: {credential.account}</h3>
          <h3>Username: {credential.username}</h3>
          <h3>Password: {credential.password}</h3>
        </div>
      ))}
    </div>
  );
}

export default Apicall;
