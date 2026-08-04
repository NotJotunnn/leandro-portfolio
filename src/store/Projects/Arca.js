const summary = {
    id: "arca",
    name: "Arca",
    description: `Desenvolvimento fullstack em <span class="highlight">SaaS imobiliário</span> com Next.js, React, TypeScript e Supabase. Atuei na evolução do <span class="highlight">CRM</span>, pipeline customizável de leads, agentes de IA, painel administrativo, gestão de usuários, planos e limites. Também implementei exportação de relatórios em PDF, integrações com Google/Meta, webhooks e cron jobs, além de refatorações, correções de build/deploy e melhorias de performance, segurança e acessibilidade.`,
  links: {
    github:
      "",
    documentation: "/projects/arca",
    external: "https://www.arcahub.io/",
    figma:
      "https://www.figma.com/design/SxF2UTHz1LcLoBinPAcOT2/Projeto-para-site-de-casamento--Copy-?t=04znwZwguKVXkQTc-1",
  },
  thumb: "assets/projects/arca/thumb.png",
  tech: [
    "nextjs",
    "react",
    "typescript",
    "supabase",
    "postgres",
    "prisma",
    "tailwindcss",
    "jest",
    "playwright",
    "openai",
    "googleapis",
    "stripe",
    "docker",
    "figma",
  ],
};

const page = {
  duration: 1,
  durationMetric: "Ano",
  startDate: "7 de Agosto, 2025",
  endDate: "13 de Junho, 2026",
  githubRepoStatus: "Privado",
  jobs: ["Designer", "Desenvolvedor Fullstack"],
  client: "Francisco Cassiano",
  clientSocial: "",
  content: `
  <h2>Resumo</h2>

  <p>${summary.description}</p>

  <h2>O projeto</h2>

  <p>A Arca foi um dos maiores projetos em que atuei até hoje. Entrei quando a aplicação já estava em andamento e, logo de início, ficou claro que havia bastante coisa acontecendo ao mesmo tempo: CRM, agentes de IA, área administrativa, integrações externas, autenticação, assinaturas, dashboards e uma parte voltada para imóveis na Flórida.</p>

  <p>Foi um projeto muito importante para meu amadurecimento como desenvolvedor, porque grande parte das decisões acontecia em contato direto com o cliente. Isso tornava o processo mais dinâmico: algumas demandas vinham de necessidades bem específicas do produto, outras surgiam conforme o uso real da plataforma ia revelando problemas, ajustes e oportunidades de melhoria.</p>

  <p>Ao longo do projeto, trabalhei em diferentes partes da aplicação, incluindo evolução do CRM, ajustes em agentes de IA, internacionalização, telas administrativas, fluxos de uso por plano, exportação de relatórios, integrações com Google/Meta, webhooks, cron jobs e melhorias gerais de estabilidade. Como o escopo era grande, nem todos os detalhes ficaram fáceis de separar com o tempo, mas a experiência foi justamente lidar com essa complexidade e ajudar o produto a continuar avançando.</p>

  <h2>Desafios</h2>

  <p>O maior desafio da Arca foi o tamanho do escopo. A aplicação cresceu bastante e, em alguns momentos, a visão do produto ainda estava sendo descoberta durante o próprio desenvolvimento. Isso exigiu adaptação constante, bastante refatoração e cuidado para não apenas entregar novas telas, mas também manter o projeto compreensível para quem fosse continuar trabalhando nele depois.</p>

  <p>Um ponto especialmente marcante foi a integração com o Google Calendar. Apesar de parecer uma funcionalidade simples do ponto de vista do usuário, o processo de configuração, permissões e validação da API foi bem burocrático. Também atuei em melhorias na autenticação, buscando reduzir exposição desnecessária de dados, além de ajustes de acessibilidade, tutoriais de uso, harmonização visual entre telas e suporte a múltiplos idiomas.</p>

  <p>Além disso, trabalhei em correções de build/deploy e em pontos de estabilidade que, embora nem sempre apareçam visualmente, fazem diferença para manter uma aplicação grande funcionando. Esse tipo de trabalho me ensinou bastante sobre lidar com sistemas reais, onde nem toda entrega é uma feature nova, mas muitas vezes uma melhoria que evita problemas futuros.</p>

  <h2>Palavras finais</h2>

  <p>A Arca não foi um projeto simples, e talvez justamente por isso tenha sido tão marcante. Foi uma experiência de muito aprendizado técnico e profissional, envolvendo produto, cliente, equipe, manutenção e tomada de decisão em um sistema com várias partes conectadas.</p>

  <p>Nem todo projeto termina perfeitamente fechado, mas acredito que fiz meu melhor para contribuir com uma base mais organizada, mais estável e mais fácil de continuar. Agradeço à CapiSite pela oportunidade de participar do desenvolvimento e ao Francisco Cassiano por compartilhar sua visão e suas necessidades ao longo do processo.</p>
  `,
};

export default {
  summary,
  page,
};
