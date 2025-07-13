const summary = {
  id: "portfolio",
  name: "Portfolio",
  description: `<span class="highlight">Redesign</span> completo do meu <span class="highlight">Portfólio</span> antigo! Feito para trazer mais em dia com o que <span class="highlight">produzo</span> (logo é de <span class="highlight">altíssima importância</span> o update!). Utilizei <span class="highlight">Vite</span>, <span class="highlight">Github Pages</span> para lidar com hosteamento, <span class="highlight">React Router</span> para lidar com a navegação, <span class="highlight">Redux</span> para os dados e <span class="highlight">React Icon</span> para lidar com os ícones que usei pelas páginas!`,
  links: {
    github: "",
    documentation: "",
    external: "",
    figma: "",
  },
  thumb: "/assets/projects/Portfolio/thumb.png",
  tech: ["reactRouter", "vite", "redux", "sass"],
};
const page = {
  duration: 1,
  durationMetric: "Semana",
  startDate: "Fevereiro, 2024",
  endDate: "Fevereiro, 2024",
  githubRepoStatus: "Indisponível (Por enquanto!)",
  jobs: ["Designer", "Desenvolvedor Frontend"],
  client: "Eu",
  clientSocial: "",
  content: `
  <h2>O resumo</h2>

  <p>${summary.description}</p>

  <h2>O projeto</h2>

  <p><span class="highlight">Redesign</span> completo do meu <span class="highlight">Portfólio</span> antigo! Feito para trazer mais em dia com o que <span class="highlight">produzo</span> (logo é de <span class="highlight">altíssima importância</span> o update!). Utilizei <span class="highlight">Vite</span>, <span class="highlight">Github Pages</span> para lidar com hosteamento, <span class="highlight">React Router</span> para lidar com a navegação, <span class="highlight">Redux</span> para os dados e <span class="highlight">React Icon</span> para lidar com os ícones que usei pelas páginas!</p>

  <h2>Problemas!</h2>

  <p>Após um tempo trabalhando na área, um dos elementos de contato mais importantes meu (meu portfólio), estava desatualizado. Não apenas isso como muito do que aprendi e ganhei, não eram demonstrados!</p>

  <p>Isso e acredito que para um mundo tech, onde nem todos empregadores são desenvolvedores, não é muito justo esperar que todos saibam usar Github!</p>

  <h2>Soluções</h2>

  <p>Considerando esses pontos, foi ai que uma nova versão do portfólio surgiu!</p>

  <p>E meu plano não pudia ser mais claro... Revitalizar um projeto que já havia me servido há tempo!</p>

  <div>
    <p>Para os que se interessam nos detalhes, o plano real foi o seguinte:</p>
    <ul>
      <li>1. Fazer um redesign de seções dos Projetos e Experiências para melhor demonstrar os aprendizado</li>
      <li>2. Desconectar o único caminho dos projetos do Github e trazer para o site em si</li>
      <li>3. Modernizar ainda mais o design, aplicando um pouco mais de figuras interessantes para talvez atrair melhor a atenção do usuário para seções importantes</li>
    </ul>
  </div>

  <p>E começando forte, decidi por utilizar o stack de React + Vite. Por ser um projeto relativamente simples, não acreditava (e ainda não acredito) que precisava de algo muito poderoso como NextJS.</p>

  <p>elementos como Header e Hero não precisavam de muita atenção, acredito que já supriam o que eu necessitava.</p>

  <img loading="lazy" src="/assets/projects/Portfolio/thumb.png" alt="Thumbnail do projeto" />

  <p>Olhos aguçados porém notaram um elemento novo no Hero!</p>

  <img loading="lazy" src="/assets/projects/Portfolio/artistreferenceimage.png" alt="Link de referência a imagem de fundo" />

  <p>Esse simbolosinho é uma das partes mais importantes para o revisionamento do site, os princípios! Eu sou uma pessoa que acredita fielmente na ajuda mútua em um ambiente de desenvolvimento. Logo, optei por deixar mais claro de onde a imagem de fundo se origina!</p>

  <img loading="lazy" src="/assets/projects/Portfolio/artistreference.gif" alt="Gif do link de referência a imagem de fundo sendo utilizado" />
  
  <p>Sim, é um link para o unsplash do artista!</p>
  
  <p>Próximo na linha era a seção "Sobre mim". Agora eu não sou uma pessoa de muitas palavras (irônico eu sei), mas eu ainda sim gostaria que intrevistadores ou empregadores passassem um tempo maior nessa sessão, justamente para terem um contexto maior do quem eu sou.</p>

  <img loading="lazy" src="/assets/projects/Portfolio/sobremim.png" alt="Imagem de referência da seção 'sobre mim'" />
  
  <p>Para isso utilizei de emojis, ilustrações simples, e animações para melhor demonstrar as tecnologias que uso, acredito também que as linhas não ficaram muito largas e com altura entre linhas boa para uma leitura rasa, deixando-a mais balanceada e direta ao ponto.</p>
  
  <p>Utilizei de botões para separar as tecnologias que sou familiarizado para realmente colocar em destaque que cada uma leva um espaço em minha cabeça.</p>
  
  <p>Por último, um CTA básico para lembrar o porque de estarem no site!</p>
  
  <p>Próximo na linha temos meu primeiro re-design em destaque, e um dos meus favoritos ainda por cima!</p>

  <img loading="lazy" src="/assets/projects/Portfolio/projetos.png" alt="Imagem de referência da seção 'projetos'" />
  
  <p>E já que esse re-design significa MUITO para mim, acredito que é justo compararmos com o que ele visa substituir!</p>

  <img loading="lazy" src="/assets/projects/Portfolio/projeto(antigo).png" alt="Imagem de referência da seção 'projetos' antiga" />

  <p>(Ignorem os projetos antigo não relacionados ao desenvolvimento Frontend! Estou trabalhando em novos projetos que mais cedo ou mais tarde aparecerão no site!)</p>

  <p>Como podem ver, o design mudou absurdamente! Passou de um simples clique para acessar o Github, para algo realmente com mais detalhes, e que você nem ao menos precisa sair do site para saber mais sobre!</p>

  <p>Tech Stack usada? visível desde o início, links externos para os interessados em ve *ver* o projeto em seu funcionamento ou o design do mesmo? Logo ao lado do botão de ler mais.</p>

  <p>Além do meu trabalho em específico e descrição breve que acredito já estarem familiarizados no UI.</p>

  <p>Espero que tenham sentido minha paixão pela tela porque eu estou me segurando aqui pra não derramar lágrimas por quão bom que terminou.</p>

  <p>Próximo tivemos um outro re-design magnífico! Dessa vez da seção de Experiências!</p>

  <img loading="lazy" src="/assets/projects/Portfolio/conhecimentos.png" alt="Imagem de referência da seção 'conhecimento'" />

  E como podem ver, eu mantive o design antigo! 😂

  <p>Brincadeiras à parte, acredito que todos estão familiarizados com o Seguimento de botões acima do "Grande retângulo misterioso! 👻". Como já podem ter notado <span class="italic">também</span>, agora há novas 3 seções, todos bem auto explicativos e com um ar individual!</p>

  <img loading="lazy" src="/assets/projects/Portfolio/depoimentos.png" alt="Imagem de referência da seção 'conhecimento' no segmento de Depoimentos" />

  <p>Já na segunda seção interna do container, temos uma visão diferente! Um celular com Whatsapp aberto! Minha intenção para essa seção já deve estar bastante clara, mas já que ambos meus depoimentos de projetos foram feitos pelo Whats, nada mais justo que trazer essa experiência para o site.</p>

  <p>Um outro elemento interessante, tem que ser esse cursor estranho, e ja digo, ele foi feito para aqueles que tem um pouco mais de dificuldade em diferenciar um elemento interagível de um que é puramente ilustrativo!</p>

  <img loading="lazy" src="/assets/projects/Portfolio/cursormovement.gif" alt="Gif de referência da seção 'conhecimento' no segmento de Depoimentos com um cursor guia" />

  <p>Como pode ver ele é um elemento crucial na luta pela claridade! Não é perfeito, nada é, porém em meus testes limitados, ele se demonstrou bastante útil!</p>

  <p>As outras telas não são tão interessantes quanto essa, mas no meu ver elas não precisam ser. É como nas embalagens de alimentos, temos o que o produto é estampado com uma ilustração divertida, e todas as informações necessárias temos escondido em uma tabela que nem todo mundo lê (infelizmente).</p>

  <p>Clicando na tela, temos a próxima rolando para vista (Sim é necessário mostrar a animação!).</p>

  <img loading="lazy" src="/assets/projects/Portfolio/cellphoneanimation.gif" alt="Gif de referência da animação na seção 'conhecimento' no segmento de Depoimentos" />

  <p>Alguns testes depois e temos um mock da tela do Whatsapp feita por completo!</p>

  <img loading="lazy" src="/assets/projects/Portfolio/mockwhatsappfuncional.png" alt="Demonstração de como a tela do mock iterativo ficou" />

  <p>Agora é claro, não vou colocar o feedback completo em uma tela, para as pessoas que so querem ver o breve, isso normalmente é tudo que precisam, porém para os mais céticos, tenho uma imagem de fácil acesso que podem abrir no celular próprio para verem o feedback do jeito que foi enviado!</p>

  <img loading="lazy" src="/assets/projects/Portfolio/downloaddofeedbackoriginal.png" alt="Demonstração da mensagem de download" />

  <p>Agora indo mais nos detalhes sobre a documentação presente no site!</p>

  <img loading="lazy" src="/assets/projects/Portfolio/thumbdoc.png" alt="Imagem da thumbnail da página de documentação do projeto Lokinho Skins" />

  <p>Escrita por mim mesmo, nela possuímos todas as curiosidades, dificuldades (que eu pude lembrar 😅) que tive no projeto, e como já deve ter notado lendo este documento, também variam bastante nas descrições.</p>

  <p>Eu gosto de deixar bastante claro tudo que fiz em um projeto (e isso é demonstrado claramente pela tabela logo abaixo da thumb do projeto!).</p>

  <p>Indo para a última volta agora, temos a versão mobile de tudo que foi apresentado. Meu interesse na versão mobile estava mais em mostrar tudo que foi feito, apenas mais direto ao ponto (pessoal fã de mobile definitivamente não tem uma atenção muito grande).</p>

  <img loading="lazy" src="/assets/projects/Portfolio/cardmobile.png" alt="Imagem do card de um projeto com responsividade" />

  <p>Cards simples.</p>

  <img loading="lazy" src="/assets/projects/Portfolio/experienciasmobile.png" alt="Imagem da seção de 'conhecimentos' no segmento 'experiências' com responsividade" />

  <img loading="lazy" src="/assets/projects/Portfolio/cursorhelpersegment.gif" alt="Gif demonstrando o botão de segmentos responsivo" />

  <p>Barra de segmento mobile (contando com seu próprio cursor!).</p>

  <p>E é isso, os demais elementos não tiveram uma transição muito complicada para mobile!</p>
  
  <h2>Palavras Finais</h2>

  <p>Por fim, esse projeto foi de longa vinda, tenho que admitir que estava procrastinando esse tempo todo, mas estou muito feliz que terminou do jeito que terminou. É visualmente tudo que eu tinha em mente (será que já posso me considerar um artista 🤔) e acredito que ainda vai surpreender muitas pessoas interessadas no que faço la fora!</p>
  `,
};

export default {
  summary,
  page,
};
