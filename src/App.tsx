import { createBrowserRouter, RouterProvider } from "react-router-dom"
import AppLayout from "./components/layouts/AppLayout";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import Doctors from "./pages/Doctors";
import DoctorPersonalInfo from "./components/Doctors/DoctorPersonalInfo";

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
          path: "/doctors",
          element: <Doctors />,
        },
        {
          path: "/doctors/:slug",
          element: <DoctorPersonalInfo />,
        },
      ]
    },
  ]);

  return <RouterProvider router={router} />
}

export default App