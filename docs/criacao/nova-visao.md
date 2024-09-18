---
sidebar_position: 8
---
import LigaHighlight from '@site/src/components/gsap/highlight'
import BuggyText from '@site/src/components/BuggyText'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceDizzy } from '@fortawesome/free-regular-svg-icons';

# Uma nova visão
<LigaHighlight/>
No primeiro capítulo deste guia, pedi ao ChatGPT que explicasse o que é um prompt. Ele respondeu, entre outras coisas:

>*No contexto de IA e modelos de linguagem (como o ChatGPT), um "prompt" é o texto ou instrução fornecida ao modelo para gerar uma resposta. Por exemplo, se você perguntar "O que é um prompt?", a pergunta que você fez é o prompt que orienta a resposta gerada.*

Agora que estamos chegando ao final deste capítulo, gostaria de apresentar uma nova perspectiva sobre o que é um *prompt* e como você pode construir um bom prompt de forma eficaz.

## Arte, engenharia ou tentativa e erro
Algumas pessoas dizem que criar bons prompts é uma arte, que requer sensibilidade para as nuances da linguagem e uma intuição apurada para prever o impacto das palavras. Outros veem esse processo como engenharia, onde cada detalhe é ajustado cuidadosamente para alcançar o melhor resultado. Há ainda quem encare como um exercício de tentativa e erro, em que cada falha ajuda a refinar a abordagem.

Na verdade, construir prompts pode ser uma combinação de **arte**, **engenharia** e **tentativa e erro**, com cada aspecto desempenhando um papel importante:

1. **Arte**: Há uma dose de criatividade na formulação de prompts eficazes. A escolha das palavras, o tom e a estrutura podem influenciar diretamente o tipo de resposta gerada. A capacidade de moldar o texto para obter a resposta desejada exige sensibilidade, o que confere um caráter artístico ao processo.

2. **Engenharia**: Ao mesmo tempo, há um lado técnico na criação de prompts. Compreender como o modelo processa a informação, quais estruturas funcionam melhor e quais resultados esperar a partir de diferentes *inputs* acrescenta uma dimensão lógica. Essa é a "engenharia dos prompts", em que você ajusta variáveis para otimizar os resultados.

3. **Tentativa e erro**: Por fim, há um componente iterativo. Mesmo com criatividade e técnica, os melhores resultados nem sempre surgem na primeira tentativa. Testar diferentes abordagens e ajustar com base no feedback faz parte do processo. É esse ciclo de experimentação e refinamento que leva à melhoria contínua.

Portanto, criar bons prompts envolve uma mistura de criatividade (arte), conhecimento técnico (engenharia) e aperfeiçoamento constante (tentativa e erro).

## Explicando, complicando ou descomplicando?
Quando falamos de inteligência artificial (IA) e modelos de linguagem como o ChatGPT, é fácil acabar nos perdendo no "tecniquês". Quer ver?

A IA do ChatGPT é baseada em uma arquitetura chamada *rede neural*, que se inspira de forma abstrata no funcionamento das redes de neurônios do cérebro humano. No caso do ChatGPT, essa rede neural usa uma arquitetura específica chamada *Transformer*, que é altamente eficiente em processar e gerar linguagem natural, graças à sua capacidade de lidar com grandes quantidades de dados e capturar relações complexas entre palavras.

Quando você faz uma pergunta, a rede neural não "entende" as palavras da maneira que os humanos entendem. Em vez disso, ela converte as palavras em números, ou vetores multidimensionais como explicamos na seção **[Viés na prática](vies-pratica.md)**, que são representações matemáticas de seus significados e das relações entre elas. Esses vetores ajudam o ChatGPT a analisar o contexto da sua pergunta, identificando padrões e conexões entre as palavras. Dessa forma, o ChatGPT consegue prever as respostas mais prováveis com base no vasto conjunto <BuggyText text="de textos nos quais foi treinado." />. 
<br /><br />Opa! A explicação ficou tão complicada que *deu um bug* no texto do guia... <FontAwesomeIcon icon={faFaceDizzy} /> 😵

Brincadeira! Não é um *bug*, foi proposital. Quando falamos de IA, é fácil nos perdermos em um "tecniquês" que nem o computador consegue processar. 🙂  No guia *Desmistificando a IA* eu descomplico esse conceito de rede neural. Mas aqui, vou seguir um caminho diferente: usarei uma metáfora para ajudar desenvolver uma nova maneira de pensar o que é um *prompt* e como escrevê-lo bem.

## O detetive ChatGPT
Vamos imaginar uma situação mais divertida que o "tecniquês" para entender melhor o papel do prompt. Pense no ChatGPT como um habilidoso detetive à sua disposição, e você, como o investigador ou investigadora-chefe. A pergunta para a qual você busca uma resposta, ou o texto que deseja gerar, é como um mistério a ser desvendado. Você sabe que "a verdade está lá fora" (aludindo à série Arquivo X), mas não sabe exatamente como chegar até ela.

Como investigador-chefe, sua função não é desvendar o mistério diretamente, mas guiar o detetive a fazê-lo. E, como todo detetive, ele precisa de pistas, e você é quem vai fornecê-las. Por meio dos prompts, você sugere quais caminhos ele deve seguir, quais detalhes observar e quais direções explorar. O detetive, por sua vez, utiliza essas informações para conectar pontos, identificar padrões e, finalmente, solucionar o enigma.

Quanto mais claras, estratégicas e precisa forem as pistas, mais fácil será para o ChatGPT encontrar o que você está procurando. Por meio de um ou mais prompts, você está guiando esse processo e orquestrando a investigação.

No final, o detetive (ChatGPT) monta o quebra-cabeça, mas o sucesso da investigação depende diretamente da qualidade das pistas fornecidas pelo investigador-chefe — você!

# Ufa!
Parabéns! Ao concluir este capítulo, você passou de "ChatGPT Construtor" para "ChatGPT Criador". Isso significa que você agora tem o conhecimento necessário para usar o ChatGPT de forma mais consciente, eficiente e criativa. Você entendeu como o ChatGPT funciona, reconheceu seus limites, como viés e alucinações, e aprendeu a lidar com eles de maneira crítica.

Como "ChatGPT Criador", você está pronto para ir além, formulando perguntas mais específicas, desafiando respostas e aproveitando ao máximo essa poderosa ferramenta. Continue explorando, testando e inovando — agora com muito mais confiança e entendimento!