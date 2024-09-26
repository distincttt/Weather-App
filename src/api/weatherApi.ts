import { baseUrl } from './baseUrl'
import { APIKey } from './baseUrl'
import { WeatherResponse } from '../shared/types'

export const fetchWeatherApi = async (
   city: string = 'Saint Petersburg',
): Promise<WeatherResponse> => {
   const response = await fetch(`${baseUrl}q=${city}&appid=${APIKey}`)
   const jsonResponse = await response.json()
   if (response.ok) return jsonResponse
   else throw new Error('error')
}
