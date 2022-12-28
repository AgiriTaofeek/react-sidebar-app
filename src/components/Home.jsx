import React from 'react';
import Button from './UI/Button';
import { FaBars } from 'react-icons/fa';
import { useGlobalContext } from '../store/Context';

const Home = () => {
  const { openSidebar, openModal } = useGlobalContext();

  return (
    <main>
      <Button css="sidebar-toggle" onClick={openSidebar}>
        <FaBars />
      </Button>
      <Button css="btn" onClick={openModal}>
        Show Modal
      </Button>
    </main>
  );
};

export default Home;
