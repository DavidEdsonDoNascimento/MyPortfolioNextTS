import styled from 'styled-components';
import { theme } from '../../theme';

export const Container = styled.div`
  width: 100%;
  min-height: 680px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: ${theme.colors.blue700};
  color: ${theme.colors.white900};
  @media screen and (max-width: 750px) {
    padding: 100px 0;
  }
  .wrapper {
    width: 1200px;
    display: flex;
    justify-content: center;
    align-items: center;
    .bg-perfil {
      width: 40%;
      padding: 0 0.5px;
      border-radius: 2%;
      background-color: ${props => props.theme.colors.blue700};
      background-image: linear-gradient(45deg, ${props => props.theme.colors.salmon300}, ${props => props.theme.colors.salmon300});
      transition: all 0.5s ease-in-out;
      
      .perfil {
        border-radius: 2%;
      }
      
      :hover {
        width: 40%;
        filter: grayscale(30%) drop-shadow(0 0 10px black);
      }
    }
    .content {
      width: 60%;
      h2 {
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        font-size: 2.5rem;
        margin-bottom: 30px;
        svg {
          color: ${props => props.theme.colors.salmon300};
        }
      }
    
      p {
        width: 100%;
        font-size: 1.1rem;
        text-align: justify;
        padding: 0 15px;
      }
    
      .buttons {
        display: flex;
        justify-content: space-between;
        @media screen and (max-width: 750px) {
          flex-direction: column;
          justify-content: center;
          a {
            width: auto;
            margin-bottom: 0;
          }
        }
      }
    }
    @media screen and (max-width: 750px) {
      flex-direction: column;
      .bg-perfil {
        display: none;
      }
      .content {
        width: 100%;
      }
    }
  }
`;