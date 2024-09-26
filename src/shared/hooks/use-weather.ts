import { Weather } from '../types'
import { useAppSelector } from './redux-hooks'

export const useWeather = (): [Weather, boolean, boolean, string] => {
  const { weather, error, loading } = useAppSelector((state) => state.weatherSlice)

  let weatherContainerHeight = '99px'
  if (weather.description) weatherContainerHeight = '555px'
  if (error) weatherContainerHeight = '400px'

  return [weather, error, loading, weatherContainerHeight]
}
