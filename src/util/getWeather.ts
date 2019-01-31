import * as request from 'request'
import { Location } from '../models/location'

export const getWeather = (locations: Array<Location>) => {
	locations.forEach((location: Location) => {
		const { name, id } = location
		const url = `http://api.openweathermap.org/data/2.5/weather?q=${name}&units=imperial&appid=${process.env.WEATHER_API_KEY}`
		request(encodeURI(url), (error, response, body) => {
			if (error) {
				throw new Error(`Error occured: ${error.message}`)
			}
			const weather = JSON.parse(body)
			const message = `It's ${weather.main.temp} degrees in ${weather.name} city with wind speed of ${weather.wind.speed}.`
			console.log(message)
		})
	})
}
