import { Button, I, Input, WeatherSearchContainer } from './WeatherSearchStyle'
import { useSearch } from '../../shared'

export const WeatherSearch = (): JSX.Element => {
   const [handleChange, onClick] = useSearch()

   return (
      <WeatherSearchContainer>
         <I className='bx bxs-map' />
         <Input type='text' placeholder='enter your location' onChange={handleChange} />
         <Button className='bx bx-search' onClick={onClick} />
      </WeatherSearchContainer>
   )
}
