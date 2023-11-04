export abstract class Content {

  private static MY_AGE = new Date().getFullYear() - 1996;

  static about(): string {
    return `Meu nome é David Edson, tenho ${this.MY_AGE} anos, sou Desenvolvedor Full Stack, trabalho com amor e cuidado nos códigos,
    Desde o ano de 2019 estou concentrado em me especializar nas tecnologias que permeiam o JavaScript, estudando todos os dias, sempre Node, JavaScript, Typescript, ReactJS, React Native, NextJS, Angular, ou regras de negocios, buscando seguir as boas práticas, padrões de projetos, sempre procurando acordar todos os dias à procura de alguma nova coisa que possa ajudar alguém no futuro, seguindo a ideologia do 1% todos os dias, ajudando assim clientes e empresas a alcançar a excelencia.

    Tenho proficiencia com:
    NodeJS, Typescript, Javascript, ReactJS, React Native, NextJS, SQL, Banco de dados, SCRUM, HTML e CSS..`;
  }

  static skills(): string {
    return `Sou extremamente curioso, autodidata e a força que mais me entrete é pensar que qualquer conteudo pode me ajudar a
    ajudar outras empresas e clientes em dado momento, hoje na empresa a qual trabalho sou especialista em integrações e junto a minha equipe ja integramos diversos grandes clientes, estou sempre a aprender e disseminar este conhecimento, sentindo-me feliz ao ver o cliente final utilizando algo criado por este conhecimento.`;
  }
}
