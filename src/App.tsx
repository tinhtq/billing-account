import React, { useState } from "react"
import Billing from "./routes/Billing"
import Home from "./routes/Home"
import Navbar from "./components/Sidebar"
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"
import "./styles/App.css"

const AppLayout: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const toggleSidebar = (active: boolean) => {
    setIsSidebarOpen(active)
  }

  return (
    <>
      <Navbar toggleSidebar={toggleSidebar} />
      <div className={isSidebarOpen ? "main-content shifted" : "main-content"}>
        <Outlet />
      </div>
    </>
  )
}

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
