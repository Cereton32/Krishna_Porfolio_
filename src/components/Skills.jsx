import React, { useContext } from 'react';
import { PortfolioContext } from '../context/PortfolioContext';
import SkillCard from './Cards/SkillCard';
import styled from 'styled-components';

const Section = styled.section`
    padding: 20px;
`;

const CategoryTitle = styled.h2`
    font-size: 24px;
    color: ${({ theme }) => theme.text_primary};
    margin-bottom: 20px;
`;

const SkillCategoryContainer = styled.div`
    margin-bottom: 40px;
`;

const SkillsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
`;

const Skills = () => {
    const { portfolioData } = useContext(PortfolioContext);
    return (
        <Section>
            {portfolioData.skills.map((category, index) => (
                <SkillCategoryContainer key={index}>
                    <CategoryTitle>{category.title}</CategoryTitle>
                    <SkillsContainer>
                        {category.skills.map((skill, idx) => (
                            <SkillCard key={idx} skill={skill} />
                        ))}
                    </SkillsContainer>
                </SkillCategoryContainer>
            ))}
        </Section>
    );
};

export default Skills;
