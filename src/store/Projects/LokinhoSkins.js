const summary = {
  id: "lokinhoskins",
  name: "Lokinho Skins",
  description: `Lokinho Skins - plataforma de rifas com <span class="highlight">roleta inteligente</span> (React/Next.js), <span class="highlight">integração de pagamentos</span> e <span class="highlight">autenticação segura</span>, substituindo o processo <span class="highlight">manual</span> anterior e <span class="highlight">reduzindo o tempo de operação em 70%</span>. A solução, <span class="highlight">desenvolvida em parceria com CapiSite</span>, oferece uma <span class="highlight">experiência responsiva</span> e completa desde a criação até a distribuição de prêmios.`,
  links: {
    github:
      "https://github.com/NotJotunnn/creditos/blob/main/lokinhoRifas/creditos.md",
    documentation: "/projects/lokinhoskins",
    external: "",
    figma:
      "https://www.figma.com/design/feYuEQLDM3VR9mtq3xou60/LOKINHO-SKYNS--Copy-?node-id=0-1&t=Zda0RwHdae2P28NZ-1",
  },
  thumb:
    "https://github.com/NotJotunnn/creditos/blob/main/lokinhoRifas/github/lokinhorifas.png?raw=true",
  tech: [
    "react",
    "nodejs",
    "nextjs",
    "figma",
    "typescript",
    "axios",
    "express",
    "prisma",
    "postgres",
    "docker",
  ],
};

const page = {
  duration: 7,
  durationMetric: "Meses",
  startDate: "8 de Julho, 2024",
  endDate: "18 de Fevereiro, 2025",
  githubRepoStatus: "Privado",
  jobs: ["Designer", "Desenvolvedor Frontend Lead"],
  client: "Lokinho Skins",
  clientSocial: "https://www.instagram.com/lokinhoskins/",
  content: `
  <h2>Resumo</h2>

  <p>${summary.description}</p>

  <h2>O projeto</h2>

  <p>Este foi um projeto bastante interessante, sendo um que eu não comecei do início. A equipe por trás dele entraram em contato comigo através da faculdade que eu e o supervisor geral estudavamos. Após demonstrar alguns de meus projetos do Figma, criamos uma linha pela qual eu os ajudava do jeito que pudia, e eventualmente fui parar no time até recebendo por fazer entregas.</p>

  <div>
    <p>As tecnologias utilizadas no front foram:</p>
    <ul>
      <li>Reactjs</li>
      <li>Nextjs</li>
      <li>Axios</li>
      <li>Typescript</li>
    </ul>
  </div>

  <p>Mantendo o projeto bastante simples no fronte. Como o design já estava iniciado, cuidei apenas da integração do design no Figma para código, o arquivo do Figma que utilizei é o <a target="_blank" href="https://www.figma.com/design/LoUYiIoV0h6UeIcD3Hs7b8/LOKINHO-SKYNS?t=AIkIz06amtD0l7v1-1">seguinte</a> (avisando este não é o arquivo oficial!).</p>

  <img src="/assets/projects/LokinhoSkins/personalFigmaFile.png" alt="Arquivo Figma pessoal" />

  <p>Como pode ver, eu brinquei um pouco desmontando o design para melhor saber onde no site verdadeiro cada elemento poderia ser implementado!</p>

  <p>Essa é uma das partes mais divertidas em trabalhar com design, justamente recriar as etapas que artistas a qual nos referimos usaram para chegar ao ponto em que chegaram (E é um fator que me surpreende até hoje! kk).</p>

  <p>Durante essa exploração, eu fui pegando o ritmo, recriando o site de pouquinho em pouquinho, até eu voltar a pegar o jeito.</p>

  <img src="/assets/projects/LokinhoSkins/thumb.png" alt="Seção Hero do projeto" />

  <p>Após o aquecimento, passei de componentes por dia, para páginas, o que pra ser justo, já não haviam tantas restando.</p>

  <p>Chegando finalmente na página da roleta, esta eu tive de reiterar bastante, justamente pela lógica por trás da roleta não ser muito clara nas primeiras etapas, e vendo como foi, já imagino soluções mais amigáveis que levariam menos tempo para desenvolver.</p>

  <img src="/assets/projects/LokinhoSkins/roulette.png" alt="Seção Roleta do projeto" />

  <div>
    <p>Porém um fator interessante de trabalhar tão próximo do back assim, foi que eu tive um certo contato com as tecnologias presentes nele, e como acabei ajudando bastante na integração de APIs externas como do Mercado Pago e Twitch, tive ainda mais contato com as seguintes tecnologias:</p>
    <ul>
      <li>Express</li>
      <li>Prisma</li>
      <li>PostgreSQL</li>
      <li>Docker</li>
    </ul>
  </div>

  <h2>Problemas!</h2>

  <p>Em termos de problemas no desenvolvimento, tivemos alguns.</p>

  <p>Pra início de conversa, o site não havia sido terminado, isto é, o design não era final, o problema que acarretou nesta etapa, foi um leve gargalo, onde nosso designer oficial, não estava conseguindo manter a produção a ponto para terminarmos tudo no tempo alocado.</p>

  <p>A solução que vimos deste problema, foi justamente criarmos nosso próprio design, agora não ficou a melhor coisa de todas, considerando que estavamos fazendo em tempo real toda a codificação, não sobrando muito tempo para pensar no visual final das coisas (Até houveram ideias baseadas no sistema de inventário da Steam, porém optei por fazer primeiro o funcional, e depois desenvolver algo mais especial).</p>

  <p>Um segundo problema que surgiu, foram alterações "pequenas", que até então eram esperadas, até considerar funcionalidades novas que precisavam de um tempo à mais para realmente tirar do papel.</p>

  <p>Como solução, focamos em antes entregar uma primeira versão, e ir iterando em cima dela, assim dividindo estas funcionalidades extras em entregas que fariamos mais para frente.</p>

  <p>E por fim, o último problema que mais me tirou noites de sono, foi a inconsistencia na roleta em si.</p>

  <p>Agora eu fiz um trabalho justo, porém esse trabalho não contava com a variabilidade de pessoas que se inscreveriam nessas rifas, isto e o fato que a roleta deveria rolar por um tempo maior que o que levaria para cruzar todo esse grupo de pessoas. Logo, foi muito difícil definir uma animação, que nem ficava muito rápido para quando a roleta estava imensa, e nem muito lenta para quando não ficava.</p>

  <p>A solução? Definir uma quantidade mínima de *Cards* que iriam aparecer na roleta, para assim não ficar muito pequena. Houveram mais alterações após essa, justamente porque estavamos trabalhando com vários *Cards*, e isso entrava no campo de otimização pesadíssima. Porém no final, conseguimos um meio que deixou bastante leve o site.</p>

  <h2>Resultados</h2>

  <p>Como resultado, temos 100% das operações do cliente, sendo feitas de forma automatizadas em comparação com o sistema anterior, que envolvia muito pix e responsabilidade fiscal individual, isso tudo em um site bonito, acessível e ágil!</p>

  <h2>Palavras finais</h2>

  <p>Sou muito grato à equipe do CapiSite pelo trabalho em equipe que realizamos, e mais pessoalmente ao meu supervisor e amigo desenvolvedor cheio de paciência, <a target="_blank" href="https://github.com/hardkill551">Hugo Rodriguês</a> pela oportunidade única. Também agradeço à equipe do <a target="_blank" href="https://www.instagram.com/lokinhoskins/">Lokinho Skins</a>, por ser bastante justa e amigável no decorrer do desenvolvimento do projeto.</p>

  <p>Este projeto me concedeu uma oportunidade importante, justamente por me colocar nesse ambiente de descobertas e aprendizados.</p>
  `,
};

export default {
  summary,
  page,
};
