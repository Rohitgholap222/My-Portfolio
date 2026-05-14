import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "./App.css";
import { RouterProvider } from 'react-router-dom';
import router from './router/routes.jsx';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
  duration: 1000,
  once: true,
});


createRoot(document.getElementById('root')).render(
  <>
    {/* <App /> */}
    <RouterProvider router={router} />
  </>,
)
