import type { NextPage } from 'next'
import Head from 'next/head'
import { 
  Container, 
  Header 
} from '../styles/pages/Home'

const Home: NextPage = () => {
  return (
    <Container>
       <Head>
        <title>David Edson | JS Dev</title>
      </Head>
      <Header>
        <div className='wrapper'>
          <div>
            <h3>Buenas!</h3>
            <span>Me chamo <a href="https://www.linkedin.com/in/david-edson-05989a177" target="_blank" rel="noreferrer"><b>David Edson</b></a>,</span>
            <p>sou Desenvolvedor FullStack JavaScript.</p>
          </div>
          <img
            src={'/svgs/logo-big.svg'}
            alt='Logotipo com as letras Dev Full'
            className='logo'
          />
        </div>
      </Header>
    </Container>
  )
}

export default Home
