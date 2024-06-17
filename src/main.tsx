import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import ErrorPage from "./error-page.tsx";
import Dashboard from "./routes/Dashboard.tsx";
import DashboardModules from "./components/DashboardModules.tsx";
import Documents from "./routes/Documents.tsx";
import CreateDocs from "./routes/CreateDocs.tsx";

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
        path: "/dashboard",
        element: <DashboardModules />
      },
      {
        path: "/dashboard/create",
        element: <CreateDocs />
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
