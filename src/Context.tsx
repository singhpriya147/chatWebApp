import { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [selectedContact, setSelectedContact] = useState(null);
  const [isMobileView, setIsMobileView] = useState(false);
  const handleContactSelect = (contact) => {
    setSelectedContact(contact);
  };
  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768); // Adjust breakpoint as needed
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <AppContext.Provider
      value={{
        selectedContact,
        setSelectedContact,
        handleContactSelect,
        isMobileView,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export default AppProvider;
// Custom Hook to Use Context
export const useAppContext = () => useContext(AppContext);
