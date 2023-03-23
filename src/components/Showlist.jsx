import React, { useState, useEffect } from 'react';
import { Button, Card, Grid } from 'semantic-ui-react'

function Showlist() {
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
      <Grid centered columns={3} style={{ marginTop: '200px' }} >
        <Grid.Row>
            {credentials.map((credential) => (
            <div key={credential.id} style={{ margin: '10px' }} >
              <Card.Group centered style={{ margin: '10px' }} >
                <Card>
                  <Card.Content>
                    <Card.Header>{credential.account}</Card.Header>
                    <Card.Description>
                      Username: {credential.username}
                    </Card.Description>
                    <Card.Description>
                      Password: {credential.password}
                    </Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <div className='ui two buttons'>
                      <Button basic color='green'>
                        Update
                      </Button>
                      <Button basic color='red'>
                        Delete
                      </Button>
                    </div>
                  </Card.Content>
                </Card>
              </Card.Group>
            </div>
      ))}
        </Grid.Row>

      </Grid>
    </div>
  );
}

export default Showlist;
