import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Routes from "./Routes/Routes.jsx";
import AuthProvider from "./Provider/AuthProvider.jsx";
import {  HelmetProvider } from "react-helmet-async";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="max-w-screen-xl mx-auto">
      <AuthProvider>
        <HelmetProvider>
          <RouterProvider router={Routes} />
        </HelmetProvider>
      </AuthProvider>
    </div>
  </React.StrictMode>
);
