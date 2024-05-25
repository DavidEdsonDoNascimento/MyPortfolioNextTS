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
    padding: 80px 0;
  }
  .wrapper {
    width: 1200px;
    display: flex;
    justify-content: center;
    align-items: center;
    .bg-perfil {
      iframe {
        padding: 15px;
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
        margin-top: 40px;
      }
      .content {
        width: 100%;
      }
    }
  }
`;
