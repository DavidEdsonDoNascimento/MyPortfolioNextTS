import {
  DiCss3,
  DiHtml5,
  DiReact,
  DiGitBranch,
  DiSass } from 'react-icons/di';
import {
  SiStyledcomponents,
  SiMongodb,
  SiNextdotjs,
  SiAngular,
  SiTypescript,
  SiRedux } from 'react-icons/si';
import { IoDocumentTextSharp } from 'react-icons/io5';
import { FaLaptopCode, FaNode } from 'react-icons/fa';
import { Tooltip } from 'src/shared/Tooltip';
import { Container } from './styles';
import { Content } from '@utils/Contents';

export const Habilidade = () => {
  return (
    <Container id='skills'>
      <div className='wrapper'>
        <div className='content'>
          <h2><FaLaptopCode />Hard Skills</h2>
          <p>{Content.skills()}</p>
          <div className='buttons'>
            <a href='https://www.canva.com/design/DADRCM05eGM/RUgPAEphQ8e8ExdYF9YgUg/view?utm_content=DADRCM05eGM&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton'
              className='button-link'><IoDocumentTextSharp /> Currículo</a>
          </div>
        </div>
        <div className='skills-icons'>
          <Tooltip
            item={<DiHtml5 />} text='HTML 5'/>
          <Tooltip
            item={<DiCss3 />} text='CSS 3'/>
          <Tooltip
            item={<SiStyledcomponents />} text='Styled Components'/>
          <Tooltip
            item={<DiSass />} text='SASS'/>
          <Tooltip
            item={<DiReact />} text='React Js'/>
          <Tooltip
            item={<SiNextdotjs />} text='Next Js'/>
          <Tooltip
            item={<SiRedux />} text='Redux'/>
          <Tooltip
            item={<SiTypescript />} text='TypeScript'/>
          <Tooltip
            item={<FaNode />} text='Node Js'/>
          <Tooltip
            item={<SiMongodb />} text='MongoDB'/>
          <Tooltip
            item={<DiGitBranch />} text='Git Flow'/>
          <Tooltip
            item={<SiAngular />} text='Angular 2+'/>
        </div>
      </div>
    </Container>
  );
};
