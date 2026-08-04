const summary = {
  id: "capisite",
  name: "Capisite",
  description: `Design de <span class="highlight">4 páginas</span> para site institucional, desenvolvido no Figma desde os <span class="highlight">wireframes</span> até a identidade visual. O projeto estruturou fluxos de navegação, organização visual e padrões de layout para facilitar a implementação, reduzindo retrabalho entre design e desenvolvimento. Também atuei na <span class="highlight">organização das entregas</span> e no apoio a desenvolvedores juniores durante a execução.`,
  links: {
    github:
      "",
    documentation: "/projects/capisite",
    external: "https://www.capisite.com/pt",
    figma:
      "",
  },
  thumb: "assets/projects/capisite/thumb.png",
  tech: [
    "figma",
  ],
};

const page = {
  duration: 2,
  durationMetric: "Meses",
  startDate: "13 de Fevereiro, 2026",
  endDate: "23 de Março, 2026",
  githubRepoStatus: "Privado",
  jobs: ["Designer"],
  client: "Capisite",
  clientSocial: "https://www.instagram.com/capisite.oficial/",
  content: `
  <h2>Resumo</h2>

  <p>${summary.description}</p>

  <h2>O projeto</h2>

  <p>Este projeto é um de longa data. Trabalho na Capisite e em seus projetos há um tempo, logo é de se imaginar que a empresa que vende sites deveria ter um próprio! E confesso que foi muito legal o processo, que por agora já havia me acostumado tem anos.</p>

  <p>Antes de continuarmos, gostaria de me desculpar pela falta do arquivo Figma, acessos gratuitos são limitado aos 3 primeiros projetos que deixa disponível, e como dessa equipe em particular houve mais de um acesso, não consegui deixar o original como um draft, o que reduziu severamente a quantidade de projetos disponíveis ao público que gosta de interagir com meus arquivos, darei meu máximo para mostrar partes individuais como imagens no blog mesmo. Independente, voltemos ao projeto!</p>

  <p>O básico ocorreu, começando com o gráfico de fluxo do usuário, o que o usuário deverá ver no site?</p>

  <img loading="lazy" src="assets/projects/capisite/userflow.png" alt="User flow final do projeto" />

  <p>Como pode ver, o user flow terminou como algo bem simples, já tinhamos mais ou menos uma ideia geral do que gostariamos de mostrar para os usuários, logo não foi uma surpresa.</p>

  <p>Próximo na linha vem as minuncias no wireframe, no decorrer do design, queria poder guiar mais a atenção do usuário, talvez fazer algumas ideias mais criativas para prendé-lo mais às páginas, logo comecei tomando algumas decisões interessantes.</p>
  
  <img loading="lazy" src="assets/projects/capisite/wireframe.png" alt="Wireframe base do projeto" />

  <p>Logo no "Sobre Nós", decidi por colocar a logo gigantesca da empresa virada ao título da seção, justamente para indicar a conexãom logo depois vieram os parceiros com um carrosel simples para esquerda, para uma outra seção similar a uma visualização em formato de fila continua, essa última seção foi meu magnum opus do site por completo, cards em formato de navegadores abertos, título simples para ajudar na compreensão do usuário, descrição enxuta pra introduzir o projeto, com as tecnologias abaixo e não apenas uma foto de thumbnail mas também um item para ajudar o entendimento geral do usuário.</p>

  <p>No geral, minha parte favorita do projeto, também possívelmente a que mais deu trabalho de ser implementada (e por muita boa razão!).</p>

  <p>Em termos de feedback, novamente voltamos para um detalhe mais simplificado, queriamos algo que pessoas já possuem muita affordance em cima, logo fomos com algo amigável.</p>

  <h2>Problemas!</h2>

  <p>Em termos de problemas, tivemos o tema minimalista e tecnológico, que são temas bem abertos. Felizmente das ideias trabalhadas elas já alcançavam o que se era esperado. Mas se eu tivesse de voltar atrás para melhorar algo, resolveria o conflito com a cor acentuação no título e o fundo, talvez adicionando um sombreado ou borrando o fundo.</p>

  <h2>Resultados</h2>

  <p>A empresa agora tem meios de se apresentar digitalmente! Demonstrando trabalhos feitos e facilitando contato de indivíduos mais escéptico</p>

  <h2>Palavras finais</h2>

  <p>Sou muito grato à equipe do CapiSite pelo trabalho em equipe que realizamos, e mais pessoalmente ao meu supervisor e amigo desenvolvedor cheio de paciência, <a target="_blank" href="https://github.com/hardkill551">Hugo Rodriguês</a> pela oportunidade única.</p>

  <p>Este projeto me concedeu uma oportunidade importante, justamente por me colocar nesse ambiente de descobertas e aprendizados.</p>
  `,
};

export default {
  summary,
  page,
};
