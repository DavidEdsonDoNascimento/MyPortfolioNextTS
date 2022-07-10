import styled from 'styled-components';

export const Container = styled.div`
  a {
    background: none;
    border: none;
    cursor: pointer;
    .logo {
      width: 180px;
      filter: drop-shadow(0 0 8px black) brightness(100%);
      transition: ease-in-out all 0.5s;
      :hover {
        width: 185px;
        filter: drop-shadow(0 0 16px black) brightness(140%);
      }
    }
  } 
`;