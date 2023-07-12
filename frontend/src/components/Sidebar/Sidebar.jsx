import React from "react";
import { SidebarData } from "./SidebarData";
import { Link } from 'react-router-dom';
import  CloseIcon from '@mui/icons-material/Close';
import './Sidebar.scss'

const Sidebar = ({showSidebar, sidebar}) => {
    
  return (
    <>
      <div className={sidebar ? "nav-menu-wrapper open" : "nav-menu-wrapper"} onClick={showSidebar}></div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items">
          <li className="navbar-toggle">
            <Link to="#" className="menu-icon">
              <CloseIcon style={{ color: "#f5f5f5" }} onClick={showSidebar}/>
            </Link>
          </li>
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName} onClick={showSidebar}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
    
  );
};

export default Sidebar;