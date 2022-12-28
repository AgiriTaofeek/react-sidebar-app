import { useState } from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home';
import Modal from './components/Modal';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <>
      {ReactDOM.createPortal(
        <Modal />,
        document.querySelector('#modal-portal')
      )}
      {ReactDOM.createPortal(
        <Sidebar />,
        document.querySelector('#sidebar-portal')
      )}
      <Home />
    </>
  );
}

export default App;
