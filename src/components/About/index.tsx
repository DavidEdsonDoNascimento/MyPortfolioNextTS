import { Content } from '@utils/Contents';
import { SocialNetworks } from '@utils/SocialNetworks';
import Image from 'next/image';
import { Container } from './styles';

export const About = () => {
  return (
    <Container id='sobre'>
      <div className='wrapper'>
        <div className='bg-perfil'>
          <Image
            src={'/imgs/eu-e-a-mona-chopera.jpeg'}
            alt='Logotipo com as letras Dev'
            className='perfil'
            width={720}
            height={719}
          />
        </div>
        <div className='content'>
          <h2>Sobre</h2>
          <p>{Content.about()}</p>
          <div className='buttons'>
            <a href={SocialNetworks.linkedin.link} className='button-link'>LinkedIn</a>
            <a href={SocialNetworks.github.link} className='button-link'>Github</a>
          </div>
        </div>
      </div>
    </Container>
  );
};