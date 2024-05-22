import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { RouterProvider } from 'react-router-dom'
import routers from './routes/route.jsx'
import { HelmetProvider } from 'react-helmet-async'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <HelmetProvider>
   <RouterProvider router={routers}>
    <App />
    </RouterProvider>
   </HelmetProvider>
  </React.StrictMode>,
)
