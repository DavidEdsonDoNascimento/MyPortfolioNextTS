import { SocialNetworks } from '@utils/SocialNetworks';
import { Container } from './styles';

export const Header = () => {
  return (
    <Container>
      <div className='wrapper'>
        <div>
          <h3>Buenas!</h3>
          <span>Me chamo <a href={SocialNetworks.linkedin.link} target="_blank" rel="noreferrer"><b>{SocialNetworks.linkedin.name}</b></a>,</span>
          <p>sou Desenvolvedor FullStack JavaScript.</p>
        </div>
      </div>
    </Container>
  );
};