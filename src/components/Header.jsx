import React, { useContext } from 'react';
import { PortfolioContext } from '../context/PortfolioContext';
import { Link } from 'react-scroll';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  background-color: #afdde5;
  color: black;
  padding: 10px 20px;
  border-bottom: 1px solid #ddd;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 1024px) {
    padding: 8px 15px;
  }

  @media (max-width: 768px) {
    padding: 5px 10px;
  }

  @media (max-width: 480px) {
    padding: 3px 5px;
  }
`;

const Nav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 20px;

  @media (max-width: 1024px) {
    gap: 15px;
  }

  @media (max-width: 768px) {
    gap: 10px;
  }

  @media (max-width: 480px) {
    gap: 5px;
  }
`;

const NavItem = styled.li`
  font-size: 16px;

  @media (max-width: 1024px) {
    font-size: 15px;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

const Header = () => {
  const { portfolioData } = useContext(PortfolioContext);

  if (!portfolioData) {
    return <div>Loading...</div>; // Add a fallback for undefined data
  }

  return (
    <HeaderWrapper>
      <Nav>
        <NavList>
          <NavItem><Link to="about" smooth={true} duration={500}>Home</Link></NavItem>
          <NavItem><Link to="about" smooth={true} duration={500}>About</Link></NavItem>
          <NavItem><Link to="skills" smooth={true} duration={500}>Skills</Link></NavItem>
          <NavItem><Link to="experience" smooth={true} duration={500}>Experience</Link></NavItem>
          <NavItem><Link to="projects" smooth={true} duration={500}>Projects</Link></NavItem>
          <NavItem><Link to="education" smooth={true} duration={500}>Education</Link></NavItem>
        </NavList>
      </Nav>
    </HeaderWrapper>
  );
};

export default Header;
