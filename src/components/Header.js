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
            <Link to="/login" className='nav-link'>로그인</Link>
            <Link to="/memberList" className='nav-link'>회원리스트</Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
    </>
  )
}
