import { Container } from './styles';

interface IProps {
  open?: boolean;
}

export const Menu = ({ open }: IProps) => {
  return (
    <Container style={{ transform: open ? 'translateX(0)' : 'translateX(+100%)' }}>
      <a href='#'
        onClick={() => window.scrollTo(0, 0)}>
        <span aria-label="home">
          INÍCIO
        </span>
      </a>
      <a href="#sobre">
        <span aria-label="about">
          SOBRE
        </span>
      </a>
      <a href="#skills">
        <span aria-label="skills">
          SKILLS
        </span>
      </a>
      <a href="#projetos">
        <span aria-label="projects">
          PROJETOS
        </span>
      </a>
      <a href="#contato">
        <span aria-label="contact">
          CONTATO
        </span>
      </a>
      <a href='https://www.canva.com/design/DADRCM05eGM/RUgPAEphQ8e8ExdYF9YgUg/view?utm_content=DADRCM05eGM&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton' target='_blank' rel='noreferrer'>
        CURRÍCULO
      </a>
    </Container>
  );
};
