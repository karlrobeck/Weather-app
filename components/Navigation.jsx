"use client";
import React from 'react'
import { Navbar,Container, Nav } from 'react-bootstrap'

const Navigation = () => {
  return (
    <Navbar expand="lg" className='sticky-top border border-bottom'>
        <Container>
            <Navbar.Brand className='lead fw-bold'>
                Weather app
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
                <Nav className='ms-auto gap-3'>
                    <Nav.Item>
                        <Nav.Link target='_blank' href='https://github.com/karlrobeck/weather-app'>
                            Repositiory
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link>
                            About
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

export default Navigation