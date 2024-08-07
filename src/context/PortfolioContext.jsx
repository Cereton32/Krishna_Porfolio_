// PortfolioContext.js
import React, { createContext, useState } from 'react';
import { constants } from '../data/Constants'; // Import your constants

export const PortfolioContext = createContext();

export const PortfolioProvider = ({ children }) => {
  const [portfolioData, setPortfolioData] = useState(constants);

  return (
    <PortfolioContext.Provider value={{ portfolioData, setPortfolioData }}>
      {children}
    </PortfolioContext.Provider>
  );
};
