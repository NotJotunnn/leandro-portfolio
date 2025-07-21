const summary = {
  id: "ecommerce",
  name: "E-commerce KRS",
  description: `E-commerce backend com <span class="highlight">autenticação</span>, <span class="highlight">paginação</span> de produtos e <span class="highlight">controle de permissões</span>, usando <span class="highlight">Postgres</span> e <span class="highlight">Node.js</span>. O projeto, <span class="highlight">inspirado</span> na empresa KRS, priorizo <span class="highlight">escalabilidade</span> e testes <span class="highlight">robustos</span> (95% de cobertura). Destaques incluem rotas como /produtos (CRUD paginado) e /auth/login (JWT), além de <span class="highlight">hierarquia de usuários</span> (comum/admin).`,
  links: {
    github: "https://github.com/NotJotunnn/E-commerce-Project",
    documentation: "/projects/ecommerce",
    external: "",
    figma: "",
  },
  thumb: "assets/projects/Ecommerce/thumb.png",
  tech: ["postgres", "nodejs", "jwt", "jest", "docker", "express", "eslint", "knex"],
};

const page = {
  duration: 1,
  durationMetric: "Mês",
  startDate: "17 Junho, 2025",
  endDate: "21 Julho, 2025",
  githubRepoStatus: "Aberto",
  jobs: ["Desenvolvedor Backend"],
  client: "Fictício (baseado na KRS)",
  clientSocial: "",
  content: `
  <h2>O resumo</h2>

  <p>${summary.description}</p>

  <h2>O projeto</h2>

  <p>Servindo como um pouco de uma variação de um projeto passado (Design para Churrascos Ferreira), este daqui é um projeto programado de verdade, com foco no Backend!</p>

  <p>Para clarificar também, inicialmente havia-se o interesse de tornar esse projeto meu primeiro Fullstack, porém o escopo estava grande demais para levar com o conhecimento que tenho. Então foi decidido simplificar para apenas Back por enquanto, já que o projeto em si tem um valor em termos de experiência simplesmente não paralelo a nada que fiz anteriormente!</p>

  <p>Ele conta com sistema de autenticação, paginação de produtos, histórico de compras e permissões de usuário!</p>

  <p>O projeto também é organizado para fácil leitura, contando com Controllers, Services e Rotas em si (além do util ou outro para componentizar funções importantes).</p>

  <h2>Problemas!</h2>

  <p>Esse projeto foi baseado de uma empresa real KRS, eles trabalham bastante com serviços de instalação de equipamento de som em igrejas e relacionados. Por se relacionarem ao serviços de instalamento, achei bastante intuitivo terem uma loja e-commerce pra justamente vender esses produtos de forma mais direcionada enquanto ainda mantendo a possibilidade de fornecer seus serviços de instalamento.</p>

  <p>Logo o problema que já lidei desde o início, era de como a arquitetura de um servidor de uma loja online é construída.</p>

  <h2>Soluções</h2>

  <p>Após a criação do CRUD básico para os produtos, que então são armazenados em um banco de dados do Postgres, eu mirei imediatamente para autenticação, já que é um serviço com rotação de quem adicionaria os produtos à loja, isso e como toda loja de e-commerce, também tem que ter um sistema de login para os clientes recorrentes que não querem ficar preenchendo seus dados múltiplas vezes.</p>

  <p>Outra coisa pra se levar em mente, é a diferença entre usuário comum e usuário admin, há uma certa diferença entre permissões, logo isso também deve estar claro e dinâmico, para que não apenas um usuário possua essas permissões de gerir a loja em algo *hardcoded*.</p>

  <div>
    <p>Logo em termos de portas, já temos várias justamente para lidar com esses diversos sistemas, como visto à seguir:</p>
    <ul>
      <li>/produtos</li>
      <li>/usuario</li>
      <li>/permissao</li>
      <li>/usuario-permissao</li>
      <li>/auth/login</li>
      <li>/history</li>
    </ul>
  </div>

  <p>Uma outra ideia que será introduzida no decorrer das falas sobre as rotas, é se necessitam de permissão e/ou autenticação. Deixando esclarecido que autenticação requer login, enquanto permissão requer que o usuário seja admin, é uma hierarquia!</p>

  <p>Um outro elemento que trabalhei bastante no projeto, foi a cobertura de testes e sua replicabilidade! E a todos que me acompanham no <a href="https://www.linkedin.com/in/leandro-ferreira-l1/">Linkedin</a> já devem ter visto meu post relacionado aos testes.</p>

  <img loading="lazy" src="assets/projects/Ecommerce/cobertura-de-testes.png" alt="Cobertura de testes do projeto" />

  <p>É uma cobertura fantástica para um projeto simples como esse!</p>

  <p>Enfim deixando de forma simplificada o que cada uma dessas rotas serve, e é claro suas funcionalidades, estarei trazendo um diagrama para ajudar!</p>

  <img loading="lazy" src="assets/projects/Ecommerce/diagrama.png" alt="Diagrama de dados do projeto" />

  <p>Como pode ver no diagrama, criei cada uma das portas com referência a uma tabela relativa no postgres.</p>

  <h3>Rota /usuarios</h3>

  <div>
    <p>A rota usuários lida com o CRUD referente aos usuários, sendo essa rota responsável por:</p>
    <ul>
      <li>Criar usuário</li>
      <li>Editar dados (requer autenticação)</li>
      <li>Deletar (requer autenticação)</li>
      <li>Ler (requer permissão)</li>
      <li>Ler usuário individual (requer autenticação)</li>
    </ul>
  </div>

  <p>Ela também criptografa as senhas enviadas pelo usuário e as oculta de requisições futuras (senhas não são brincadeira!).</p>

  <h3>Rota /produtos</h3>

  <div>
    <p>Esta aqui já está ligada mais com as operações da loja, ela também é um CRUD, porém conta com sub rotas extras mais granulares para ajudar diferentes usuários em sua navegação.</p>
    <ul>
      <li>Ler produtos (paginado)</li>
      <li>Criar produto (requer permissão)</li>
      <li>Deletar/atualizar produto (requer permissão)</li>
      <li>Ler produto individual</li>
    </ul>
  </div>

  <p>Essa é uma das partes mais importantes justamente por ser onde o usuário vai passar grande parte do seu tempo! Logo decidir por ja implementar paginação pra ajudar os futuros (agora deprecados) desenvolvimento no fronte.</p>

  <img loading="lazy" src="assets/projects/Ecommerce/permissoes.png" alt="Permissões sendo aplicadas nas rotas de produtos" />

  <h3>Rota /permissao</h3>

  <p>Já essa não é muito clara inicialmente pro usuário comum, mas ela serve justamente para criar, atualizar, deletar e ler permissões atuais, o sistema por agora é *hardcoded* pra ter algumas permissões logo de início, e essas permissões em si são utilizadas para barrar usuários sem permissão de acessar algumas portas sensíveis.</p>

  <p>Futuramente é interessante conceder a responsabilidade de alterar que permissões são incrementadas ou retiradas para o gerente. Porém do jeito que está agora, é muito facilmente modificado!</p>

  <h3>Rota /usuario-permissao</h3>

  <p>Esta rota em sua concepção, lida com a relação entre as tabelas usuario e permissao, servindo como forma de possibilitar de conceder permissões pra certos usuários! Logo seu roteamento é mais simples do que o resto, contando apenas com concessão de permissões, eliminação de permissões e concessão em lote de permissões.</p>

  <p>Não achei necessário atualizar, justamente por já ser uma ação que por si so traria complexidades que simplesmente remover todas e adicionar as novas disponibilizaria.</p>

  <h3>Rota /auth/login</h3>

  <p>Esta cuida exclusivamente do login de usuários, disponibilizando o jwt necessário para que o usuário tenha acesso as demais *requests* autenticadas que citamos anteriormente.</p>

  <h3>Rota /history</h3>

  <p>E por fim mas não menos importante, temos a rota de histórico, ela serve justamente para gravar compras pelo usuário, e demonstrar seus *status* para que usuários possam saber em qual etapa se encontram.</p>

  <p>Ela possui um outro elemento fantástico para admins de acompanhar todas as compras feitas no site. Assim caso algum usuário tenha a necessidade de um reembolso, os admins conseguem acompanhar o pedido e justamente dar um suporte melhor para o usuário!</p>

  <h3>Palavras Finais</h3>

  <p>Concluindo nosso projeto da vez, esse foi minha primeira experiência real de trabalhar com o back por completo, sendo minha outra envolvida com meu serviço com a galera do Lokinho Skins! Este projeto foi um cúmulo de conhecimentos adqueridos no decorrer dos meus estudos na Alura, e eu espero poder fazer muitos mais desses no futuro!</p>
  `,
};

export default {
  summary,
  page,
};
