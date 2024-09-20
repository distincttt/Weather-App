import { createRoot } from "react-dom/client";
import { createGlobalStyle } from "styled-components";
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";

import App from "./App/App.tsx";

import BackgroundImg from "../src/images/background.jpg";

const GlobalStyle = createGlobalStyle`
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
`;

createRoot(document.getElementById("root")!).render(
   <Provider store={store}>
      <GlobalStyle />
      <App />
   </Provider>
);
