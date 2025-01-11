import React, { createContext, useState, useContext } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

// Create the context
const Context = createContext();

// Provider component
export const UserProvider = ({ children }) => {
  //console.log("Contexto iniciado!")
  const { siteConfig } = useDocusaurusContext();
  const bookCode = siteConfig.customFields.bookCode;
  const [userData, setUserData] = useState({
    id: null, // Example: dynamic links for the navbar
    bookCode: bookCode, 
    fetching: false, //Colocar mensagem de aguarde quando true 
  });

  return (
    <Context.Provider value={{ userData, setUserData }}>
      {children}
    </Context.Provider>
  );
};

export const useUserContext = () => {
  return useContext(Context);
};
