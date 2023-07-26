"use client";

import Footer from '@/components/Footer'
import Navigation from '@/components/Navigation'
import Link from 'next/link'
import React from 'react'
import { Accordion, Card, Container } from 'react-bootstrap'
import { PersonBadge } from 'react-bootstrap-icons';

const page = () => {
  return (
    <main>
    <Navigation />
    <div style={{height:"100vh",scrollBehavior:"smooth"}} className='overflow-y-scroll'>
        <Container className='w-75 p-5 d-flex flex-column gap-3'>
            <Card className=''>
                <Card.Header className='d-flex align-items-center gap-3'>
                    <PersonBadge />
                    <span>KARL ROBECK ALFEREZ</span>
                </Card.Header>
                <Card.Body>
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, temporibus assumenda? Adipisci soluta incidunt blanditiis fugiat autem atque. Quibusdam atque eaque possimus fuga neque repellendus eum voluptatem veniam officia voluptatibus?
                    </p>
                    <Accordion flush>
                        <Accordion.Item eventKey='1'>
                            <Accordion.Header>
                                Contribution
                            </Accordion.Header>
                            <Accordion.Body className='d-flex flex-column gap-3'>
                                <li className='lead '>
                                Overall Layout design
                                </li>
                                <li className='lead '>
                                Icon Design    
                                </li>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Card.Body>
            </Card>
            <Card>
                <Card.Header className='d-flex align-items-center gap-3'>
                    <PersonBadge />
                    <span>VIVIEN LEIGH ALVAREZ</span>
                </Card.Header>
                <Card.Body>
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Est pariatur repudiandae iure ratione. Quos magni, sapiente reprehenderit corporis dicta distinctio sunt similique nulla exercitationem beatae quidem nobis? Consequatur, voluptatum tempora.
                    </p>
                    <Accordion flush>
                        <Accordion.Item eventKey='1'>
                            <Accordion.Header>
                                Contribution
                            </Accordion.Header>
                            <Accordion.Body className='d-flex flex-column gap-3'>
                                <li className='lead '>
                                Overall Layout design
                                </li>
                                <li className='lead '>
                                Icon Logo Design    
                                </li>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Card.Body>
            </Card>
        </Container>
    </div>
    <Footer />
    </main>
  )
}

export default page