import React, { useState } from 'react';
import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom'


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

    console.log('Before state update:', account, username, password);

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
         // Reset the form
      event.target.reset();

       // Show an alert
       window.alert('You added an account!');
       
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2' color='grey' textAlign='center'>
            Add Account's Credentials
          </Header>
          <Form size='large'  autocomplete="off" onSubmit={handleSubmit}>
            <Segment stacked>
              <Form.Input fluid icon='user circle' iconPosition='left' placeholder='Account'
              onChange={(e) => setAccount(e.target.value)} />
              <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address'
              onChange={(e) => setUsername(e.target.value)} />
              <Form.Input
                fluid
                icon='lock'
                iconPosition='left'
                placeholder='Password'
                onChange={(e) => setPassword(e.target.value)} />

              <Button color='purple' fluid size='large'>Add</Button>
                <br />
              <Button color='purple' fluid size='large' as={Link} to='/showlist'>Account List</Button>
            </Segment>
          </Form>
        </Grid.Column>
      </Grid>
    </div>
  )
}

export default Create;