const title = 'David Edson - Desenvolvedor Javascript';
const description = 'Desenvolvedor JavaScript Full Stack sempre buscando por novos desafios e espalhando o conhecimento';

export const SEO = {
  title,
  description,
  canonical: 'https://davidedson.com.br',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://davidedson.com.br',
    title,
    description,
    images: [
      {
        url: 'https://www.davidedson.com.br/imgs/men.png',
        alt: title,
        width: 1280,
        height: 884,
      },
      {
        url: 'https://www.davidedson.com.br/_next/image?url=%2Fimgs%2Feu-e-a-mona-chopera.jpeg&w=750&q=75',
        alt: 'David Edson image',
        width: 720,
        height: 719,
      }
    ]
  }
};
