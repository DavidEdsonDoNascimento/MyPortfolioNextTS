import { IoRocket } from 'react-icons/io5';
import { FiLink } from 'react-icons/fi';
import { DiGitBranch, DiHtml5, DiNodejs, DiReact } from 'react-icons/di';
import { IoLogoJavascript } from 'react-icons/io';
import { MdHttp } from 'react-icons/md';

import { Container } from './styles';
import { SiPrisma, SiTypescript } from 'react-icons/si';
import { RiNextjsFill } from 'react-icons/ri';

export const Projects = () => {
  return (
    <Container>
      <div id="projetos" className="wrapper">
        <h2>
          <IoRocket />
          Projetos
        </h2>
        <div className="projects-group">
          <div className="projects-list">
            <div className="project">
              <h3>Fanfic Linkedin</h3>
              <p>
                Projeto que visa ser uma brincadeira com o Linkedin, feito para
                efeitos de teste.
              </p>
              <a
                href="https://fanfic-corp.vercel.app/"
                target="_blank"
                className="button-link"
                rel="noreferrer"
              >
                <FiLink />
                Website
              </a>
              <div className="icons">
                <DiReact />
                <DiHtml5 />
                <IoLogoJavascript />
                <MdHttp />
              </div>
            </div>
            <div className="project">
              <h3>Timer de tarefas</h3>
              <p>
                Projeto que visa ser um temporizador de tarefas, desenvolvi um
                histórico para auxiliar em quanto tempo leva-se em cada tarefa
              </p>
              <a
                href="https://timer-with-history.vercel.app"
                target="_blank"
                className="button-link"
                rel="noreferrer"
              >
                <FiLink />
                Website
              </a>
              <div className="icons">
                <DiReact />
                <DiHtml5 />
                <IoLogoJavascript />
                <MdHttp />
              </div>
            </div>
            <div className="project">
              <h3>Golden Raspberry Awards API</h3>
              <p>
                Um desafio técnico recente, API RESTful que trabalha com uma
                lista de indicados e vencedores da categoria Pior Filme do
                Golden Raspberry Awards em formato CSV.
              </p>
              <a
                href="https://github.com/DavidEdsonDoNascimento/golden-raspberry-awards-api"
                target="_blank"
                className="button-link"
                rel="noreferrer"
              >
                <DiGitBranch />
                Repositório
              </a>
              <div className="icons">
                <DiNodejs />
                <SiTypescript />
                <IoLogoJavascript />
                <SiPrisma />
              </div>
            </div>
            <div className="project">
              <h3>Autoatendimento</h3>
              <p>Autoatendimento de restaurantes</p>
              <a
                href="https://autoatendimento.vercel.app"
                target="_blank"
                className="button-link"
                rel="noreferrer"
              >
                <FiLink />
                Website
              </a>
              <div className="icons">
                <RiNextjsFill />
                <DiHtml5 />
                <IoLogoJavascript />
                <MdHttp />
              </div>
            </div>
          </div>
        </div>
        <a
          href="https://github.com/DavidEdsonDoNascimento?tab=repositories"
          target="_blank"
          rel="noreferrer"
          className="more-projects"
        >
          Conheça todos os projetos!
        </a>
      </div>
    </Container>
  );
};
