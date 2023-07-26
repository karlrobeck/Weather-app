"use client";
import Navigation from '@/components/Navigation';
import WeatherCard from '@/components/WeatherCard';
import Footer from '@/components/Footer';
import { Cloud } from 'react-bootstrap-icons';
import Image from 'next/image'
import { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap'


export default function Home() {
  const BASEKEY = '4a45d0bf9873498391554207232507' 

  const [data, setData] = useState(undefined)

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(`https://api.weatherapi.com/v1/current.json?key=${BASEKEY}&q=${e.target[0].value}`)
    const res = await fetch(`https://api.weatherapi.com/v1/current.json?key=${BASEKEY}&q=${e.target[0].value}`)
    const json = await res.json()
    setData(json)
  }

  useEffect(() => {
    /* get coordinates of the user */
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success, error);
      } else {
        console.log("Geolocation not supported");
      }
      
      async function success(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        const res = await fetch(`https://api.weatherapi.com/v1/current.json?key=${BASEKEY}&q=${latitude},${longitude}`);

        const json = await res.json();

        setData(json)

        console.log(json)

      }
      
      function error() {
        console.log("Unable to retrieve your location");
      }

    /* use coordinates to get weather */
  },[])

  return (
    <main className=''>
      <Navigation searchData={handleSubmit} />
      <Row className='h-100'>
        <Col className='col-5'>
          <img className='img-fluid' src='clouds.jpg' alt='image'/>
        </Col>
        <Col className='col-7'>
          <Container className='w-75'>
            <div className='py-5'>
            <div className='d-flex'>
              <div className='d-flex justify-content-between align-items-center gap-3'>
                <h1 className='lead fw-bold'>
                  {data?.location?.region}, {data?.location?.name}
                </h1>
                <img width={40} height={40} src={data?.current?.condition?.icon} alt="icon"/>
                <small>
                  {data?.location?.lat},{data?.location?.lon}
                </small>
              </div>
            </div>
            <div className='d-flex flex-column'>
              <time className='lead'>
              {data?.location?.localtime}
              </time>
              <small className='lead fst-italic'>
                {data?.location?.country}
              </small>
            </div>
            </div>
            <div className='d-flex justify-content-center flex-wrap gap-5'>
              <WeatherCard 
              header={"Condition"} 
              icon={<Cloud />} 
              data={data?.current?.condition?.text}
              />
              <WeatherCard 
              header={"Cloud"} 
              icon={<Cloud />} 
              data={data?.current?.cloud}
              />
              <WeatherCard 
              header={"Humidity"} 
              icon={<Cloud />} 
              data={data?.current?.humidity}
              />
              <WeatherCard 
              header={"Temp C"} 
              icon={<Cloud />} 
              data={data?.current?.temp_c}
              />
              <WeatherCard 
              header={"Temp F"} 
              icon={<Cloud />} 
              data={data?.current?.temp_f}
              />
              <WeatherCard 
              header={"Gust kph"} 
              icon={<Cloud />} 
              data={data?.current?.gust_kph}
              />
            </div>
          </Container>
        </Col>
      </Row>
      <Footer />
    </main>
  )
}
