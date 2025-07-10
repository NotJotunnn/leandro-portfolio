import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    title: "Graduação",
    field: "UniCeub",
    date: "11/02/2020 - 03/07/2024",
    description:
      'Fiz minha <span class="highlight">graduação</span> no modelo <span class="highlight">bacharelado</span>, onde <span class="highlight">estudei</span> e <span class="highlight">pratiquei</span> habilidades e conhecimentos importantes para minha <span class="highlight">área de atuação</span> com <span class="highlight">especialização</span> em desenvolvimento <span class="highlight">frontend</span>.',
    filesLocation: [],
  },
  {
    title: "Estágio",
    field: "INEP",
    date: "01/01/2022 - 30/09/2022",
    description:
      'Sendo <span class="highlight">estagiário em TI</span>, trabalhei ao lado de <span class="highlight">servidores</span> e <span class="highlight">tercerizados</span> a fim de educar e ajudar usuários menos familiarizados com tecnologia e sistemas recém desenvolvidos.',
    filesLocation: [
      {
        location: "assets/experiences/inep/Relatório de Atividades.pdf",
        name: "Relatório de Atividades.pdf",
      },
      {
        location: "assets/experiences/inep/Relatório de Desempenho.pdf",
        name: "Relatório de Desempenho.pdf",
      },
    ],
  },
  {
    title: "Projeto para CleverSystem",
    field: "Projeto Integrador 6 - UniCeub",
    date: "05/08/2022 - 12/12/2022",
    description:
      'Trabalhei como <span class="highlight">Desenvolvedor principal</span> acompanhando outros membros de equipe e dando <span class="highlight">suporte</span> onde melhor cabia, trabalhando também <span class="highlight">boas práticas</span> de desenvolvimento. Utilizamos a metodologia <span class="highlight">Scrum</span> para desenvolvimento do projeto.',
    filesLocation: [],
  },
  {
    title: "Projeto para Lokinho Skins",
    field: "Freelance",
    date: "05/07/2024 - 15/01/2025",
    description:
      'Trabalhei como <span class="highlight">designer</span>, <span class="highlight">integrando design base</span> e alterando onde melhor considerando <span class="highlight">sucinto</span>. Também trabalhei <span class="highlight">desenvolvendo</span> a <span class="highlight">lógica</span> por trás das <span class="highlight">funcionalidades principais</span> no site como desenvolvedor <span class="highlight">Frontend</span>.',
    filesLocation: [],
  },
  {
    title: "Projeto para Churrascos Ferreira",
    field: "Freelance",
    date: "01/02/2024 - 13/02/2024",
    description:
      'Design de telas para construção de websites pelo <span class="highlight">Figma</span>. Design de <span class="highlight">5 telas</span> com intuito de <span class="highlight">guiar possíveis clientes pelo funil de vendas</span>. <span class="highlight">UI/UX moderno</span>. <span class="highlight">Mobile</span>.',
    filesLocation: [],
  },
];

const experiences = createSlice({
  name: "experiences",
  initialState,
});

export default experiences.reducer;
