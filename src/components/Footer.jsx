import React from 'react';

const Footer = () => {
  const footerstyle = {
    backgroundColor: '#afdde5',
    color: 'black', // Set text color to black
    padding: '10px 20px', // Add padding if needed
    borderBottom: '1px solid #ddd', // Optional border
    /* Add any other styles you need */
  };

  return (
    <footer className="footer" style={footerstyle}>
      <p>© 2024 Krishna Jodha Portfolio</p>
      <p>All right reserved to @Abhishek kumar</p>
    
    </footer>
  );
};

export default Footer;
