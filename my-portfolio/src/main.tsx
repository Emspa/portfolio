/** @format */


import ReactDOM from "react-dom/client";

import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Router";
import React from "react";





ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    
      <RouterProvider router={router}></RouterProvider>

  </React.StrictMode>
);
