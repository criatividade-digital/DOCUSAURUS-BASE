---
sidebar_position: 6
---
import LigaHighlight from '@site/src/components/gsap/highlight'
import BoasVindasChatGPT from '@site/src/components/BoasVindasChatGPTAlucina'
import ReactPlayer from 'react-player'

# Alucinações
<LigaHighlight />
:::note

Este conteúdo está presente no guia *Desmistificando a Inteligência Artificial*.

:::
Após o lançamento da versão GPT-4o, um colega propôs um desafio visual a essa nova versão do ChatGPT: analisar a foto de uma <spam class="text-highlight">estátua recém-inaugurada</spam>. A resposta peculiar da IA chamou minha atenção. Registrei essa experiência para compartilhar neste capítulo, pois revela de forma vívida as nuances da inteligência artificial em ação.

<center>
<ReactPlayer url='https://youtu.be/l_N_XcEU71s' width='100%' controls='true' />
</center>
<br />
No vídeo, uma estátua de bronze de um jogador de futebol está posicionada em frente ao Estádio Joaquim Américo, casa do Club Athletico Paranaense. No primeiro "desafio" proposto ao ChatGPT, a IA descreve corretamente a estátua, mencionando os detalhes visuais e a localização, <spam class="text-highlight">mas comete um erro</spam> ao identificar o atleta, chamando-o de Alex. Esse erro é "imperdoável", especialmente para um torcedor atleticano, 🙂 já que Alexandro de Souza foi formado nas categorias de base e jogou por muitos anos no rival Coritiba Foot Ball Club. Esse tipo de equívoco, <spam class="text-highlight">conhecido como alucinação</spam>, ocorre quando o modelo gera informações incorretas ou inventadas.

Na segunda pergunta, após receber orientações mais específicas, indicando que o atleta em questão é o maior artilheiro da história do clube, o ChatGPT <spam class="text-highlight">corrige sua resposta</spam> e identifica corretamente o jogador. Esse exemplo demonstra como fornecer informações contextuais relevantes pode ajudar o modelo a gerar respostas mais precisas.

Alguns dias depois, fiz a mesma pergunta e o ChatGPT respondeu corretamente. Isso ilustra dois pontos importantes: primeiro, as ferramentas de IA estão em constante aprimoramento, com ajustes nos algoritmos, atualizações dos dados de treinamento e incorporação de *feedback* dos usuários para corrigir erros e vieses. Segundo, há o <spam class="text-highlight">risco de acreditarmos em respostas incorretas</spam>, já que os modelos de linguagem geram texto de maneira bastante convincente.

Neste caso de identificação incorreta do jogador que descrevi, o erro não teve consequências relevantes, resultando apenas em uma troca de mensagens no WhatsApp entre amigos, comentando a situação. No entanto, os casos da Air Canada e do escritório de advocacia Levidow, Levidow & Oberman, que veremos a seguir, mostram que erros em respostas de IA podem ter implicações muito mais sérias.

## Advogados são multados por usar o ChatGPT
Um caso que ganhou destaque em 2023 envolveu o passageiro Roberto Mata, que processou a companhia aérea Avianca alegando ter se ferido quando um carrinho de metal atingiu seu joelho durante um voo para o Aeroporto Internacional Kennedy, em Nova York. 

Quando a Avianca solicitou ao juiz federal de Manhattan o encerramento do caso, os advogados do Sr. Mata se opuseram, apresentando um <spam class="text-highlight">documento de 10 páginas</spam> que citava mais de uma dúzia de decisões judiciais relevantes.

Para produzir o documento, o advogado responsável pelo caso contra a Avianca utilizou o <spam class="text-highlight">ChatGPT para consultar outros casos semelhantes</spam>, e o chatbot forneceu prontamente uma lista de casos. Para garantir a precisão das informações, o advogado pediu ao ChatGPT que confirmasse a veracidade das informações e fornecesse as fontes dos processos. O ChatGPT respondeu novamente, fornecendo essas informações. <spam class="text-highlight">Confiando na IA</spam>, o advogado não verificou as fontes e apresentou as informações no tribunal.

O resultado foi que ninguém – nem os advogados da companhia aérea, nem o próprio juiz – conseguiu encontrar as decisões ou citações mencionadas no documento. O juiz considerou a situação 'sem precedentes' e ordenou uma audiência para avaliar possíveis sanções contra o advogado. Na audiência, advogados e escritórios foram multados em US$ 5.000 por apresentar <spam class="text-highlight">citações falsas em um documento judicial</spam>.

## O risco da alucinação
Uma alucinação ocorre quando o ChatGPT gera uma resposta que parece plausível, mas está incorreta ou foi inventada.

O termo 'alucinação' é utilizado porque, assim como uma alucinação em seres humanos envolve a percepção de algo que não está presente na realidade, uma alucinação em modelos de linguagem refere-se à geração de informações sem fundamento real, que podem parecer convincentes e reais.

## Por que a ferramenta alucina?
Ferramentas baseadas em IA, como o ChatGPT, funcionam prevendo as probabilidades de sequências de palavras. Cada palavra gerada é escolhida <spam class="text-highlight">com base nas probabilidades</spam> calculadas a partir do texto atual. Quando o modelo faz uma previsão incorreta ou improvável, isso pode resultar em uma 'alucinação', ou seja, uma resposta que não é factualmente correta.

<BoasVindasChatGPT />

O ChatGPT foi treinado em vastos conjuntos de dados de texto, onde aprendeu padrões estatísticos e associações. No entanto, quando confrontado com perguntas <spam class="text-highlight">ambíguas</spam>, <spam class="text-highlight">incomuns</spam> ou com <spam class="text-highlight">informações insuficientes</spam> nos dados de treinamento, a certeza sobre a próxima palavra a ser gerada diminui. Isso faz com que a distribuição de probabilidade das possíveis próximas palavras se torne mais dispersa, ou seja, menos concentrada em uma única palavra.