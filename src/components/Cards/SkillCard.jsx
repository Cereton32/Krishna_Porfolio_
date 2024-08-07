import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
    width: 350px;
    border-radius: 10px;
    box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
    padding: 12px 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    transition: all 0.3s ease-in-out;
    border: 0.1px solid #854CE6;
    &:hover {
        box-shadow: 0px 0px 20px rgba(0,0,0,0.2);
        transform: translateY(-5px);
    }
`;

const Image = styled.img`
    height: 60px;
    width: 60px;
    border-radius: 10px;
`;

const Title = styled.h3`
    font-size: 18px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_primary};
    text-align: center;
`;

const Description = styled.p`
    font-size: 14px;
    color: ${({ theme }) => theme.text_secondary};
    text-align: center;
`;

const SkillCard = ({ skill }) => {
    return (
        <Card>
            <Image src={skill.image} alt={skill.name} />
            <Title>{skill.name}</Title>
            <Description>{skill.description}</Description>
        </Card>
    );
};

export default SkillCard;
