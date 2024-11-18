"use client";

import { useState, createContext, useContext } from "react";

export const ActiveSectionContext = createContext(null);

const ActiveSectionProvider = ({ children }) => {
  const [activeSection, setActiveSection] = useState("#home");
  const [lastClickTime, setLastClickTime] = useState(0);

  return (
    <ActiveSectionContext.Provider
      value={{
        setActiveSection,
        activeSection,
        lastClickTime,
        setLastClickTime,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
};
export default ActiveSectionProvider;

export const useActiveSection = () => {
  const context = useContext(ActiveSectionContext);

  if (context === null) {
    throw new Error("Context must be used within provider");
  }

  return context;
};
