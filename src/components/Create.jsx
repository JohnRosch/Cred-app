import React, { useState } from 'react';

function Create() {
  const [account, setAccount] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const newCredential = {
      account,
      username,
      password,
    };

    fetch('https://6097f7f1e48ec000178732cd.mockapi.io/api/vi/credentials', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(newCredential),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error('Failed to add data');
        }
      })
      .then((data) => {
        console.log('Data added successfully:', data);
        setAccount('');
        setUsername('');
        setPassword('');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Account:
          <input type="text" value={account} onChange={(e) => setAccount(e.target.value)} />
        </label>
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button>Submit</button>
     </form>
    </div>
  )
}

export default Create;