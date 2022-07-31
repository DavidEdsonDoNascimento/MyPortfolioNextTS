import { NextPage } from 'next';
import { FcLike } from 'react-icons/fc';
import { Container } from '@styles/Foods';

const foods: NextPage = () => {

  return (
    <Container>
      <div className='wrapper'>
        <div className='content'>
          <h1>
            Controle de marmitas
          </h1>
          <table>
            <thead>
              <tr>
                <th>Pedido em:</th>
                <th>Atualizado em:</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
              </tr>
            </tbody>
          </table>
          <button id='btn-get-food' onClick={() => {
            alert('Em construção...');
          }}>
            <FcLike /> Peguei marmita
          </button>
        </div>
      </div>
    </Container>
  );
};

export default foods;
