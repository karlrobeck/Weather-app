"use client";
import Navigation from '@/components/Navigation';
import WeatherData from '@/components/weatherData';
import Image from 'next/image'
import { Container } from 'react-bootstrap'

export default function Home() {
  const BASEKEY = '4a45d0bf9873498391554207232507' 
  return (
    <main>
      <Navigation />
      <WeatherData baseKey={BASEKEY} />
    </main>
  )
}
