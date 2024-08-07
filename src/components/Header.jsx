import React, { useContext } from 'react';
import { PortfolioContext } from '../context/PortfolioContext';
import { Link } from 'react-scroll'; 

const Header = () => {
  const { portfolioData } = useContext(PortfolioContext);

  if (!portfolioData) {
    return <div>Loading...</div>; // Add a fallback for undefined data
  }

  // Inline styles for the header
  const headerStyle = {
    backgroundColor: '#afdde5',
    color: 'black', // Set text color to black
    padding: '10px 20px', // Add padding if needed
    borderBottom: '1px solid #ddd', // Optional border
    /* Add any other styles you need */
  };

  return (
    <header style={headerStyle}>
      <nav>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li><Link to="about" smooth={true} duration={500}>Home</Link></li>
          <li><Link to="about" smooth={true} duration={500}>About</Link></li>
          <li><Link to="skills" smooth={true} duration={500}>Skills</Link></li>
          <li><Link to="experience" smooth={true} duration={500}>Experience</Link></li>
          <li><Link to="projects" smooth={true} duration={500}>Projects</Link></li>
          <li><Link to="education" smooth={true} duration={500}>Education</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
