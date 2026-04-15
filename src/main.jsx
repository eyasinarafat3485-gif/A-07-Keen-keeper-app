import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router/dom';
import { router } from './routes/Routes';
import { ToastContainer } from 'react-toastify';
import FriendConProvider from './context/FriendConProvider';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FriendConProvider>

      <RouterProvider router={router} />
      <ToastContainer />

    </FriendConProvider>
  </StrictMode>
)
