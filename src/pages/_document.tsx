import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="description" content="Desenvolvedor JavaScript Full Stack sempre buscando por novos desafios e espalhando o conhecimento" />
          <meta name="keywords" content="Desenvolvedor,Full,Stack,Portifolio,Pleno,JavaScript,React,Next,ReactJS,NextJS,Typescript,Programador,Tecnologia,Codigos,Escultor,Digital,David,Edson,Clean code,Dev JS,David Edson" />
          <meta name="author" content="David Edson Do Nascimento" />
          <meta name="robots" content="index,follow" />
          <meta name="googlebot" content="index,follow" />
          <meta name="google-site-verification" content="L0i7sSgRS1zSznXxWIvQhirCMFyInbVW8xCzFTofnNY" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link href="https://fonts.googleapis.com/css2?family=Comic+Neue:wght@300;400;700&display=swap" rel="stylesheet" />
          <link rel="icon" href="/imgs/cafe-icon.png" type="image/png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
