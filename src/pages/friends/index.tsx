import Image from 'next/image';
import { Container } from './styles';

const friends = () => {
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