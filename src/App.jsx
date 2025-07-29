import React from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Hero1 from './pages/Hero1';
import Hero2 from './pages/Hero2';


const App = () => {
  const routes = createBrowserRouter([
  {path: "/", element: <Hero1 />},
  {path: "/hero1", element: <Hero2 />},
  ])
  return (
    <RouterProvider router={routes} />
  )
}

export default App