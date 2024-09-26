import styled from 'styled-components'

export const WeatherContainer = styled.div`
   text-align: center;
   margin: 40px 0;
   overflow: hidden;
`
export const Image = styled.img`
   width: 60%;
`

export const Temperature = styled.p`
   position: relative;
   font-size: 64px;
   line-height: 1;
   font-weight: 700;
   margin: 20px 0 6px -30px;
`

export const Span = styled.span`
   position: absolute;
   font-size: 24px;
   margin-left: 4px;
`

export const Description = styled.p`
   font-size: 22px;
   font-weight: 500;
   text-transform: capitalize;
`
