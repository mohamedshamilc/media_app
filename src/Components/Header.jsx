import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <Navbar className="bg-body-tertiary">
        <Container>
        <Navbar.Brand className="fw-bolder">
       <Link to={'/'}style={{textDecoration:"none"}}>
       <i class="fa-solid fa-play fa-bounce"></i>
            Media-app          
       </Link>
       </Navbar.Brand>
         </Container>
      </Navbar>
    </>
  )
}

export default Header
