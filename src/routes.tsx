import React from 'react';
import { RouteObject } from 'react-router-dom';

const MainLayout = React.lazy(() => import('./components/layout/MainLayout'));
const AboutMe = React.lazy(() => import('./pages/AboutMe'));
const ContactMe = React.lazy(() => import('./pages/ContactMe'));
const ErrorPage = React.lazy(() => import('./pages/ErrorPage'));
const Hello = React.lazy(() => import('./pages/Hello'));
const ProjectDetails = React.lazy(() => import('./pages/ProjectDetails'));
const Projects = React.lazy(() => import('./pages/Projects'));

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Hello /> },
      { path: "about-me", element: <AboutMe /> },
      { path: "projects", element: <Projects /> },
      { path: "projects/:id", element: <ProjectDetails /> },
      { path: "contact-me", element: <ContactMe /> },
      { path: "*", element: <ErrorPage /> },
    ],
  },
];
