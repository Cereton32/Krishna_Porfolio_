import styled from 'styled-components';

export const Div = styled.div`
  /* Example styling, adjust as needed */
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  
  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
  }
`;
