import React from "react";
import ReactDOM from "react-dom/client";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import App from "./App";
import ErrorPage from "./error-page";
import Dashboard from "./routes/Dashboard";
import Document from "./components/Document";
import Documents from "./routes/Documents";
import CreateDocs from "./routes/CreateDocs";
import Login from "./routes/Login";
import Signup from "./routes/Signup";
import DashboardModules from "./components/DashboardModules";
import EditDocs from "./routes/EditDocs";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
      <Route path="dashboard" element={<Dashboard />}>
        <Route index element={<DashboardModules />} />
        <Route path="create" element={<CreateDocs />} />
        <Route path="documents" element={<Documents />} />
        <Route path="documents/:id" element={<Document />} />
        <Route path="documents/:id/edit" element={<EditDocs />} />
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
