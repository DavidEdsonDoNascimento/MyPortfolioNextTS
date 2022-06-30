import styled from 'styled-components';

export const Container = styled.footer`
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  font-size: 2.5rem;
  background-image: linear-gradient(-125deg, ${props => props.theme.colors.secondary}, ${props => props.theme.colors.primary});
  
  button {
    background: none;
    border: none;
    cursor: pointer;
    
    .logo {
      width: 250px;
      filter: drop-shadow(0 0 3px black) brightness(100%);
      transition: all ease-in-out 0.5s;
  
      :hover {
        width: 270px;
        filter: drop-shadow(0 0 5px black) brightness(130%);
      }
    }
  }
  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    span {
      display: flex;
      align-items: center;
      font-size: 1rem;
    }
    p {
      display: flex;
      align-items: center;
      font-size: 15px;
      font-style: italic;
    }
    .made-by {
      display: flex;
      text-align: center;
      @media screen and (max-width: 441px) {
        flex-direction: column;
      }
      .name {
        margin: 0 5px;
      }
      a {
        margin: 0;
        font-weight: 500;
      }
      p {
        align-items: baseline;
        a {
          display: flex;
          margin-left: 5px;
        }
      }
      svg {
        margin-left: 5px;
      }
    }
  }
`;