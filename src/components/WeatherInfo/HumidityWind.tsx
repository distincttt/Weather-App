import { HumidityWindStyle, I, P, Span } from './WeatherInfoStyle'

interface HumidityWindProps {
   name: string
   translateY: string
   boxIconName: string
   humidityWind: string
   padding: string
   flex: string
}

export const HumidityWind = ({
   name,
   translateY,
   boxIconName,
   humidityWind,
   padding,
   flex,
}: HumidityWindProps): JSX.Element => {
   return (
      <HumidityWindStyle transform={translateY} $padding={padding} $flex={flex}>
         <I className={boxIconName} />
         <div>
            <Span>{humidityWind}</Span>
            <P>{name}</P>
         </div>
      </HumidityWindStyle>
   )
}
