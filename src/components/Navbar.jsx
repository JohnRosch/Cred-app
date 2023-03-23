import React from 'react'
import { Container, Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const Navbar = () => (
  <div>
    <Menu fixed='top' inverted>
      <Container>
        <Menu.Item as={Link} to='/' header>
          <h2>Cred-App</h2>
        </Menu.Item>
        <Menu.Item as={Link} to='/'>Home</Menu.Item>
        <Menu.Item as={Link} to='/showlist'>Showlist</Menu.Item>
        <Menu.Item as={Link} to='/about'>About</Menu.Item>
      </Container>
    </Menu>
  </div>
)

export default Navbar
