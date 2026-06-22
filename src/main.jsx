import emailjs from '@emailjs/browser';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import "./App.css";
import router from './router/routes.jsx';

// Initialize EmailJS
emailjs.init(import.meta.env.VITE_EMAIL_PUBLIC_KEY);

AOS.init({
  duration: 800,
  once: true,
  easing: 'ease-out-quad',
});


createRoot(document.getElementById('root')).render(
  <>
    {/* <App /> */}
    <RouterProvider router={router} />
  </>,
)
