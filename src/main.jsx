import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import { HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router-dom";
import AuthProvider from "./context/authProvider.jsx";
import routers from "./routes/route.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <RouterProvider router={routers}>
          <App />
        </RouterProvider>
      </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>
);
