import Head from 'next/head';
import type { NextPage } from 'next';
import { Container } from '../styles/pages/Home';
import { Header, Main, Footer, Navbar } from '@components/index';

const Home: NextPage = () => {

  return (
    <Container>
      <Head>
        <title>Escultor Digital | JS Dev</title>
      </Head>
      <Navbar />
      <Header />
      <Main />
      <Footer />
    </Container>
  );
};

export default Home;
