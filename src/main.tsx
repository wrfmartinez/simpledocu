import ReactDOM from "react-dom/client";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
// import { Auth0Provider } from "@auth0/auth0-react";
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
  // Creates a route config from JSX elements rather than objects (React Router converts them to objects under the hood)
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
      <Route path="dashboard" element={<Dashboard />}>
      {/* index prop is the default child route in this case: /dashboard so it will render w/ the /dashboard route */}
        <Route index element={<DashboardModules />} />
        <Route path="create" element={<CreateDocs />} />
        <Route path="documents" element={<Documents />} />
        <Route path="documents/:id" element={<Document />} />
        <Route path="documents/:id/edit" element={<EditDocs />} />
      </Route>
      {/* WILDCARD route for any URL path that hasn't been matched by other routes */}
      <Route path="*" element={<ErrorPage />} />
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <Auth0Provider
  //   domain={import.meta.env.VITE_DOMAIN}
  //   clientId={import.meta.env.VITE_CLIENT_ID}
  //   authorizationParams={{
  //     redirect_uri: window.location.origin
  //   }}
  // >
    <RouterProvider router={router} />
  // </Auth0Provider>
);
