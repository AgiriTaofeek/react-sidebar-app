import React, { useState, useContext } from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const [toggleModal, setToggleModal] = useState(false);

  const openSidebar = () => {
    setToggleSidebar(true);
  };

  const closeSidebar = () => {
    setToggleSidebar(false);
  };

  const openModal = () => {
    setToggleModal(true);
  };

  const closeModal = () => {
    setToggleModal(false);
  };
  return (
    <AppContext.Provider
      value={{
        toggleSidebar,
        toggleModal,
        openModal,
        openSidebar,
        closeModal,
        closeSidebar,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

//* Custom hook
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext };
