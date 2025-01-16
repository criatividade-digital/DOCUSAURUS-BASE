---
sidebar_position: 3
---
import PromptLinkedin from '@site/src/components/prompt/PromptLinkedin';
import useBaseUrl from '@docusaurus/useBaseUrl';
import CueCards from '@site/src/components/slides/CueCards';
import LigaHighlight from '@site/src/components/gsap/highlight'
import '../apresentacao.css';

# Detalhando a tarefa
<LigaHighlight />
export const cardsData = [
  {
    title: "<i>Prompt</i>",
    description: "<p><b>Menos detalhes:</b> mais liberdade na geração de texto pelo ChatGPT.<p/><p><b>Mais detalhes</b>: direciona a geração de texto pelo ChatGPT.</p> ",
    backgroundColor:"rgb(77, 226, 132)"
  },
  {
    title: "Exemplos",
    description: "<p><b>Menos:</b> Crie um post para o LinkedIn.</p><p><b>Mais:</b> Crie um post para o LinkedIn. Comece com uma pergunta provocativa para despertar a curiosidade. Destaque o principal aprendizado do artigo em 2 frases...</p>",
    backgroundColor: "#74b9ff"
  },
  {
    title: "Gerador de <i>post</i> para LinkedIn",
    description: "Confira o gerador de <i>prompts</i> para LinkedIn detalhando: público alvo, tom e abordagem, estrutura, <i>call to action</i> e <i>hashtags.</i>",
    backgroundColor: "#0984e3"
  },
  {
    title: "Indo além do gerador",
    description: 
    `<div style="text-align: center;">
      <ul style="display: inline-block; text-align: left; margin: 0 auto;">
        <li>Abertura impactante:
          <ol>
            <li>Comece com uma pergunta provocativa.</li>
            <li>Apresente um dado intrigante ou estatística.</li>
            <li>Conte uma micro-história pessoal ou profissional.</li>
          </ol>
        </li>
        <a href="#varia%C3%A7%C3%B5es">Clique para ver mais variações...</a>
      </ul>
    </div>`
    ,
    backgroundColor: "#a29bfe"
  },
  {
    title: "⚠️ Sugestão!",
    description: "Incluir o texto diretamente no <i>prompt</i> para garantir precisão e contexto, evitando problemas de acesso a <i>links</i> ou consultas a fontes variadas.",
    backgroundColor: "#ff7675"
  },
];

<CueCards cardsData={cardsData} />
  <img src={useBaseUrl("/img/docs/curso/post-linkedin.png")} alt="Bem-vindo ao curso" title="Imagem de exemplo" class="float-right" />
No primeiro conjunto de exemplos de *prompts*, forneci apenas uma quantidade básica de detalhes para que o ChatGPT realizasse a tarefa. Quanto <span class="text-highlight">menos detalhes incluirmos,</span> mais liberdade a ferramenta terá para gerar os resultados. No entanto, assim como podemos criar comandos mais "genéricos", também é possível detalhar melhor as instruções para obter resultados mais alinhados às nossas expectativas.  

Selecione uma ou mais opções abaixo para visualizar como o *prompt* é ajustado com base nas suas escolhas, direcionando a tarefa de geração do *post* no LinkedIn.  

<PromptLinkedin />

<br />
[Clique aqui](https://chatgpt.com/share/6779a969-9420-8003-aad7-01e0279d789c) para visualizar o resultado com todas as opções ativadas.

:::warning

Incorpore o texto diretamente no *prompt*, em vez de incluir apenas o link. Isso evita possíveis problemas caso o ChatGPT não consiga acessar o link ou recorra a fontes variadas. Ao inserir o conteúdo no próprio *prompt*, você assegura maior precisão e um melhor aproveitamento do contexto fornecido. No exemplo, utilizei o link apenas para facilitar a visualização do texto nesta explicação.

:::

## Variações
Muitas ferramentas de computador seguem um uso direto e objetivo, mas, com o ChatGPT, a criação de prompts exige mais experimentação e refinamento do que seguir um conjunto rígido de regras. Para obter os melhores resultados, é essencial testar diferentes abordagens, observar as respostas e ajustá-las conforme necessário. Esse processo de tentativa e adaptação é fundamental para aprimorar sua técnica e explorar todo o potencial da ferramenta.

Por exemplo, ao criar o texto para o *prompt*, podem ser exploradas alternativas como:
* Abertura impactante: 
  1. Comece com uma pergunta provocativa.
  1. Apresente um dado intrigante ou estatística.
  1. Conte uma micro-história pessoal ou profissional.
* Formatação:
  1. Use emojis para destacar pontos importantes.
  1. Use listas com marcadores para destacar pontos importantes.
* Tom e abordagem:
  1. Simples, acessível e envolvente. Evite jargões técnicos.
  1. Formal, objetivo e técnico, adequado para documentações, relatórios técnicos ou materiais acadêmicos.
  1. Descontraído, próximo e convidativo, como se estivesse conversando com um amigo.
* CTA:
  1. Encoraje o leitor a ler o artigo completo no link.
  1. Incentive a interação.
  1. Gere discussão.
