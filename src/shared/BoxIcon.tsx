import React from 'react'
import { IconName } from 'boxicons'

interface BoxIconProps {
  name: IconName
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
  button?: boolean
}

export const BoxIcon: React.FC<BoxIconProps> = ({ name, onClick, button }): JSX.Element => {
  return (
    <>{button ? <button className={`${name}`} onClick={onClick} /> : <i className={`${name}`} />}</>
  )
}
