import React from 'react'
import Container from 'react-bootstrap/Container' 
import Navbar from 'react-bootstrap/Navbar';

function Layout(props) {
  
  return (
    <div>
       <Navbar expand ='md' variant='dark' bg='success'> 
        <Container >
          <Navbar.Brand> User Details</Navbar.Brand>
        </Container>
      </Navbar>
      <Container>{props.children}</Container>
    </div>
  )
}

export default Layout