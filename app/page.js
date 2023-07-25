"use client";
import WeatherData from '@/components/weatherData';
import Image from 'next/image'
import { Container } from 'react-bootstrap'

export default function Home() {
  const BASEKEY = '4a45d0bf9873498391554207232507' 
  return (
    <main className='d-flex flex-column justify-content-center bg-dark' style={{height:"100vh"}}>
      <Container>
      <h1 className='display-5 fw-bold text-center text-light'>
        Weather App
      </h1>
      </Container>
      <Container className='w-50 d-flex flex-column align-items-center text-dark bg-light rounded-3'>
        {/* TODO
            CREATE SEARCH FORM
            DISPLAY WEATHER DATA
        */}
          <WeatherData baseKey={BASEKEY} />
      </Container>
    </main>
  )
}
