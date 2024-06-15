import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import ErrorPage from "./error-page.tsx";
import Dashboard from "./components/Dashboard.tsx";
import DashboardModules from "./components/DashboardModules.tsx";
import GenerateCodeSnippet from "./components/GenerateCodeSnippet.tsx";
import Documents from "./components/Documents.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "/dashboard/home",
        element: <DashboardModules />
      },
      {
        path: "/dashboard/create",
        element: <GenerateCodeSnippet />
      },
      {
        path: "/dashboard/documents",
        element: <Documents />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
