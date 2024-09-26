import { AnimationContainer } from '../../shared'
import { Image, P, WeatherNotFoundContainer } from './WeatherNotFoundStyle'
import { useAnimation } from '../../shared'

export const WeatherNotFound = (): JSX.Element => {
   const translateY = useAnimation(600)
   return (
      <WeatherNotFoundContainer>
         <AnimationContainer transform={translateY}>
            <Image src='/src/images/404.png' alt='Not found' />
            <P>Oops! Location not found.</P>
         </AnimationContainer>
      </WeatherNotFoundContainer>
   )
}
