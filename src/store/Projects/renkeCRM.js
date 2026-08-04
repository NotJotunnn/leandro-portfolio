const summary = {
  id: "renke",
  name: "Renke CRM",
  description: `Desenvolvimento fullstack em <span class="highlight">sistema CRM</span> com React, TypeScript e NestJS. Atuei na evolução de fluxos de conta, autenticação, edição de perfil, alteração de e-mail/senha e suporte backend para configurações de usuário. Também trabalhei na visualização de <span class="highlight">propriedades customizadas</span> no Kanban de oportunidades, ajustes de tipagem, correções de build e atualização de testes unitários, contribuindo para maior estabilidade e confiabilidade da aplicação.`,
  links: {
    github: "",
    documentation: "",
    external: "",
    figma: "",
  },
  thumb: "assets/projects/renkeCRM/thumb.png",
  tech: [
    "react",
    "typescript",
    "vite",
    "nestjs",
    "nodejs",
    "postgresql",
    "sequelize",
    "zod",
    "jest",
    "vitest",
    "docker",
    "figma",
  ],
};

const page = {
  duration: 1,
  durationMetric: "Ano",
  startDate: "15 de Junho, 2026",
  endDate: "15 de Agosto, 2026",
  githubRepoStatus: "Privado",
  jobs: ["Desenvolvedor Fullstack"],
  client: "Renke",
  clientSocial: "",
  content: `
  <h2>Resumo</h2>

  <p>${summary.description}</p>

  <h2>O projeto</h2>

  <p>A Renke foi uma experiência mais curta, mas bem intensa. Entrei em um CRM já em desenvolvimento, com várias regras de negócio, módulos conectados e um fluxo constante de ajustes entre frontend e backend. Diferente de projetos menores, aqui o desafio não era criar tudo do zero, mas entender uma base existente e conseguir contribuir sem quebrar comportamentos importantes.</p>

  <p>Durante minha atuação, trabalhei principalmente em melhorias de conta, autenticação, edição de perfil e ajustes no Kanban de oportunidades. Também mexi em propriedades customizadas, visualização de dados, suporte backend para novas configurações e correções relacionadas a tipagem, build e testes. Foi um projeto onde a atenção aos detalhes pesava bastante, porque pequenas inconsistências podiam afetar a experiência de múltiplos usuários usando o CRM ao mesmo tempo.</p>

  <p>Um dos pontos mais interessantes foi lidar com a conexão direta entre interface e API. Algumas mudanças pareciam simples visualmente, mas exigiam ajuste de contrato, validação de dados, alinhamento com o backend e garantia de que o comportamento continuaria estável nos fluxos existentes.</p>

  <h2>Desafios</h2>

  <p>O maior desafio foi entrar em uma aplicação grande, com ritmo ativo de desenvolvimento e pouca margem para tratar cada tarefa como algo isolado. Cada correção precisava considerar o impacto no fluxo do usuário, na estrutura de dados e na manutenção futura do projeto.</p>

  <p>Também foi uma experiência importante para trabalhar com código já existente, corrigir problemas de build, lidar com tipagem mais sensível e atualizar testes unitários. Esse tipo de trabalho não é sempre o mais chamativo visualmente, mas é essencial para manter um sistema confiável.</p>

  <p>A parte do Kanban de oportunidades também foi marcante, porque envolvia propriedades customizadas, exibição e ocultação de campos e comportamento esperado em diferentes cenários. Foi uma boa oportunidade para praticar manutenção de produto real, onde a entrega precisa funcionar bem no contexto do sistema inteiro.</p>

  <h2>Palavras finais</h2>

  <p>A Renke foi um projeto que reforçou bastante minha experiência com manutenção e evolução de sistemas profissionais. Mesmo em pouco tempo, consegui atuar em pontos importantes da aplicação, passando por frontend, backend, testes e integração entre as partes.</p>

  <p>Foi uma experiência curta, mas muito útil para consolidar minha atuação como desenvolvedor fullstack em aplicações reais, especialmente em sistemas que precisam de estabilidade, clareza de dados e boa experiência para usuários recorrentes.</p>
  `,
};

export default {
  summary,
  page,
};
