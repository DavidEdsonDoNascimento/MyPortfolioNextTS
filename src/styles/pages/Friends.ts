import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  background-color: ${props => props.theme.colors.blue700};
  color: ${props => props.theme.colors.white900};
  @media screen and (max-width: 700px) {
    padding: 100px 0;
  }
  .wrapper {
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .content {
    width: 100%;
    justify-content: center;
    align-items: center;
    padding: 20px;

    q {
      font-size: 2rem;
    }
    button {
      font-size: 1rem;
      width: 30vw;
      color: ${props => props.theme.colors.salmon300};
    }

    svg {
      padding: 5px;
      width: 140px;
      height: auto;
      color: ${props => props.theme.colors.salmon300};
      transition: ease-in-out all 0.5s;
      :hover {
        width: 150px;
        filter: drop-shadow(0 0 10px black) brightness(130%);
      }
      @media screen and (max-width: 840px) {
        width: 110px;
        :hover {
          width: 115px;
          filter: drop-shadow(0 0 10px black) brightness(130%);
        }
      }
      @media screen and (max-width: 750px) {
        width: 80px;
        :hover {
          width: 85px;
          filter: drop-shadow(0 0 10px black) brightness(130%);
        }
      }

      @media screen and (max-width: 321px) {
        width: 70px;
        :hover {
          width: 75px;
          filter: drop-shadow(0 0 10px black) brightness(130%);
        }
      }
    }
  }
`;
