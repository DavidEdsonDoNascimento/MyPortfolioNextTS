import styled from 'styled-components';

export const Container = styled.nav`
  width: 100%;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 999;
  background-color: ${props => props.theme.colors.blue700};
  backdrop-filter: blur(5px);
  .wrapper {
    max-width: 1200px;
    width: 1200px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media screen and (max-width: 1215px) {
      width: 100%;
      padding: 0 15px;
    }
    span {
      font-size: 2rem;
      font-weight: bold;
    }
    button {
      background: none;
      border: none;
      cursor: pointer;
    }
    .menu {
      display: flex;
      a {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        border: none;
        font-size: 1.5rem;
        margin-left: 15px;
        background-color: unset;
        color: ${props => props.theme.colors.gray200};
        cursor: pointer;
        transition: all ease-in-out 0.3s;
        :hover {
          filter: drop-shadow(0 0 3px ${props => props.theme.colors.orange800});
        }
      }
    }
    @media screen and (max-width: 725px) {
      .menu {
        display: none;
      }
    }
  }
`;
