import { useState } from 'react';
import { SocialNetworks } from '@utils/SocialNetworks';
import { Container } from './styles';

export const Footer = () => {

  const currentDate = new Date();
  const [year] = useState<number>(currentDate.getFullYear());
  
  return (
    <Container>
      <button onClick={() => window.scrollTo(0, 0)}>
        <a href="#">
          <img
            src={'./imagem.png'}
            alt='Logotipo com as letras Dev'
            className='logo'
          />
        </a>
      </button>
      <div className='wrapper'>
        <span>Copyright © {year}</span>
        <p>Todos os direitos reservados.</p>
        <span className='made-by'>
          <p>Desenvolvido por</p>
          <a href={SocialNetworks.linkedin.link} target="_blank" rel="noreferrer" className='name'> {SocialNetworks.linkedin.name} </a>
          <p>utilizando <a href="https://nextjs.org//" target="_blank" rel="noreferrer">Next JS</a></p>
        </span>
      </div>
    </Container>
  );
};