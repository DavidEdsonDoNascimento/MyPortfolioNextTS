import { Content } from '@utils/Contents';
import { SocialNetworks } from '@utils/SocialNetworks';
import { Container } from './styles';

export const About = () => {
  return (
    <Container>
      <div id='sobre' className='wrapper'>
        <div className='content'>
          <h2>Sobre</h2>
          <p>{Content.about()}</p>
          <div className='buttons'>
            <a href={SocialNetworks.linkedin.link} className='button-link'>LinkedIn</a>
            <a href={SocialNetworks.github.link} className='button-link'>Github</a>
          </div>
        </div>
        <div className='bg-perfil'>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/6mRzghtdwLg?si=MWS4L1yEiUtcj2Hq"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            ></iframe>
        </div>
      </div>
    </Container>
  );
};
