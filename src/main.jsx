import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { RouterProvider } from 'react-router-dom'
import routers from './routes/route.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routers}>
    <App />
    </RouterProvider>
  </React.StrictMode>,
)
