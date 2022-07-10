import { NextPage } from 'next';
import Image from 'next/image';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  min-height: 740px;
  display: flex;
  justify-content: center;
  background-color: ${props => props.theme.colors.white900};
  @media screen and (max-width: 700px) {
    padding: 100px 0;
  }
  .wrapper {
    width: 1200px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const friends: NextPage = () => {
  return (
    <Container id='skills'>
      <div className='wrapper'>
        <div className='content'>
          <q>Para que inimigos se no mundo temos seres chamados Julio e Carlos para nos apedrejar por fraude fiscal?</q>
          <Image
            src="/imgs/oi-grupo.jpg"
            width={600}
            height={600}
          />
        </div>
      </div>
    </Container >
  );
};

export default friends;