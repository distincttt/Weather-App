import styled from 'styled-components'
import { IconName } from 'boxicons'

export const WeatherInfoContainer = styled.div`
   position: absolute;
   bottom: 40px;
   left: 0;
   width: 100%;
   padding: 0 20px;
   display: flex;
   overflow: hidden;
`

export const Span = styled.span`
   display: inline-block;
   font-size: 22px;
   font-weight: 500;
`

export const P = styled.p`
   font-size: 14px;
   font-weight: 500;
`

export const HumidityWindStyle = styled.div<{
   transform: string
   $padding: string
   $flex: string
}>`
   display: flex;
   align-items: center;
   width: 50%;
   padding: ${({ $padding }) => $padding};
   justify-content: ${({ $flex }) => $flex};
   transform: ${({ transform }) => transform};
   transition: transform 1s ease;
`
export const I = styled.i.attrs<{ className: IconName }>(({ className }) => ({
   className: className,
}))`
   font-size: 56px;
   margin-right: 10px;
`
