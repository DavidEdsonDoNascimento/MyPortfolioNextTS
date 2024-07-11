import { IoRocket } from 'react-icons/io5';
import { FiLink } from 'react-icons/fi';
import { DiCss3, DiGitBranch, DiHtml5, DiNodejs, DiWordpress } from 'react-icons/di';
import { IoLogoJavascript } from 'react-icons/io';
import { MdHttp } from 'react-icons/md';

import { Container } from './styles';
import { SiPrisma, SiTypescript } from 'react-icons/si';

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
              <h3>API RestFull SOLID</h3>
              <p>Uma API RestFull contém princípios SOLID, aproveitando o uso de padrões de projetos relevantes.</p>
              <a
                href="https://github.com/DavidEdsonDoNascimento/solid-api"
                target='_blank'
                className='button-link'
                rel="noreferrer"
              ><DiGitBranch />Repositório</a>
              <div className='icons'>
                <DiNodejs />
                <SiTypescript />
                <IoLogoJavascript />
                <SiPrisma />
              </div>
            </div>
            <div className='project'>
              <h3>Golden Raspberry Awards API</h3>
              <p>Um desafio técnico recente, API RESTful que trabalha com uma lista de indicados e vencedores da categoria Pior Filme do Golden Raspberry Awards em formato CSV.</p>
              <a
                href="https://github.com/DavidEdsonDoNascimento/golden-raspberry-awards-api"
                target='_blank'
                className='button-link'
                rel="noreferrer"
              ><DiGitBranch />Repositório</a>
              <div className='icons'>
                <DiNodejs />
                <SiTypescript />
                <IoLogoJavascript />
                <SiPrisma />
              </div>
            </div>
            <div className='project'>
              <h3>Jogo do Mario</h3>
              <p>Jogo feito em javascript puro </p>
              <a href="https://mario-jump-iota.vercel.app/" target='_blank' className='button-link' rel="noreferrer"><FiLink />Website</a>
              <div className='icons'>
                <DiHtml5 />
                <IoLogoJavascript />
                <DiCss3 />
              </div>
            </div>
          </div>
        </div>
        <a href="https://github.com/DavidEdsonDoNascimento?tab=repositories" target='_blank' rel="noreferrer" className='more-projects'>Conheça todos os projetos!</a>
      </div>
    </Container>
  );
};
