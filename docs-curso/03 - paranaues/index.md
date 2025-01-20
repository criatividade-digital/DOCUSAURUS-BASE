---
sidebar_position: 4
---
import LigaHighlight from '@site/src/components/gsap/highlight'
import CardSwiper from '@site/src/components/slides';

# Os Paranauês
<LigaHighlight />
export const cardsData = [
  {
    title: "Informações imprecisas e viés",
    description: 
    `
    <p>Podem produzir respostas incorretas ou refletir preconceitos dos dados de treinamento.
    </p>
    `,
    backgroundColor: "rgb(77, 226, 132)"
  },
  {
    title: "Raciocínio lógico e conhecimento especializado",
    description: "<p>Têm dificuldades com lógica rigorosa, cálculos complexos e informações muito específicas ou recentes.</p>",
    backgroundColor:"rgba(47, 149, 227, 1)"
  },
  {
    title: "Dificuldade com contexto longo",
    description: 
    `
    <p>Perdem detalhes em conversas extensas, comprometendo a continuidade.
    </p>
    `,
    backgroundColor: "#74b9ff"
  },
  {
    title: "Privacidade",
    description: 
    `<p>Riscos associados ao envio (inclusão nos <i>prompts</i>) de dados sensíveis a privacidade.</p>
    `,
    backgroundColor:"rgba(47, 149, 227, 1)"
  },
  {
    title: "⚠️ Versão gratuita",
    description: 
    `<div style="text-align: center;">
      <ul style="display: inline-block; text-align: left; margin: 0 auto;">
        <li>Geração de imagens e envio de anexos têm limitações rigorosas e poucos usos diários.</li>
        <li>Geração de texto tem maior quota, mas, ao atingir o limite, usa um modelo simplificado, com respostas menos complexas e criativas.</li>
      </ol>
    </div>
    `,
    backgroundColor: "#ff7675"
  },
];

Neste capítulo, vou aprofundar os exemplos de *prompts* apresentados anteriormente e revelar todos os "paranauês" — ou melhor, os "segredos" por trás de cada um deles.

Antes de prosseguir, confira os cartões abaixo para relembrar as limitações/desafios no uso do ChatGPT que serão essenciais para compreender as técnicas abordadas a seguir.

<CardSwiper cards={cardsData} />

