import { Tooltip } from '@shared/Tooltip';
import {
  RiWechatFill,
  RiWhatsappFill,
  RiLinkedinBoxFill,
  RiInstagramFill,
  RiMailFill,
  RiGithubFill
} from 'react-icons/ri';
import { Container } from './styles';

export const Contact = () => {
  return (
    <Container id='contato'>
      <div className='wrapper'>
        <h2><RiWechatFill />Contato</h2>
        <p>Caso queira entrar em contato comigo,<br /> pode me chamar por onde preferir.</p>
        <div className='links'>
          <div className='first-group'>
            <a href="https://wa.me/5547997011323?text=Olá%20David%20Gostaria%20de%20trocar%20uma%20ideia%20contigo!"
              target='_blank' rel='noreferrer'>
              <Tooltip item={<RiWhatsappFill />} text="Whatsapp" /></a>
            <a href="https://github.com/DavidEdsonDoNascimento"
              target='_blank' rel='noreferrer'>
              <Tooltip item={<RiGithubFill />} text="Github" /></a>
          </div>
          <div className='second-group'>
            <a href="https://www.linkedin.com/in/david-edson-05989a177/"
              target='_blank' rel='noreferrer'>
              <Tooltip item={<RiLinkedinBoxFill />} text="LinkedIn" /></a>
            <a href="https://www.instagram.com/davidedsonoficial/"
              target='_blank' rel='noreferrer'>
              <Tooltip item={<RiInstagramFill />} text="Instagram" /></a>
            <a href="mailto:david.contato.tec@gmail.com?subject=Olá gostaria de trocar uma ideia contigo!"
              target='_blank' rel='noreferrer'>
              <Tooltip item={<RiMailFill />} text="E-mail" /></a>
          </div>
        </div>
      </div>
    </Container>
  );
};