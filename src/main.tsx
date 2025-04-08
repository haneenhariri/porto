import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layout/MainLayout.tsx";
import Hello from "./pages/Hello.tsx";
import AboutMe from "./pages/AboutMe.tsx";
import Projects from "./pages/Projects.tsx";
import ContactMe from "./pages/ContactMe.tsx";
import ProjectDetails from "./pages/ProjectDetails.tsx";
import ErrorPage from "./pages/ErrorPage.tsx";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Hello />,
      },
      {
        path: "about-me",
        element: <AboutMe />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "projects/:id",
        element: <ProjectDetails />,
      },
      {
        path: "contact-me",
        element: <ContactMe />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>
);
