import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    title: "CSSstudies",
    url: "/NotJotunnn/CSSstudies",
    description: "Some of my favorite little css studies",
    star: true,
  },
  {
    title: "E-commerce-Project",
    url: "/NotJotunnn/E-commerce-Project",
    description:
      "Real life study of a company and development of an E-commerce",
    star: true,
  },
  {
    title: "Projects",
    url: "/NotJotunnn/Projects",
    description: "A few of my projects from past year",
    star: true,
  },
  {
    title: "Alura-studies",
    url: "/NotJotunnn/Alura-studies",
    description: "Todos os estudos que fiz durante meus estudos",
    star: false,
  },
  {
    title: "Object-Oriented-Studies",
    url: "/NotJotunnn/Object-Oriented-Studies",
    description: "N/A",
    star: false,
  },
  {
    title: "Projeto-CRUD",
    url: "/NotJotunnn/Projeto-CRUD",
    description: "Projeto da aula de Web quinta",
    star: false,
  },
  {
    title: "Workflow-projects",
    url: "/NotJotunnn/Workflow-projects",
    description: "Some of the projects I've used to better my workflow!",
    star: false,
  },
  {
    title: "Rocket-Projects",
    url: "/NotJotunnn/Rocket-Projects",
    description: "A collection of past projects from Rocketseat done(or not)",
    star: false,
  },
  {
    title: "Scrimba-Projects",
    url: "/NotJotunnn/Scrimba-Projects",
    description: "Some of my projects from the Scrimba course!",
    star: false,
  },
];

const studies = createSlice({
  name: "studies",
  initialState,
});

export default studies.reducer;
