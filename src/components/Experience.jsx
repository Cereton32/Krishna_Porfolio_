// Experience.js
import React, { useContext } from 'react';
import { PortfolioContext } from '../context/PortfolioContext';
import ExperienceCard from './Cards/ExperienceCard';

const Experience = () => {
  const { portfolioData } = useContext(PortfolioContext);

  return (
    <section>
      <h2>Experience</h2>
      {portfolioData.experience.map((exp, index) => (
        <ExperienceCard
          key={index}
          experience={{
            company: exp.company,
            role: exp.role,
            duration: exp.duration,
            description: exp.description,
            skills: exp.skills,
            img: exp.img,
            doc: exp.doc
          }}
        />
      ))}
    </section>
  );
};

export default Experience;
