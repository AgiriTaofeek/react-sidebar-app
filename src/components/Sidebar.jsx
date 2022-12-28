import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { social, links } from '../Data';
import Button from './UI/Button';
import { useGlobalContext } from '../store/Context';

const Sidebar = () => {
  const { closeSidebar, toggleSidebar } = useGlobalContext();
  return (
    <aside className={`sidebar ${toggleSidebar ? 'show-sidebar' : ''} `}>
      <div className="sidebar-header">
        <img src="/vite.svg" alt="logo" className="logo" />
        <Button css="close-btn" onClick={closeSidebar}>
          <FaTimes />
        </Button>
      </div>
      <ul className="links">
        {links.map((link) => {
          const { id, url, text, icon } = link;
          return (
            <li key={id}>
              <a href={url}>
                {icon} {text}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="social-icons">
        {social.map((item) => {
          const { id, url, icon } = item;
          return (
            <li key={id}>
              <a href={url}>{icon}</a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
