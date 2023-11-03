import { About } from '@components/About';
import { Contact } from '@components/Contact';
import { Habilidade } from '@components/Habilidade';
import { Container } from './styles';
import { Projects } from '@components/Projects';

export const Main = () => {
  return (
    <Container>
      <About />
      <Habilidade />
      <Projects />
      <Contact />
    </Container>
  );
};
