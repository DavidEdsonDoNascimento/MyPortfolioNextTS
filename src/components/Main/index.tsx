import { About } from '@components/About';
import { Contact } from '@components/Contact';
import { Habilidade } from '@components/Habilidade';
import { Container } from './styles';

export const Main = () => {
  return (
    <Container>
      <About />
      <Habilidade />
      <Contact />
    </Container>
  );
};