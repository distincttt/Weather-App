import styled from 'styled-components'

export const WeatherWrapperContainer = styled.div<{ height: string }>`
  position: relative;
  width: 400px;
  height: ${({ height }) => height};
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(30px);
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  padding: 20px;
  color: #fff;
  transition: height 0.6s ease;
`
