import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './styles/global.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store/store'
import { APP_URL } from './lib/routes.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <BrowserRouter basename={process.env.NODE_ENV === 'production' ? APP_URL.app : '/'}>
      <App />
    </BrowserRouter>
  </Provider >
)
