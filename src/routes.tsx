import { RouteObject } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import AboutMe from './pages/AboutMe';
import ContactMe from './pages/ContactMe';
import ErrorPage from './pages/ErrorPage';
import Hello from './pages/Hello';
import ProjectDetails from './pages/ProjectDetails';
import Projects from './pages/Projects';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <Hello /> },
      { path: 'about-me', element: <AboutMe /> },
      { path: 'projects', element: <Projects /> },
      { path: 'projects/:id', element: <ProjectDetails /> },
      { path: 'contact-me', element: <ContactMe /> },
      { path: '*', element: <ErrorPage /> },
    ],
  },
];
