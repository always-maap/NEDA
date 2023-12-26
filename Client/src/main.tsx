import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import Landing from "./routes/landing";
import Login from "./routes/login";
import Verify from "./routes/verify";
import EditProfile from "./routes/edit-profile";
import DiscoverySettings from "./routes/discovery-settings";
import Home from "./routes/home";
import Recommendation from "./routes/recommendation";
import Profile from "./routes/profile";

const router = createBrowserRouter([
  {
    path: "/landing",
    element: <Landing />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/verify",
    element: <Verify />,
  },
  {
    path: "/edit-profile",
    element: <EditProfile />,
  },
  {
    path: "/",
    element: <Home />,
    children: [
      { path: "/recommendation", element: <Recommendation /> },
      { path: "/discovery-settings", element: <DiscoverySettings /> },
      { path: "/profile", element: <Profile /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
