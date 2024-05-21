//rfc하면 됨

import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Link to="/" className='navbar-brand'>React</Link>
          <Nav className="me-auto">
            <Link to="/memberSave" className='nav-link'>회원가입</Link>
            <Nav.Link href="#features">로그인</Nav.Link>
            <Nav.Link href="#pricing">회원리스트</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
    </>
  )
}
