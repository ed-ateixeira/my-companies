import { useState, createContext } from 'react';
import { ToastContainer } from 'react-toastify';

const GlobalContext = createContext({});

function GlobalContextProvider({ children }) {
  const [modal, setModal] = useState(null);

  function closeModal() {
    setModal(null);
  }

  function openModal(children = null) {
    setModal(children);
  }

  return (
    <GlobalContext.Provider value={{ openModal, closeModal }}>
      {children}
      {modal}
      <ToastContainer />
    </GlobalContext.Provider>
  )
}

export { GlobalContext, GlobalContextProvider }
