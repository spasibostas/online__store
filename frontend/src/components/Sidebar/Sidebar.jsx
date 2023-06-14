import React, { useState } from "react";
import { slide as Menu } from "react-burger-menu";
import './Sidebar.css'

export default props => {

    const [isOpen, setIsOpen] = useState(false)

    const handleOpenSidebar = () => {
        setIsOpen(prev => !prev)
    }

  return (
    // Pass on our props
    <Menu {...props} isOpen={isOpen} onOpen={handleOpenSidebar}>
      <a className="menu-item" href="/">
        Homepage
      </a>

      <a className="menu-item" href="/">
        About
      </a>

      <a className="menu-item" href="/">
        Contact
      </a>

      <a className="menu-item" href="/">
        Stores
      </a>
    </Menu>
  );
};