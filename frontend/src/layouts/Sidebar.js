import React, { useState } from 'react';
import { SidebarData } from './SidebarData';
import { Link, useLocation } from 'react-router-dom';
import logo from '../img/logo.png';

function Sidebar() {
  const [activeItem, setActiveItem] = useState('');

  return (
    <div className="Sidebar">
      <div className="logoContainer">
        <img src={logo} alt="Logo" className="logoImage" />
      </div>
      <ul className="SidebarList">
        {SidebarData.map((val, key) => {
          return (
            <li
              key={key}
              className={`row ${activeItem === val.link ? 'active' : ''}`}
            >
              <Link
                to={val.link}
                className="link"
                onClick={() => setActiveItem(val.link)}
              >
                <div id="icon">
                  {val.icon}
                </div>
                <div id="title">
                  {val.title}
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Sidebar;
