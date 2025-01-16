---
sidebar_position: 1
---
import LigaHighlight from '@site/src/components/gsap/highlight'
import useBaseUrl from '@docusaurus/useBaseUrl';
import './apresentacao.css';
import CueCards from '@site/src/components/slides/CueCards';

# Apresentação do curso
<LigaHighlight />
export const cardsData = [
  {
    title: "Bem-vindo!",
    description: "Nosso foco: otimizar processos e fluxos de trabalho usando o ChatGPT",
    backgroundColor:"rgba(244, 182, 47, 1.94)"
  },
  {
    title: "Você sabia que a forma como você se comunica com a tecnologia pode ser a chave para transformar tarefas que levam horas em minutos?",
    description: "Leitura do artigo <a href='https://criatividade.digital/blog/maquina-falar-nossa-lingua/' target='_blank'>Quando a Máquina Aprendeu a Falar a Nossa Língua?</a>",
    backgroundColor: "#74b9ff"
  },
];

<CueCards cardsData={cardsData} />

Bem-vindo a este minicurso sobre o uso do ChatGPT! 
  <img src={useBaseUrl("/img/docs/curso/lapttop_chatgpt.png")} alt="Bem-vindo ao curso" title="Imagem de exemplo" class="float-right" />
  Aqui, você aprenderá como ele pode ser usado para <span class="text-highlight">otimizar processos e fluxos de trabalho,</span> transformando seu dia a dia.

Mas antes, permita-me perguntar: 

*Você sabia que a forma como você se comunica com a tecnologia pode ser a chave para transformar tarefas que levam horas em minutos?* 

Para entender como isso é possível, convido você a ler o artigo [*Quando a Máquina Aprendeu a Falar a Nossa Língua?*](https://criatividade.digital/blog/maquina-falar-nossa-lingua/) antes de iniciar o curso.
