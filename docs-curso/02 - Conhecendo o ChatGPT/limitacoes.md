---
sidebar_position: 5
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import CueCards from '@site/src/components/slides/CueCards';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceLaughWink } from '@fortawesome/free-solid-svg-icons';
import ReactDOMServer from 'react-dom/server'
import '../apresentacao.css';


# Desafios e limitações  

export const wink = ReactDOMServer.renderToString(<FontAwesomeIcon icon={faFaceLaughWink} />);
export const cardsData = [
  {
    title: "<i>Desafios e limitações</i>",
    description: "O que diz o artigo “<a href='https://criatividade.digital/blog/maquina-falar-nossa-lingua/' target='_blank'>Quando a Máquina Aprendeu a Falar a Nossa Língua?</a>” sobre esse assunto?",
    backgroundColor: "rgb(77, 226, 132)"
  },
  {
    title: "O ChatGPT pode ajudar",
    description: "<p><i>Prompt</i>: Quais são as limitações e os desafios dos modelos de linguagem (LLMs) mencionados pelo autor no texto a seguir? Responda apenas com base nas informações presentes no texto fornecido.</p><p><a href='https://chatgpt.com/share/677be1ef-d270-8003-9c51-b6113f5a6838' target='_blank'>Resposta ChatGPT</a>.</p>",
    backgroundColor:"rgba(47, 149, 227, 1)"
  },
  {
    title: "",
    description: 
    `<div style="text-align: center;">
      <ul style="display: inline-block; text-align: left; margin: 0 auto;">
        <li>Artigo:
          <ol>
            <li>Informações imprecisas e viés.</li>
            <li>Raciocínio lógico e conhecimento especializado.</li>
            <li>Dificuldade com contexto longo.</li>
            <li>Privacidade</li>
          </ol>
        </li>
        <li>Acrescentando:
          <ol>
            <li>Privacidade</li>
          </ol>
        </li>        
      </ul>
    </div>
    `,
    backgroundColor: "#74b9ff"
  },
  {
    title: "Como resolver?",
    description: 
    `<p>Pergunte ao ChatGPT! ${wink}</p>
    <a href='#promptLLMs'>Veja um exemplo</a>.
    `,
    backgroundColor:"rgba(47, 149, 227, 1)"
  },
  {
    title: "Dicas",
    description: 
    `<div style="text-align: center;">
      <ol style="display: inline-block; text-align: left; margin: 0 auto;">
        <li><strong>Prompt de qualidade</strong>: seja claro, detalhado e objetivo.</li>
        <li><strong>Valide informações</strong>: use múltiplas fontes e peça isenção.</li>
        <li><strong>Minimize vieses</strong>: solicite múltiplas perspectivas e neutralidade.</li>        
      </ol>
    </div>
   `,
    backgroundColor:"rgb(247, 180, 72)"
  },
  {
    title: "Dicas",
    description: 
    `<div style="text-align: center;">
      <ol start="4" style="display: inline-block; text-align: left; margin: 0 auto;">
        <li><strong>Aprofunde com etapas</strong>: divida a tarefa e explore cenários alternativos.</li>
        <li><strong>Conheça as limitações</strong>: trate o LLM como uma ferramenta, não a única voz.</li>
        <li><strong>Aprenda e ajuste</strong>: adapte sua abordagem com base na experiência.</li>
      </ul>
    </div>
   `,
    backgroundColor: "rgb(228, 215, 28)"
  },
  {
    title: "Contexto longo?",
    description: 
    `<div style="text-align: center;">
      <ul style="display: inline-block; text-align: left; margin: 0 auto;">
        <li>Verifique os limites presentes no seu plano do ChatGPT.</li>
        <li>Divida os dados enviados para análise.</li>
        <li>Em iterações longas você pode incluir no <i>prompt</i> o que é importante ser considerado.</li>
      </ol>
    </div>
   `,
    backgroundColor: "rgb(135, 28, 228)"
  },
  {
    title: "Privacidade?",
    description: 
    `<div style="text-align: center;">
      <ul style="display: inline-block; text-align: left; margin: 0 auto;">
        <li>Evite o uso de dados sensíveis a privacidade no <i>prompt</i>.</li>
        <li>Verifique a política de uso do ChatGPT adotada na sua organização.</li>
        <li>Desative o uso de dados para treinamento: "Configurações" | "Controlar dados" | desativar a opção "Melhorar o modelo para todo o mundo".</li>
      </ul>
    </div>
   `,
    backgroundColor: "rgb(192, 18, 219)"
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

<CueCards cardsData={cardsData} />
  <img src={useBaseUrl("/img/docs/curso/robo_limitacao.png")} alt="Bem-vindo ao curso" title="Imagem de exemplo" class="float-right" />
Vamos retornar ao artigo [*Quando a Máquina Aprendeu a Falar a Nossa Língua?*](https://criatividade.digital/blog/maquina-falar-nossa-lingua/) para explorar as limitações e os desafios enfrentados no uso atual do ChatGPT.  

Novamente, utilizarei um *prompt* para isso. Contudo, desta vez, como destacado na seção [Detalhando a tarefa](./detalhando), não incluí o link, mas sim o texto do artigo. Quero destacar, porém, que o texto apresentado no *prompt* abaixo não contém a íntegra do artigo, apenas uma indicação resumida, para facilitar a sua leitura.  

```url link='https://chatgpt.com/share/677be1ef-d270-8003-9c51-b6113f5a6838'
Quais são as limitações e os desafios dos modelos de linguagem (LLMs) mencionados pelo autor no texto a seguir? Responda apenas com base nas informações presentes no texto fornecido.
```
De acordo com a resposta do ChatGPT as limitações e desafios dos modelos de linguagem (LLMs) mencionados no artigo são:
* **Informações imprecisas e viés**: Os LLMs podem produzir respostas que não são totalmente corretas ou que refletem preconceitos embutidos nos dados de treinamento.
* **Raciocínio lógico e conhecimento especializado**: Demonstram limitações em tarefas que exigem lógica rigorosa, cálculos complexos ou informações muito recentes e específicas.
* **Dificuldade com contexto longo**: Eles podem perder detalhes importantes ao longo de conversas extensas, comprometendo a continuidade e precisão do diálogo.


Vou acrescentar mais um item que não está presente no artigo:
* **Privacidade**: 
Os LLMs levantam preocupações sobre a coleta, o armazenamento e o processamento dos dados enviados junto com os *prompts*.

<span id="promptLLMs" />
Adivinha como você pode aprender a minimizar essas limitações dos LLMs no seu dia a dia? Exatamente, consultando o próprio ChatGPT! Para ilustrar, vou sugerir um exemplo de *prompt* voltado para lidar com informações imprecisas e viés:

```url link='https://chatgpt.com/share/677beba2-0578-8003-a90e-4ff8af804be2'
Os LLMs podem produzir respostas que não são totalmente corretas ou que refletem preconceitos embutidos nos dados de treinamento. Explique, como um professor especialista em LLMs e com uma abordagem didática, um conjunto de dicas práticas e claras que usuários podem aplicar para reduzir o impacto dessas limitações. As dicas devem incluir estratégias para melhorar os prompts, validar informações e minimizar vieses nas respostas.
```
**Como minimizar o problema das informações imprecisas e do viés ao usar ferramentas baseadas em LLMs?**
A recomendação mais importante não diz respeito a estratégias ou técnicas de prompt, mas à sua postura ao utilizar o ChatGPT. Seja cético! Adote uma abordagem de *ceticismo saudável*, desconfiando de tudo que o LLM responder. Use as respostas como ponto de partida para reflexões ou análises, nunca como verdades absolutas.
1. **Prompt de qualidade**: seja claro, detalhado e objetivo.
1. **Valide informações**: use múltiplas fontes e peça isenção.
1. **Minimize vieses**: solicite múltiplas perspectivas e neutralidade.
1. **Aprofunde com etapas**: divida a tarefa e explore cenários alternativos.
1. **Conheça as limitações**: trate o LLM como uma ferramenta, não a única voz.
1. **Aprenda e ajuste**: adapte sua abordagem com base na experiência.

E complementando o ChatGPT:

* **Dificuldade com contexto longo**
   1. Verifique os limites presentes no seu plano do ChatGPT.
   1. Divida os dados enviados para análise.
   1. Em iterações longas você pode incluir no *prompt* o que é importante ser considerado.
* **Privacidade**
   1. Evite o uso de dados sensíveis a privacidade no *prompt*.
   1. Verifique a política de uso do ChatGPT adotada na sua organização.
   1. Desative o uso de dados para treinamento: "Configurações" | "Controlar dados" | desativar a opção "Melhorar o modelo para todo o mundo".

## Limitações versão gratuita
Aproveitando o tema "limitações", é importante destacar os pontos a serem observados caso você utilize a versão gratuita ChatGPT:
* O envio de anexos e a geração de imagens apresentam limitações significativas, incluindo um número reduzido de interações diárias.
* A quota de uso gratuito para as funcionalidades de análise e geração de texto é mais generosa. Diferentemente das opções de imagens e anexos, que deixam de funcionar completamente ao atingir o limite, a geração de texto permanece disponível. Contudo, nessa situação, o modelo utilizado passa a ser uma versão chamada de "míni". Essa versão simplificada oferece respostas adequadas, mas com menor capacidade de interpretar nuances da linguagem, compreender contextos complexos e produzir textos mais longos, coerentes e criativos. 
