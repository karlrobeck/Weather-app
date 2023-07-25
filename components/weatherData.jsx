"use client";

import { Form,Button,Container, Card } from 'react-bootstrap';
import React, { useEffect,useState } from 'react'
import Image from 'next/image';
import { CalendarEvent, Cloud, ThermometerHalf, ThermometerHigh, ThermometerLow } from 'react-bootstrap-icons';

const WeatherData = ({baseKey}) => {

    const [data, setData] = useState({})

    async function handleSubmit(e) {
        e.preventDefault();
        const res = await fetch(`https://api.weatherapi.com/v1/current.json?key=${baseKey}&q=${e.target[0].value}`)
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
            
            const res = await fetch(`https://api.weatherapi.com/v1/current.json?key=${baseKey}&q=${latitude},${longitude}`);

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
        <div className="py-5">
            <Container className='w-75'>
                <Form onSubmit={handleSubmit} className='d-flex gap-2'>
                    <Form.Group>
                        <Form.Control type='text' placeholder='Search Location' />
                    </Form.Group>
                    <Button type='submit' variant='outline-primary'>
                        Search
                    </Button>
                </Form>
                <div className='py-3 d-flex justify-content-between align-items-center'>
                    <div>
                        <div className='d-flex gap-2 align-items-center'>
                            <h1>
                                {data?.location?.region}, {data?.location?.name}
                            </h1>
                            <img width={40} height={40} src={data?.current?.condition?.icon} alt="icon" />
                            <small>
                                {data?.location?.lat} , {data?.location?.lon}
                            </small>
                        </div>
                        <small>
                            {data?.location?.country}
                        </small>
                    </div>
                    <time>
                        {data?.current?.last_updated}
                    </time>
                </div>
                <div className='d-flex justify-content-between gap-4'>
                    <Card className='w-25'>
                        <Card.Header className='d-flex justify-content-between align-items-center'>
                            <small>Condition</small>
                            <Cloud />
                        </Card.Header>
                        <Card.Body>
                            {data?.current?.condition?.text}
                        </Card.Body>
                    </Card>
                    <Card className='w-25'>
                        <Card.Header className='d-flex justify-content-between align-items-center'>
                            <small>Temperature ℃</small>
                            {data?.current?.temp_c < 35 &&
                                <ThermometerLow />
                            }
                            {data?.current?.temp_c > 35 &&
                                <ThermometerHalf />
                            }
                        </Card.Header>
                        <Card.Body>
                            {data?.current?.temp_c}
                        </Card.Body>
                    </Card>
                    <Card className='w-25'>
                        <Card.Header className='d-flex justify-content-between align-items-center'>
                            <small>Temperature ℉</small>
                            {data?.current?.temp_f < 90 &&
                                <ThermometerLow />
                            }
                            {data?.current?.temp_f > 90 &&
                                <ThermometerHalf />
                            }
                        </Card.Header>
                        <Card.Body>
                            {data?.current?.temp_f}
                        </Card.Body>
                    </Card>
                    <Card className='w-25'>
                        <Card.Header className='d-flex justify-content-between align-items-center'>
                            <small>Forecast</small>
                            <CalendarEvent />
                        </Card.Header>
                        <Card.Body>
                            {data?.current?.is_day <= 1 ? 
                            "today" : `day 1-${data?.current?.is_day}`}
                        </Card.Body>
                    </Card>
                </div>
            </Container>
        </div>
    )
}

export default WeatherData