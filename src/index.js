import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// 1 - Configurando o router:
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Company from "./routes/Company";
import Contact from "./routes/Contact";
import ErrorPage from "./routes/ErrorPage";
import Home from "./routes/Home";
import NewProject from "./routes/NewProject";
import Projects from "./routes/Projects";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/company",
        element: <Company />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/newproject",
        element: <NewProject />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
