import { Tooltip } from '@shared/Tooltip';
import {
  RiWechatFill,
  RiWhatsappFill,
  RiLinkedinBoxFill,
  RiInstagramFill,
  RiMailFill,
  RiGithubFill,
} from 'react-icons/ri';
import { SocialNetworks } from '@utils/SocialNetworks';
import { Container } from './styles';

export const Contact = () => {
  const emailLink = `mailto:${SocialNetworks.email.link}?subject=Oi%20David%20vi%20seu%20portfólio%20e%20gostaria%20de%20bater%20um%20papo%20contigo!`;

  return (
    <Container>
      <div id="contato" className="wrapper">
        <h2>
          <RiWechatFill />
          Contato
        </h2>
        <p>
          Precisa de um desenvolvedor?
          <br />
          Vamos trabalhar juntos.
          <br />
          Entre em contato:
        </p>
        <div className="links">
          <div className="first-group">
            <a
              href={SocialNetworks.whatsapp.link}
              target="_blank"
              rel="noreferrer"
            >
              <Tooltip item={<RiWhatsappFill />} text="Whatsapp" />
            </a>
            <a
              href={SocialNetworks.github.link}
              target="_blank"
              rel="noreferrer"
            >
              <Tooltip item={<RiGithubFill />} text="Github" />
            </a>
          </div>
          <div className="second-group">
            <a
              href={SocialNetworks.linkedin.link}
              target="_blank"
              rel="noreferrer"
            >
              <Tooltip item={<RiLinkedinBoxFill />} text="LinkedIn" />
            </a>
            <a
              href={SocialNetworks.instagram.link}
              target="_blank"
              rel="noreferrer"
            >
              <Tooltip item={<RiInstagramFill />} text="Instagram" />
            </a>
            <a href={emailLink} target="_blank" rel="noreferrer">
              <Tooltip item={<RiMailFill />} text="E-mail" />
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
};
