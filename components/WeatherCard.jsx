"use client";

import React from 'react'
import { Card, Spinner } from 'react-bootstrap'

const WeatherCard = ({header,icon,data}) => {
  return (
    <Card className='w-25'>
        <Card.Header className='d-flex justify-content-between align-items-center'>
            <small>{header}</small>
            {icon}
        </Card.Header>
        <Card.Body>
            {data ? data : <Spinner animation='border' />}
        </Card.Body>
    </Card>
  )
}

export default WeatherCard