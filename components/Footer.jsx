"use client";
import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer className='sticky-bottom'>
        <Container className='d-flex justify-content-center ps-5'>
                <Navbar className='gap-5 px-5 border rounded-3 bg-light'>
                    <Nav.Item>
                        <Nav.Link target='_blank' href='https://github.com/karlrobeck/weather-app'>
                            Repository
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link>
                            About
                        </Nav.Link>
                    </Nav.Item>
                </Navbar>
        </Container>
    </footer>
  )
}

export default Footer