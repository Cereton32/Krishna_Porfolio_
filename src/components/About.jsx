import React, { useContext } from "react";
import { PortfolioContext } from "../context/PortfolioContext";
import KrishnaPic from '../assets/krishna_pic.jpeg'; 
import styled, { keyframes } from 'styled-components';

// Keyframes for the background animation
const moveBackground = keyframes`
  0% { background-position: 0% 0%; }
  100% { background-position: 100% 100%; }
`;

// Keyframes for the image animation
const scaleUp = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
`;

// Keyframes for the text animation
const fadeInOut = keyframes`
  0% { opacity: 0; transform: translateX(-20px); }
  50% { opacity: 1; transform: translateX(0); }
  100% { opacity: 0; transform: translateX(20px); }
`;

// Styled component for the content with animated background
const ContentWrapper = styled.div`
  position: relative;
  padding: 20px;
  background: linear-gradient(45deg, #0fa4af, #00d2ff);
  background-size: 200% 200%;
  animation: ${moveBackground} 15s ease infinite;
  border-radius: 15px;
  overflow: hidden;
  text-align: left;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

// Styled component for the image with animation
const AboutImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 4px solid #ffffff; 
  object-fit: cover;
  animation: ${scaleUp} 5s ease-in-out infinite;

  @media (max-width: 768px) {
    width: 150px;
    height: 150px;
  }
`;

// Styled component for animated text
const AnimatedText = styled.span`
  display: inline-block;
  animation: ${fadeInOut} 3s ease-in-out infinite;
  font-size: 44px;
  color: white;

  @media (max-width: 768px) {
    font-size: 36px;
  }

  @media (max-width: 480px) {
    font-size: 28px;
  }
`;

// Styled component for the buttons
const Button = styled.a`
  display: inline-block;
  background: linear-gradient(45deg, #1e90ff, #00bfff);
  color: #ffffff;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  text-decoration: none;
  text-align: center;
  margin: 10px; /* Adds space around buttons */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: background 0.3s, transform 0.3s, box-shadow 0.3s;

  &:hover {
    background: linear-gradient(45deg, #00bfff, #1e90ff);
    transform: translateY(-3px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  }

  &:active {
    transform: translateY(-1px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

// GitHub button specific styles
const GitHubButton = styled(Button)`
  background: #333;
  color: #fff;
  margin: 10px 10px 10px 0; /* Adjust margin for the GitHub button */
  &:hover {
    background: #444;
  }
`;

// Power BI button specific styles
const PowerBIButton = styled(Button)`
  background: #f5a623;
  color: #ffffff;
  margin: 10px 0; /* Adjust margin for the Power BI button */
  &:hover {
    background: #e49300;
  }
`;

const About = () => {
  const { portfolioData } = useContext(PortfolioContext);

  return (
    <section className="about-section">
      <ContentWrapper>
        <AboutImage src={KrishnaPic} alt="Krishna" />
        <div>
          <p style={{ fontSize: '17px', textAlign: 'center' }}>
            Hi, I am
            <AnimatedText> Krishna Jodha </AnimatedText>.<br />
            I am a database engineer with a strong background in <b>database management</b>, <b>Power BI</b>, and <b>data analysis</b>. I'm passionate about optimizing data systems and turning data into actionable insights. Whether it's designing efficient database architectures or creating impactful data visualizations, I'm here to help. Let's dive into the world of data and make it work for us!
          </p>
          <Button href="https://i.ibb.co/mFbskk6/Krishna-PCE21-IT030.jpg" target="_blank" rel="noopener noreferrer">
            Check Resume
          </Button>
          <GitHubButton href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            View GitHub
          </GitHubButton>
          <PowerBIButton href=" https://app.powerbi.com/reportEmbed?reportId=3207e67e-5aed-40f2-a0dd-a089230a0a2e&autoAuth=true&ctid=84378c14-831d-4c49-a085-aa6c8290b732
            
            " target="_blank" rel="noopener noreferrer">
            View Latest Power BI Projects
          </PowerBIButton>
        </div>
      </ContentWrapper>
    </section>
  );
};

export default About;
