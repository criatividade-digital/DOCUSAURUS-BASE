---
sidebar_position: 8
---
import LigaHighlight from '@site/src/components/gsap/highlight'
import BuggyText from '@site/src/components/BuggyText'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceDizzy } from '@fortawesome/free-regular-svg-icons';

# Uma nova visão
<LigaHighlight/>
No primeiro capítulo deste guia, pedi ao ChatGPT que explicasse o que é um prompt. Entre outras coisas, ele respondeu:

>*No contexto de IA e modelos de linguagem (como o ChatGPT), um "prompt" é o texto ou instrução fornecida ao modelo para gerar uma resposta. Por exemplo, se você perguntar "O que é um prompt?", a pergunta que você fez é o prompt que orienta a resposta gerada.*

Agora que estamos chegando ao final deste capítulo, quero apresentar uma nova maneira de pensar sobre o que é e como elaborar um bom prompt.

## Arte, engenharia ou tentativa e erro
Algumas pessoas dizem que criar bons prompts é uma arte, exigindo sensibilidade para entender as nuances da linguagem e uma intuição apurada para prever o impacto das palavras. Outros comparam esse processo à engenharia, uma construção meticulosa em que cada elemento é cuidadosamente ajustado para alcançar o melhor resultado. E há também aqueles que consideram como um exercício exaustivo de tentativa e erro, onde cada falha contribui para o refinamento da abordagem.

Penso que a construção de prompts pode ser vista como uma combinação de **arte**, **engenharia** e um processo de **tentativa e erro**, cada um desempenhando um papel específico.

1. **Arte**: Existe uma certa criatividade envolvida na formulação de prompts eficazes. Dependendo do objetivo, a escolha de palavras, o tom e a estrutura do prompt podem influenciar bastante o tipo de resposta gerada. A habilidade de moldar as palavras para obter a resposta desejada exige sensibilidade, conferindo um caráter artístico ao processo.

2. **Engenharia**: Ao mesmo tempo, a criação de prompts também tem uma abordagem técnica. Entender como o modelo processa informações, quais parâmetros ou estruturas tendem a funcionar melhor e quais resultados esperar com diferentes tipos de *inputs* adiciona uma camada de lógica e técnica. Essa parte é quase uma "engenharia de prompts", em que você ajusta variáveis para otimizar os resultados.

3. **Tentativa e erro**: Por fim, há um componente iterativo. Mesmo com conhecimento técnico e uma abordagem criativa, muitas vezes o resultado esperado só surge após algumas tentativas e ajustes. Experimentar diferentes formas de apresentar o mesmo pedido e refinar com base no feedback faz parte do processo de descoberta e melhoria contínua.

Portanto, construir bons prompts envolve criatividade (arte), conhecimento técnico (engenharia) e ajustes contínuos (tentativa e erro).

## Explicando, complicando ou descomplicando?
Quando falamos de inteligência artificial (IA) e modelos de linguagem como o ChatGPT, é fácil acabar nos perdendo no "tecniquês". Quer ver?

A IA do ChatGPT é baseada em uma arquitetura chamada *rede neural*, que se inspira de forma abstrata no funcionamento das redes de neurônios no cérebro humano. No caso do ChatGPT, essa rede neural usa uma arquitetura específica chamada Transformer, que é altamente eficiente em processar e gerar linguagem natural, graças à sua capacidade de lidar com grandes quantidades de dados e capturar relações complexas entre palavras.

Quando você faz uma pergunta, a rede neural não "entende" as palavras da maneira que os humanos entendem. Em vez disso, ela converte as palavras em números, ou vetores multidimensionais como explicamos na seção **[Viés na prática](vies-pratica.md)**, que são representações matemáticas de seus significados e das relações entre elas. Esses vetores ajudam o ChatGPT a analisar o contexto da sua pergunta, identificando padrões e conexões entre as palavras. Dessa forma, o ChatGPT consegue prever as respostas mais prováveis com base no vasto conjunto <BuggyText text="de textos nos quais foi treinado." />. 
<br /><br />Opa! A explicação ficou tão complicada que *deu um bug* no texto do guia... <FontAwesomeIcon icon={faFaceDizzy} /> 😵

Brincadeira! Não é um *bug*, foi proposital. Quando falamos de IA, é fácil nos perdermos em um "tecniquês" que nem o computador consegue processar. 🙂  No guia *Desmistificando a IA* eu descomplico esse conceito de rede neural. Mas aqui, vou seguir um caminho diferente: usarei uma metáfora para ajudar desenvolver uma nova maneira de pensar o que é um prompt e como escrevê-lo bem.

## O detetive ChatGPT
Vamos imaginar uma situação mais divertida que o "tecniquês" para entender melhor o papel do prompt. Pense no ChatGPT como um habilidoso detetive à sua disposição, e você, como o investigador ou investigadora-chefe. A pergunta para a qual você busca uma resposta, ou o texto que deseja gerar, é como um mistério a ser desvendado. Você sabe que "a verdade está lá fora" (aludindo à série Arquivo X), mas não sabe exatamente como chegar até ela.

Como investigador-chefe, sua função não é desvendar o mistério diretamente, mas guiar o detetive a fazê-lo. E, como todo detetive, ele precisa de pistas, e você é quem vai fornecê-las. Por meio dos prompts, você sugere quais caminhos ele deve seguir, quais detalhes observar e quais direções explorar. O detetive, por sua vez, utiliza essas informações para conectar pontos, identificar padrões e, finalmente, solucionar o enigma.

Quanto mais claras, estratégicas e precisa forem as pistas, mais fácil será para o ChatGPT encontrar o que você está procurando. Por meio de um ou mais prompts, você está guiando esse processo e orquestrando a investigação.

No final, o detetive (ChatGPT) monta o quebra-cabeça, mas o sucesso da investigação depende diretamente da qualidade das pistas fornecidas pelo investigador-chefe — você!

# Ufa!
Parabéns! Ao concluir este capítulo, você passou de "ChatGPT Construtor" para "ChatGPT Criador". Isso significa que você agora tem o conhecimento necessário para usar o ChatGPT de forma mais consciente, eficiente e criativa. Você entendeu como o ChatGPT funciona, reconheceu seus limites, como viés e alucinações, e aprendeu a lidar com eles de maneira crítica.

Como "ChatGPT Criador", você está pronto para ir além, formulando perguntas mais específicas, desafiando respostas e aproveitando ao máximo essa poderosa ferramenta. Continue explorando, testando e inovando — agora com muito mais confiança e entendimento!