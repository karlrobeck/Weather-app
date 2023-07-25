"use client";

import { Form, Button, Container, Card, Spinner } from 'react-bootstrap';
import React, { useEffect,useState } from 'react'
import Image from 'next/image';
import { CalendarEvent, Cloud, ThermometerHalf, ThermometerHigh, ThermometerLow } from 'react-bootstrap-icons';
import WeatherCard from './WeatherCard';

const WeatherData = ({baseKey}) => {

    const [data, setData] = useState(undefined)

    async function handleSubmit(e) {
        e.preventDefault();
        const res = await fetch(`https://api.weatherapi.com/v1/current.json?key=${baseKey}&q=${e.target[0].value}`)
        const json = await res.json()

        setData(json)

    }

    useEffect(() => {
        async function fetchData(){    
        const res = await fetch(`https://api.weatherapi.com/v1/current.json?key=${baseKey}&q=auto:ip`);

        const json = await res.json();

        setData(json)

        console.log(json)
        }
        fetchData()
        /* use coordinates to get weather */
    },[])

    return (
        <div className="py-5">
            <Container className='w-25'>
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
                        {data ? <div className='d-flex gap-2 align-items-center'>
                            <h1>
                                {data?.location?.region}, {data?.location?.name}
                            </h1>
                            <img width={40} height={40} src={data?.current?.condition?.icon} alt="icon" />
                            <small>
                                {data?.location?.lat} , {data?.location?.lon}
                            </small>
                        </div> : <Spinner animation='border' />}
                        <small>
                            {data?.location?.country}
                        </small>
                    </div>
                    <time>
                        {data?.current?.last_updated}
                    </time>
                </div>
                <div className='d-flex justify-content-between gap-4'>
                    <WeatherCard 
                    header={"Condition"} 
                    icon={<Cloud />} 
                    data={data?.current?.condition?.text}
                    />
                    <WeatherCard 
                    header={"Temperature ℃"} 
                    icon={data?.current?.temp_c ? 35 &&
                        <ThermometerLow /> :<ThermometerHalf />
                    }  
                    data={data?.current?.temp_c}
                    />
                    <WeatherCard 
                    header={"Temperature ℉"} 
                    icon={data?.current?.temp_f < 90 ?
                        <ThermometerLow /> : <ThermometerHalf />
                    }  
                    data={data?.current?.temp_f}
                    />
                    <WeatherCard 
                    header={"Forecast"} 
                    icon={data?.current?.temp_f < 90 ?
                        <ThermometerLow /> : <ThermometerHalf />
                    }  
                    data={data && data?.current?.is_day <= 1 ? 
                        "today" : `day 1-${data?.current?.is_day}`
                    }
                    />
                </div>
            </Container>
        </div>
    )
}

export default WeatherData