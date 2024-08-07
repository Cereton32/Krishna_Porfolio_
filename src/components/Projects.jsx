import React, { useContext, useState } from 'react';
import { PortfolioContext } from '../context/PortfolioContext';
import ProjectCards from './Cards/ProjectCards';
import styled from 'styled-components';

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  width: 80%;
  max-width: 600px;
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  justify-content: center;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }
`;

const Projects = () => {
  const { portfolioData } = useContext(PortfolioContext);
  const [modalState, setModalState] = useState({ state: false, project: null });

  const handleOpenModal = (project) => {
    setModalState({ state: true, project });
  };

  const handleCloseModal = () => {
    setModalState({ state: false, project: null });
  };

  return (
    <section>
      <h2>Projects</h2>
      <ProjectGrid>
        {portfolioData.projects.map((project, index) => (
          <ProjectCards key={index} project={project} setOpenModal={handleOpenModal} />
        ))}
      </ProjectGrid>
      {modalState.state && (
        <Modal>
          <ModalContent>
            <button onClick={handleCloseModal}>Close</button>
            <h3>{modalState.project.title}</h3>
            <img src={modalState.project.image} alt={modalState.project.title} style={{ width: '100%', height: 'auto' }} />
            <p>{modalState.project.description}</p>
          </ModalContent>
        </Modal>
      )}
    </section>
  );
};

export default Projects;
