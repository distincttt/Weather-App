import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './redux/store.ts'

import { App } from './App/App.tsx'
import { GlobalStyle } from './globalStyle.ts'

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <GlobalStyle />
    <App />
  </Provider>,
)
