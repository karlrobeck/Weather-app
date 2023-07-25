"use client";

import { Form,Button } from 'react-bootstrap';
import React, { useEffect,useState } from 'react'
import Image from 'next/image';

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

          }
          
          function error() {
            console.log("Unable to retrieve your location");
          }

        /* use coordinates to get weather */
    },[])

    return (
        <app>
            <Form className='pt-5 pb-3 d-flex h-25 justify-content-center align-items-center gap-2' onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Control type="text" placeholder='Search Location' />
            </Form.Group>
            <Button type='submit' variant="outline-primary">
                Search
            </Button>
            </Form>
            <div className='p-5 mb-3 border border-3 rounded-3'>
                <div className='d-flex justify-content-between'>
                    <h1>
                        {data.location?.name}
                    </h1>
                    <img width={40} height={40} src={`${data.current?.condition?.icon}`} />
                </div>
                <div className='d-flex justify-content-between align-items-center'>
                    <small>
                        {data.location?.country}
                    </small>
                    <time>
                    {data.location?.localtime}
                    </time>
                </div>
                <p>{data.current?.condition?.text}</p>
            </div>
        </app>
    )
}

export default WeatherData