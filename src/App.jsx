import React from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Hero1 from './pages/Hero1';


const App = () => {
  const routes = createBrowserRouter([
  {path: "/", element: <Hero1 />},
  ])
  return (
    <RouterProvider router={routes} />
  )
}

export default App