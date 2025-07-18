import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./ui/Layout";
import Home from "./pages/Home";
import AboutDetail from "./pages/AboutDetail";
import ProjectDetails from "./pages/ProjectDetails";
import ContactDetails from "./pages/ContactDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "aboutdetail", element: <AboutDetail /> },
      { path: "projectdetail", element: <ProjectDetails /> },
      { path: "contactdetail", element: <ContactDetails /> },
    ],
  },
]);

const App = () => <RouterProvider router={router} />;

export default App;
