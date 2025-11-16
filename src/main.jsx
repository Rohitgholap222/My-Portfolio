import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "./App.css";
import { RouterProvider } from 'react-router-dom';
import router from './router/routes.jsx';


createRoot(document.getElementById('root')).render(
  <>
    {/* <App /> */}
    <RouterProvider router={router} />
  </>,
)
