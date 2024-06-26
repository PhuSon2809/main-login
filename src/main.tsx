import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import { store } from '~/redux/configStore.ts'
import App from './App.tsx'

import 'react-day-picker/dist/style.css'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-creative'
import './index.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
  // </React.StrictMode>
)
