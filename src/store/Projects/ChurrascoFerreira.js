const summary = {
  id: "churrascosferreira",
  name: "Churrascos Ferreira",
  description: `Design e desenvolvimento completo do <span class="highlight">site</span> para Churrascos Ferreira no <span class="highlight">Figma</span>, criando uma <span class="highlight">experiência visual moderna</span> e <span class="highlight">altamente funcional</span>. O projeto <span class="highlight">prioriza</span> a <span class="highlight">conversão com call-to-actions estratégicos</span>, <span class="highlight">galeria interativa de serviços</span> e <span class="highlight">cardápio em formato pop-up</span>, tudo integrado a uma estrutura <span class="highlight">mobile-first</span>. Utilizei uma paleta de cores <span class="highlight">sóbria</span> baseada na identidade da marca, com componentes <span class="highlight">reutilizáveis</span> como cards <span class="highlight">animados</span> e seções de <span class="highlight">depoimentos</span> visuais, <span class="highlight">garantindo</span> uma navegação <span class="highlight">intuitiva</span> tanto em <span class="highlight">desktop</span> quanto <span class="highlight">dispositivos móveis</span>.`,
  links: {
    github: "https://github.com/NotJotunnn/churrascosFerreira",
    documentation: "/projects/churrascosferreira",
    external: "https://www.churrascosferreira.com.br",
    figma:
      "https://www.figma.com/design/FJMrClD4aNqdKMHQLaGfQ7/Projeto-Churrasco?node-id=0-1&t=NgUOMlZXZIcBUQuc-1",
  },
  thumb: "assets/projects/ChurrascoFerreira/thumb.png",
  tech: ["figma", "nextjs", "eslint", "typescript", "react", "nodejs", "tailwindcss"],
};

const page = {
  duration: 4,
  durationMetric: "Semanas",
  startDate: "Julho 1, 2025",
  endDate: "Julho 31, 2025",
  githubRepoStatus: "Aberto! 🥳",
  jobs: ["Designer", "Desenvolvedor Frontend"],
  client: "Churrascos Ferreira",
  clientSocial:
    "https://www.instagram.com/churrascosferreiradf?igsh=bDhyeW5xY2FuOHlw&utm_source=qr",
  content: `
  <h2>Atualização de 1 de Agosto!</h2>

  <p>Oficialmente o site está de pé!, o github disponível. Esse projeto foi uma grande evolução minha como desenvolvedor, e espero que consigam notar o avanço ao todo! Novamente agradeço à empresa <a target="_blank" href="https://www.instagram.com/churrascosferreiradf?igsh=bDhyeW5xY2FuOHlw&utm_source=qr">Churrascos Ferreira</a> pela oportunidade e por terem escolhido seguir com meus serviços!</p>

  <h2>O resumo</h2>

  <p>${summary.description}</p>

  <h2>O projeto</h2>

  <p>Para aqueles que leram meu estudo de caso do projeto Lokinho Skins, este documento será levemente diferente, justamente por ter participado do início, levarei em consideração desde o início, os problemas pelas quais meu design tenta solucionar.</p>

  <p>E como clarificação, este projeto é apenas um Design (por enquanto)!</p>

  <h2>Problemas!</h2>

  <p>Entrando em contato com a empresa Churrascos Ferreira, ofereci a oportunidade de desenvolver um site para melhorar sua presença online, sendo uma empresa muito dependente na aquisição passiva de clientes pelos posts que fazem, e por referências de possíveis clientes pelas quais fazem o serviço.</p>

  <p>Eu me considero sortudo por já saber de muito disso, justamente por ter um passado trabalhando como garçon, e ja estar envolvido no cenário desde cedo.</p>

  <h2>Soluções</h2>

  <div>
    <p>Considerando o texto passado, os pontos que mais queria tratar durante o desenvolvimento desse site, serão os seguintes:</p>
    <ul>
      <li>Criar um design simples e fácil</li>
      <li>Criar um design mais *chamativo*, dando ênfase na identidade virtual da empresa</li>
      <li>Utilizar os famosos botões "Call to action" para melhor vender os serviços para os visitantes do site</li>
      <li>Utilizar de sessões adicionais de "Serviços" e "Galeria" para melhor demonstrar a experiência por trás da empresa</li>
      <li>Criar um *LinkTree* de canais pela qual visitantes poderam acessar para conhecer mais do trabalho</li>
      <li>Adaptar tudo para *mobile*</li>
    </ul>
  </div>

  <p>Meu interesse à essa etapa, é utilizar de sites já inseridos nesse contexto como referência, somando meus conhecimentos na criação de sites modernos, para casar um visual mais amistoso.</p>

  <p>Sendo assim, abri meu navegador e comecei à busca por sites referências envolvidos no mesmo contexto da minha empresa cliente.</p>

  <img loading="lazy" src="assets/projects/ChurrascoFerreira/References.png" alt="Referências usadas na criação do site" />

  <p>Como pode ver, minhas referências variam bastante, desde elementos visualmente interessantes, até sessões completas como *Footer* ou Galeria. Meu interesse nessa parte é justamente pegar tudo que atrai minha atenção, sem dar muita ideia para o que vai ou não terminar no design final.</p>

  <p>Após a longa caça por referências (e mais importante, a satisfação de tudo aquilo que preciso pra começar).</p>

  <img loading="lazy" src="assets/projects/ChurrascoFerreira/thumb.png" alt="Imagem da tela home" />

  <span>
    <div>
      <h3>Informação</h3>
      <p>Infelizmente não fui capaz de voltar atrás o suficiente para ter acesso aos Wireframes, porém eles não fogem muito de como ficou o projeto final!</p>
    </div>
  </span>

  <p>Começo lento, com um wireframe simples, focando apenas em como o olho do visitante irá navegar pelo site. Logo penso em uma estrutura simples:</p>

  <p>Header --> Hero --> Serviços principais --> CTA (Call to action) --> História --> Serviços gerais (mais detalhes) --> Clientes antigos --> CTA --> Footer</p>

  <p>Não planejei isso tudo de uma só vez, porém foi o que trabalhei na etapa de Wireframe da página *Home*.</p>

  <div>
    <p>Para as outras páginas tivemos o seguinte:</p>
    <ul>
      <li>Sobre Nós</li>
          <ul>
          <li>Página utilizada para focar na apresentação da empresa em si</li>
          <li>Header --> Hero --> História --> Serviços gerais --> Footer</li>
        </ul>
      <li>Galeria</li>
          <ul>
          <li>Página utilizada para demonstrar fotos sobre a empresa e seus serviços</li>
          <li>Header --> Hero -->  Galeria --> CTA (instagram) --> CTA --> Footer</li>
        </ul>
      <li>Serviços</li>
          <ul>
          <li>Página utilizada para trabalhar um pouco mais os visitantes no funil de vendas</li>
          <li>Header --> Hero --> Serviços principais (maior detalhes, incluindo cardápio) --> Perguntas frequentes --> CTA --> Footer</li>
        </ul>
    </ul>
  </div>

  <p>Logo após vieram as cores. Agora eu me considero um homem simples, e acredito que meu design demonstra muito deste fator, logo, minha paleta de cores também não é muito complicada.</p>

  <img loading="lazy" src="assets/projects/ChurrascoFerreira/Palette.png" alt="Imagem da paleta de cores" />

  <p>Meu interesse nessas cores está muito ligado às cores providas da logo da empresa, incluindo algumas externas, adicionadas apenas para dar melhor destaque as cores escolhidas.</p>

  <img loading="lazy" src="assets/projects/ChurrascoFerreira/Logos.png" alt="Imagem das logos vetorizadas" />

  <p>Em termos de destaques do desenvolvimento, tivemos:</p>

  <img loading="lazy" src="assets/projects/ChurrascoFerreira/Services.png" alt="Imagem da seção de serviços" />

  <p>Decidir ir por um design bastante amigável, uma imagem, pela qual o usuário pode passar o mouse por cima, para saber de qual cardápio se tratava!</p>

  <h3>Colagens</h3>

  <img loading="lazy" src="assets/projects/ChurrascoFerreira/Colagens.png" alt="Imagem das colagens" />

  <p>Feitas com o âmbito de melhor detalhar as sessões de história e serviços gerais. Escolhi as formas para melhor demonstrar as características principais da empresa, isto é, que é uma família, e oque ela serve.</p>

  <h3>Clientes</h3>

  <img loading="lazy" src="assets/projects/ChurrascoFerreira/Testimonials.png" alt="Imagem da seção de depoimentos" />

  <p>Para essa seção eu decidir ir um passo além, como pode ver, dentre as logos usadas, algumas não possuem um fundo colorido, logo eu facilitei a visualização, colocando um fundo branco. E como pode ver, também estilizei o fundo, para parecer uma ponte, com todas as empresas formando a estrutura!</p>

  <h2><span class="italic">Header</span> & <span class="italic">Footer</span></h2>

  <img loading="lazy" src="assets/projects/ChurrascoFerreira/Header.png" alt="Imagem do Cabeçalho" />

  <img loading="lazy" src="assets/projects/ChurrascoFerreira/Footer.png" alt="Imagem do Footer" />

  <p>Esse foi um desafio interessante, eu queria algo que demonstrasse informação suficiente, sem transbordar ou passar dos limites, e por mais esperado que seja, é algo que possuo muito orgulho!</p>

  <h3>Serviços principais (Detalhado)</h3>

  <p>Seguindo um pouco os passos da sessão clientes, decidir não me segurar em uma das sessões mais importantes para o site!</p>

  <img loading="lazy" src="assets/projects/ChurrascoFerreira/ServicesDetailed.png" alt="Imagem da seção de serviços detalhada" />

  <p>O plano aqui é simples, fundo estático com animação leve, texto na frente com destaque no plano e uma descrição média para destacar o serviço, um botão CTA e um para obter ainda mais detalhes (do cardápio). Um outro detalhe interessante, está nas abas acima, de tempo em tempo, a aba passará para próxima, com uma animaçãozinha bem suave.</p>

  <h3>Cardápio</h3>

  <img loading="lazy" src="assets/projects/ChurrascoFerreira/Menu.png" alt="Imagem do cardápio" />

  <p>Já para o cardápio, eu fui com um tema mais simples e direto ao ponto, ele aparecerá como um popup, e possuirá uma imagem à esquerda, e os detalhes à direita, com o nome por cima, e com os itens abaixo.</p>

  <h3><span class="italic">Mobile</span></h3>

  <p>E por fim, um ponto extremamente importante!</p>

  <img loading="lazy" src="assets/projects/ChurrascoFerreira/Mobile.png" alt="Imagem dos wireframes para telas mobile" />

  <p>O design *mobile* completo, incluindo um Link Tree integrado ao site mesmo, mostrando horário de funcionamento, botões de redes, logo e um (possível) videozinho tocando lentamente no fundo, para não distrair muito.</p>

  <h2>Palavras Finais</h2>

  <p>Por fim, sou grato pela oportunidade concedida pelo pessoal do <a target="_blank" href="https://www.instagram.com/churrascosferreiradf?igsh=bDhyeW5xY2FuOHlw&utm_source=qr">Churrascos Ferreira</a>, este projeto foi uma oportunidade única, e trabalhar perto me permitiu <span class="italic">insights</span> sobre a área que eu não teria em uma outra ocasião. Espero fielmente que algum dia coloquemos esse site no ar, e que seja eu na produção (kk)!</p>
  `,
};

export default {
  summary,
  page,
};
