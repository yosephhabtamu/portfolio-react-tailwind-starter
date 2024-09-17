import Contact from "./Pages/contact";
import Home from "./Pages/home";
import Layout from "./Pages/layout";
import Portfolio from "./Pages/portfolio";
import About from "./Pages/about";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./Pages/notFound";
import PortfolioDetail from "./Pages/portfolioDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/contact", element: <Contact /> },
      {
        path: "/portfolio",
        element: <Portfolio />,
      },
      {
        path: "/portfolio/detail/:id",
        element: <PortfolioDetail />,
      },
      { path: "/about", element: <About /> },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
