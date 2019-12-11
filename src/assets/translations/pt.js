export default {
  projects: [
    {
      title: "Directa viewer",
      desc: [
        `O Directa Viewer é uma Single-Page application para mostrar dados, como qualidade e desempenho, sobre maquinas de uma dada fabrica. A aplicação consiste de diversos displays com informações sobre uma até oito maquinas e obviamente enquanto o numero de maquinas na tela vai aumentando o numero de informações sobre cada vai diminuindo, mantendo as informações mais relevantes.`,
        `Alguns fatos interesantes sobre esse projeto é que foi minha primeira vez utilizando css-in-js com a biblioteca Styled componentes, além disso o projeto marcou minha transição de componentes de classes para React Hooks.`
      ]
    },
    {
      title: "Meu portfolio",
      desc: [
        `Meu Portfolio é esse site massa que você está olhando! Além da interface, o código também está livre para ser visualido no Github.Peguei alguma inspiração do curso avançado de CSS do Jonas Schmedtmann e também do web portfolio my poor brain.`,
        `O núcleo desse projeto foi feito em cima das bibliotecas React e styled components. Além disso, a funcionalidade de tradução foi criada através da API de contexto do React enquanto Redux foi usado para integrar o estado do component Header com as paginas do projeto`
      ]
    },
    {
      title: "Directa helpchain",
      desc: [
        `Directa Helpchain é versão web para o sistema de ciclo de ajuda da Directa Automação, existe também uma versão mobile. O projeto melhora o gerenciamento de problemas recorrentes que podem acontecer de tempos em tempos em uma fabrica. Nesse sentido, Esses problemas podem ser classificados em três categorias, pendentes, em resolução, e concluidos.`,
        `Por fim, vale mecionar que o projeto foi criado puramente com HTML/CSS/JS.`
      ]
    },
    {
      title: "Mastermind app",
      desc: [
        `O Mastermind App é uma aplicação mobile que eu criei por duas razões, apreender sobre a SDK do Google Flutter e a também facilitar a vida, minha e de alguns amigos com um app que te pemite organizar respostas para uma série de perguntas diárias, para te ajudar a avaliar o quão produtivo foi seu dia.`,
        `Eu o desenvolvi usando um tema escuro, para tomar cuidado com os olhos pois sei que o app será utilizado na maior parte das vezes durante a noite.`
      ]
    }
  ],
  projectBtn: "Ver projeto",
  header: {
    home: "Home",
    about: "Sobre mim",
    experience: "Experiência",
    all: "Todos"
  },
  textPages: {
    about: {
      title: "Sobre mim",
      text: [
        `Ola! Meu nome é Fábio de Abreu, sou natural de Florianópolis/SC e 
        hoje faço parte do time de desenvolvimento da empresa Directa Automação,
        trabalhando com desenvolvimento web Front-end. Ainda assim, desenvolvendo
        meus próprios projetos e para terceiros.`,
        `Minha jornada apreendendo programação comeceu com 16 anos, parecia
        um caminho natural para alguém apaixonado por tecnologia. Mais tarde, ganhei
        experiência com educação formal, estudando Ciências da Computação na UFSC.
        Apesar disso, eu acredito que o melhor jeito de apreender é trabalhando em
        projetos reais e desenvolvendo software que pode realmente ajudar pessoas.`
      ]
    },
    experience: {
      title: "Experiência",
      text: [
        `Escrevi minha primeira linha de código usando Ruby, apesar disso nunca o explorei muito e fui me
        aprofundar mesmo na linguagem Javascript trabalhando, por grande parte, com Front-end.`,
        `Trabalhando na Directa Automação, desenvolvi interfaces web que ajudam o setor industrial
        brasileiro, usando Javascript vanilla e também a biblioteca do facebook React que se tornou
        minha principal ferramenta para desenvolvimento de websites como esse que você está navegando.`
      ]
    }
  },
  footer: "2019 Desenvolvido por Fábio Oliveira de Abreu",
  copyMsg: "Copiado"
};
