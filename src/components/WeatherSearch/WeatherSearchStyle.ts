import styled from 'styled-components'
import { IconName } from 'boxicons'

interface BoxIconProps {
   className: IconName
   onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

export const WeatherSearchContainer = styled.form`
   position: relative;
   width: 100%;
   height: 55px;
   display: flex;
   align-items: center;

   i {
      position: absolute;
      left: 10px;
      font-size: 28px;
   }

   button {
      position: absolute;
      right: 0;
      width: 40px;
      height: 100%;
      background: transparent;
      border: none;
      outline: none;
      font-size: 28px;
      color: #fff;
      padding: 0 40px 0 5px;
      cursor: pointer;
   }
`

export const Input = styled.input`
   position: absolute;
   width: 100%;
   height: 100%;
   background: transparent;
   border: 2px solid rgba(255, 255, 255, 0.2);
   outline: none;
   border-radius: 10px;
   font-size: 22px;
   color: #fff;
   font-weight: 500;
   text-transform: uppercase;
   padding: 0 48px 0 42px;

   &::placeholder {
      color: #fff;
      text-transform: capitalize;
   }
`

export const I = styled.i.attrs<{ className: IconName }>((props) => ({
   className: props.className,
}))`
   position: absolute;
   left: 10px;
   font-size: 28px;
`

export const Button = styled.button.attrs<BoxIconProps>((props) => ({
   className: props.className,
   onClick: props.onClick,
}))`
   position: absolute;
   right: 0;
   width: 40px;
   height: 100%;
   background: transparent;
   border: none;
   outline: none;
   font-size: 28px;
   color: #fff;
   padding: 0 40px 0 5px;
   cursor: pointer;
`
