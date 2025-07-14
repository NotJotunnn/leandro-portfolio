import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    title: "CSSstudies",
    url: "https://github.com/NotJotunnn/CSSstudies",
    description: "Some of my favorite little css studies",
  },
  {
    title: "E-commerce-Project",
    url: "https://github.com/NotJotunnn/E-commerce-Project",
    description:
      "Real life study of a company and development of an E-commerce",
  },
  {
    title: "Object-Oriented-Studies",
    url: "https://github.com/NotJotunnn/Object-Oriented-Studies",
    description: "N/A",
  },
  {
    title: "Projeto-CRUD",
    url: "https://github.com/NotJotunnn/Projeto-CRUD",
    description: "Projeto da aula de Web quinta",
  },
  {
    title: "netlify-study",
    url: "https://github.com/NotJotunnn/netlify-study",
    description: "N/A",
  },
  {
    title: "Workflow-projects",
    url: "https://github.com/NotJotunnn/Workflow-projects",
    description: "Some of the projects I've used to better my workflow!",
  },
  {
    title: "Projects",
    url: "https://github.com/NotJotunnn/Projects",
    description: "A few of my projects from past year",
  },
  {
    title: "Rocket-Projects",
    url: "https://github.com/NotJotunnn/Rocket-Projects",
    description: "A collection of past projects from Rocketseat done(or not)",
  },
  {
    title: "Scrimba-Projects",
    url: "https://github.com/NotJotunnn/Scrimba-Projects",
    description: "Some of my projects from the Scrimba course!",
  },
  {
    title: "churrascoProject",
    url: "https://github.com/NotJotunnn/churrascoProject",
    description: "N/A",
  },
];

const studies = createSlice({
  name: "studies",
  initialState,
});

export default studies.reducer;
