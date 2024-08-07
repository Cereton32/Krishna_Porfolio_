// Education.js
import React, { useContext } from 'react';
import { PortfolioContext } from '../context/PortfolioContext';
import EducationCard from './Cards/EducationCard';
import styled from 'styled-components';

const EducationSection = styled.section`
  padding: 20px;
`;

const EducationContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Education = () => {
  const { portfolioData } = useContext(PortfolioContext);

  return (
    <EducationSection>
      <h2>Education</h2>
      <EducationContainer>
        {portfolioData.education.map((edu, index) => (
          <EducationCard
            key={index}
            education={{
              img: edu.img,
              institution: edu.institution,
              degree: edu.degree,
              year: edu.year,
              grade: edu.grade,
              desc: edu.desc,
              doc: edu.doc
            }}
          />
        ))}
      </EducationContainer>
    </EducationSection>
  );
};

export default Education;
