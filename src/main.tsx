import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from './layout/MainLayout.tsx'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout/>,
    children :[
      {

      }
    ]
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider  router={routes}/>
  </StrictMode>,
)
