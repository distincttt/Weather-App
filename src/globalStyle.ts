import { createGlobalStyle } from 'styled-components'

import BackgroundImg from '/images/background.jpg'

export const GlobalStyle = createGlobalStyle`
*{
margin:0;
padding:0;
box-sizing:border-box;
font-family: "Poppins", sans-serif;
}

body {
display:flex;
justify-content:center;
align-items:center;
min-height:100vh;
background :url('${BackgroundImg}');
background-size:cover;
background-position:center;
}
`
