import React, { useState } from "react"
import * as AiIcons from "react-icons/ai"
import { Link } from "react-router-dom"
import "../styles/App.css"
import { IconContext } from "react-icons"
import * as IoIcons from "react-icons/io"
import { MdMenuBook } from "react-icons/md"

const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Billing",
    path: "/billing",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
  },
]

function Navbar({
  toggleSidebar,
}: {
  toggleSidebar: (active: boolean) => void
}) {
  const [sidebar, setSidebar] = useState(false)

  const showSidebar = () => {
    setSidebar(!sidebar)
    toggleSidebar(!sidebar)
  }

  return (
    <>
      <IconContext.Provider value={{ color: "undefined" }}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <button onClick={showSidebar}>
              <MdMenuBook />
            </button>
          </Link>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  )
}

export default Navbar
