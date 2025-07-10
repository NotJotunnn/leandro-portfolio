import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentChatName: "",
  currentChat: {
    name: "Hugo Rodrigues",
    profilePicture: "assets/experiences/lokinhoskins/dev.png",
    project: "Lokinho Skins",
    date: "14 October, 2024",
    convo: [
      {
        user: "local",
        message: "Eai? Oque achou de trabalhar comigo?",
        sent: "",
      },
      {
        user: "local",
        message: "A parte de desenvolver em massa pelo menos.",
        sent: "",
      },
      {
        user: "network",
        message: "Baum demais.",
        sent: "",
      },
      {
        user: "network",
        message: "Fez o Front que eu não curto.",
        sent: "",
      },
      {
        user: "network",
        message: "Principalmente isso.",
        sent: "",
      },
      {
        user: "network",
        message: "Lidou bem com os problemas.",
        sent: "",
      },
      {
        user: "network",
        message: "Agora bem nas adversidades.",
      },
      {
        user: "network",
        message: "E tá disposto a melhorar conforme os problemas.",
      },
      {
        user: "local",
        message: "Muito obrigado manin.",
      },
      {
        user: "download",
        message:
          "<a download href='assets/experiences/lokinhoskins/devTestimonial.jpeg'><img src='assets/experiences/lokinhoskins/devTestimonial.jpeg' alt='Imagem do depoimento do cliente' /></a> Conversa alterada do feedback original! Caso queira ver o feedback original basta acessar clicar na imagem acima",
      },
    ],
  },
  data: [
    {
      name: "Hugo Rodrigues",
      profilePicture: "assets/experiences/lokinhoskins/dev.png",
      project: "Lokinho Skins",
      date: "14 October, 2024",
      convo: [
        {
          user: "local",
          message: "Eai? Oque achou de trabalhar comigo?",
          sent: "22:21",
        },
        {
          user: "local",
          message: "A parte de desenvolver em massa pelo menos.",
          sent: "22:21",
        },
        {
          user: "network",
          message: "Baum demais.",
          sent: "22:31",
        },
        {
          user: "network",
          message: "Fez o Front que eu não curto.",
          sent: "22:31",
        },
        {
          user: "network",
          message: "Principalmente isso.",
          sent: "22:31",
        },
        {
          user: "network",
          message: "Lidou bem com os problemas.",
          sent: "22:31",
        },
        {
          user: "network",
          message: "Agora bem nas adversidades.",
          sent: "22:31",
        },
        {
          user: "network",
          message: "E tá disposto a melhorar conforme os problemas.",
          sent: "22:32",
        },
        {
          user: "local",
          message: "Muito obrigado manin.",
          sent: "22:32",
        },
        {
          user: "download",
          message:
          "<a download href='assets/experiences/lokinhoskins/devTestimonial.jpeg'><img src='assets/experiences/lokinhoskins/devTestimonial.jpeg' alt='Imagem do depoimento do cliente' /></a> Conversa alterada para manter mais direto ao ponto! Caso queira ver o feedback completo basta acessar clicando na imagem acima",
        },
      ],
    },
    {
      name: "Evandro Vidal",
      profilePicture: "assets/experiences/lokinhoskins/cliente.jpeg",
      project: "Lokinho Skins",
      date: "14 October, 2024",
      convo: [
        {
          user: "local",
          message:
            "Eu queria pegar um pouco do feedback do que você achou, me ter ajudando no site.",
          sent: "22:55",
        },
        {
          user: "local",
          message: "O que achou do trabalho?",
          sent: "22:55",
        },
        {
          user: "network",
          message: "Mano achei seu trampo incrivel",
          sent: "23:00",
        },
        {
          user: "network",
          message:
            "de 0 a 10 te dou 9,00\n\n(primeiro nada tem perfeição)\ngostei muito de tudo mesmo de verdade, unica coisa que me pego é com esses bugs, roleta piscando e tal mas isso são correções !!",
          sent: "23:01",
        },
        {
          user: "tip",
          message:
            "Os bugs mencionados acima foram consertados após a aquisição do feedback!",
        },
        {
          user: "download",
          message:
            '<a download href="assets/experiences/lokinhoskins/clientTestimonial.jpeg" > <img src="assets/experiences/lokinhoskins/clientTestimonial.jpeg" alt="Imagem do depoimento do cliente" /> </a> Conversa alterada para manter mais direto ao ponto! Caso queira ver o feedback original basta acessar clicando na imagem acima',
        },
      ],
    },
  ],
};

const testimonials = createSlice({
  name: "testimonials",
  initialState,
  reducers: {
    changeCurrentChatName: (state, { payload }) => {
      state.currentChatName = payload;
    },
    changeCurrentActiveChat: (state, { payload }) => {
      state.currentChat = state.data.find((chat) => chat.name === payload);
    },
  },
});

export const { changeCurrentChatName, changeCurrentActiveChat } =
  testimonials.actions;
export default testimonials.reducer;
