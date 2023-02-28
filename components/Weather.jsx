import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Weather = () => {
    const [data, setData] = useState([])
    const url =
        // 'https://api.openweathermap.org/data/2.5/weather?q=Glendale&appid=ed48249aaa4749e27c2d0dea23b44f0f&units=imperial'
        // TODO: ADD ENV VARIABLE FOR API KEY
        `https://api.openweathermap.org/data/2.5/weather?q=91208&appid=${process.env.NEXT_PUBLIC_WEATHER_API}&units=imperial`

    useEffect(() => {
        axios.get(url).then((response) => {
            setData(response.data)
        })
    }, [])

    return (
        <div className="">
            <div className="">
                <div className="flex flex-row">
                    <div className="">
                        {data.main ? <p>{data.main.temp.toFixed()}°F</p> : null}
                    </div>
                    {/* <div className="">
                        {data.weather ? <p>{data.weather[0].main}</p> : null}
                    </div> */}
                    <div>
                        {data.weather ? (
                            <img
                                src={`https://openweathermap.org/img/w/${data.weather[0].icon}.png`}
                                alt="weather icon"
                                height={20}
                                width={20}
                                className="weather-icon"
                            />
                        ) : null}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Weather
