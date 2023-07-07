import React, { useState } from "react";
import { SidebarData } from "./SidebarData";
import { Link } from 'react-router-dom';
import  CloseIcon from '@mui/icons-material/Close';
import './Sidebar.scss'

const Sidebar = ({showSidebar, sidebar}) => {
    
  return (
    <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
      <ul className="nav-menu-items" onClick={showSidebar}>
        <li className="navbar-toggle">
          <Link to="#" className="menu-icon">
            <CloseIcon style={{ color: "#f5f5f5" }} />
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
          );
        })}
      </ul>
    </nav>
  );
};

export default Sidebar;