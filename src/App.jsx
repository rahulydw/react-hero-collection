import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./pages/Layout";
import Hero1 from "./pages/Hero1";
import Hero2 from "./pages/Hero2";
import Hero3 from "./pages/Hero3";
import Hero4 from "./pages/Hero4";
import Hero5 from './pages/hero5';

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Hero1 /> },
      { path: "/hero1", element: <Hero1 /> },
      { path: "/hero2", element: <Hero2 /> },
      { path: "/hero3", element: <Hero3 /> },
      { path: "/hero4", element: <Hero4 /> },
      { path: "/hero5", element: <Hero5 /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={routes} />;
}
