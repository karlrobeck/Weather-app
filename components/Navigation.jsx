"use client";
import React from 'react'
import { Navbar,Container, Nav, Form, Button } from 'react-bootstrap'
import Link from 'next/link';

const Navigation = ({searchData}) => {
  return (
    <Navbar expand="lg" className='bg-light sticky-top border-bottom'>
        <Container>
            <Link href={'/'} className='navbar-brand lead fw-bold'>
                Weather App
            </Link>
            <Navbar.Toggle />
            <Navbar.Collapse>
                <Form className='ms-auto d-flex gap-2' onSubmit={searchData}>
                    <Form.Group>
                        <Form.Control type="text" placeholder="Search location" />
                    </Form.Group>
                    <Button type='submit' variant='outline-primary'>
                        Search
                    </Button>
                </Form>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

export default Navigation