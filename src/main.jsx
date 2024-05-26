import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import { HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router-dom";
import AuthProvider from "./context/authProvider.jsx";
import routers from "./routes/route.jsx";
import {QueryClient,QueryClientProvider} from '@tanstack/react-query'


const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
    <QueryClientProvider client={queryClient}>
    <HelmetProvider>
        <RouterProvider router={routers}>
          <App />
        </RouterProvider>
      </HelmetProvider>
    </QueryClientProvider>      
    </AuthProvider>
  </React.StrictMode>
);
