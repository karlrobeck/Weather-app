"use client";
import Link from 'next/link';
import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer className='sticky-bottom'>
        <Container className='d-flex justify-content-end ps-5'>
                <Navbar className='gap-5 px-5 border rounded-3 bg-light'>
                    <Nav.Item>
                        <Link className='nav-link' target='_blank' href={'https://github.com/karlrobeck/weather-app'}>
                            Repository
                        </Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link className='nav-link' href={"/about"}>
                            About
                        </Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link className='nav-link' href={"/"}>
                            Home
                        </Link>
                    </Nav.Item>
                </Navbar>
        </Container>
    </footer>
  )
}

export default Footer