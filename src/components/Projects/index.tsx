import { IoRocket } from 'react-icons/io5';
import { FiLink } from 'react-icons/fi';
import { DiHtml5, DiReact, DiWordpress } from 'react-icons/di';
import { SiStyledcomponents } from 'react-icons/si';
import { IoLogoJavascript } from 'react-icons/io';
import { MdHttp } from 'react-icons/md';

import { Container } from './styles';

export const Projects = () => {
  return (
    <Container>
      <div id='projetos' className='wrapper'>
        <h2><IoRocket />Projetos</h2>
        <div className='projects-group'>
          <div className='projects-list'>
            <div className='project'>
              <h3>Camboriú aluguel</h3>
              <p>Site de alugueis de estadias em Balneário Camboriú - SC, desenvolvido por mim.</p>
              <a
                href="http://camboriualuguel.com.br"
                target='_blank'
                className='button-link'
                rel="noreferrer"
              ><FiLink />Website</a>
              <div className='icons'>
                <DiWordpress />
                <DiHtml5 />
                <IoLogoJavascript />
                <MdHttp />
              </div>
            </div>
            <div className='project'>
              <h3>Autoatendimento</h3>
              <p>Autoatendimento de um restaurante.</p>
              <a
                href="https://autoatendimento.vercel.app/"
                target='_blank'
                className='button-link'
                rel="noreferrer"
              ><FiLink />Website</a>
              <div className='icons'>
                <DiReact />
                <DiHtml5 />
                <SiStyledcomponents />
                <IoLogoJavascript />
                <MdHttp />
              </div>
            </div>
            <div className='project'>
              <h3>Mercearia</h3>
              <p>Controle básico de finanças de uma padaria.</p>
              <a
                href="https://bakery-sample-js-pure.vercel.app/"
                target='_blank'
                className='button-link'
                rel="noreferrer"
              ><FiLink />Website</a>
              <div className='icons'>
                <DiReact />
                <DiHtml5 />
                <IoLogoJavascript />
                <MdHttp />
              </div>
            </div>
            <div className='project'>
              <h3>Brincadeira com Linkedin</h3>
              <p>Pagina inicial de Rede social Fanfic corporativa criada para explorar algumas ideias com ReactJS.</p>
              <a href="https://fanfic-corp.vercel.app/" target='_blank' className='button-link' rel="noreferrer"><FiLink />Website</a>
              <div className='icons'>
                <DiReact />
                <DiHtml5 />
                <IoLogoJavascript />
                <MdHttp />
              </div>
            </div>
          </div>
        </div>
        <a href="https://github.com/DavidEdsonDoNascimento?tab=repositories" target='_blank' rel="noreferrer" className='more-projects'>Conheça todos os projetos!</a>
      </div>
    </Container>
  );
};
