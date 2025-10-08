import { createBrowserRouter, RouterProvider } from "react-router-dom"
import AppLayout from "./components/layouts/AppLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import ErrorPage from "./pages/ErrorPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
      ]
    },
  ]);

  return <RouterProvider router={router} />
}

export default App