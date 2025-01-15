import React from "react"
import Billing from "./routes/Billing"
import Home from "./routes/Home"
import Navbar from "./components/Navbar"
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"
import "./styles/App.css"

const AppLayout: React.FC = () => (
  <>
    <Navbar />
    <Outlet />
  </>
)

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "billing",
        element: <Billing />,
      },
    ],
  },
])

const App: React.FC = () => {
  return <RouterProvider router={router} />
}

export default App
