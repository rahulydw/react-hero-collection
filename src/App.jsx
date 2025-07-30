import React from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Hero1 from './pages/Hero1';
import Hero2 from './pages/Hero2';
import Hero3 from './pages/Hero3';

const App = () => {
  const routes = createBrowserRouter([
  {path: "/", element: <Hero1 />},
  {path: "/hero1", element: <Hero2 />},
  {path: "/hero2", element: <Hero3 />},
  ])
  return (
    <RouterProvider router={routes} />
  )
}

export default App