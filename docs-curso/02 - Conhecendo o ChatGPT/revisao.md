---
sidebar_position: 3
---
import PromptRevisao from '@site/src/components/prompt/PromptRevisao';
import CodeDiffViewer from '@site/src/components/Diferenca';
import useBaseUrl from '@docusaurus/useBaseUrl';
import LigaHighlight from '@site/src/components/gsap/highlight'
import '../apresentacao.css';

# Revisão de texto
<LigaHighlight />

  <img src={useBaseUrl("/img/docs/curso/robo_revisando.png")} alt="Bem-vindo ao curso" title="Imagem de exemplo" class="float-right" />
Entre os diversos usos do ChatGPT, a revisão de textos se destaca como <span class="text-highlight">um dos mais úteis e acessíveis.</span> Seja para corrigir erros gramaticais, melhorar a fluidez, ajustar o tom ou até mesmo oferecer sugestões de reestruturação, o ChatGPT é uma ferramenta prática para quem deseja aprimorar sua escrita. Além de economizar tempo, ele auxilia na identificação de <span class="text-highlight">detalhes que podem passar despercebidos,</span> tornando o texto mais claro, coeso e impactante.

Clique nas opções abaixo e escolha que tipo de revisão você quer incluir no seu *prompt*:

<PromptRevisao />

<br />
As opções apresentadas acima concentram-se, por assim dizer, <span class="text-highlight">no básico do que um profissional de revisão</span> de textos realizaria. No entanto, é possível ir além, explorando aspectos mais específicos e avançados, próprios do trabalho de um editor, escritor ou especialista em conteúdo. Caso tenha dúvidas sobre como estruturar seu *prompt* para considerar esses elementos, o próprio ChatGPT pode ser um recurso valioso. Experimente <span class="text-highlight">solicitar a ele uma lista de características</span> que definem um bom texto ou [consulte este link para conferir](https://chatgpt.com/c/677af9e0-851c-8003-8315-bf38c5391068) a resposta que recebi ao fazer essa mesma pergunta.
 
Para revisões que fazem alterações pontuais no conteúdo original, é útil adotar um <span class="text-highlight-end">comparador de textos.</span> Caso você não tenha acesso a esse tipo de ferramenta, <a href={useBaseUrl('/checkdiff')}>disponibilizei uma aqui</a>.

