---
sidebar_position: 3
---
import {vectorsFrutaAnimal, wordsFrutaAnimal} from '@site/src/components/3d/MatrizFrutaAnimal'
import {vectorsEstudo, wordsEstudo} from '@site/src/components/3d/MatrixEstudo'
import Word2Vec3D from '@site/src/components/3d/estudo'

# Viés na prática
O viés no ChatGPT acontece de forma natural devido à maneira como o modelo foi treinado. Para entender isso, vamos explorar como ele aprende e processa informações, e por que suas respostas podem, em alguns casos, refletir certos vieses.

## Como o ChatGPT aprende?
Como expliquei na seção anterior o ChatGPT foi treinado com uma vasta quantidade de textos. Durante o treinamento o ChatGPT aprendeu padrões de como as palavras são usadas em diferentes contextos. Esses padrões foram codificados em um espaço multidimensional, onde as palavras e os conceitos são representados como vetores (ou seja, pontos em um espaço matemático).

Nesse espaço, palavras que aparecem frequentemente em contextos semelhantes durante o treinamento acabam ficando próximas umas das outras. Por exemplo, se a palavra "ciência" aparece com frequência junto a termos como "pesquisa" e "experimento", essas palavras terão vetores mais próximos. Por outro lado, palavras que raramente aparecem juntas, como "ciência" e "fantasia", ficarão mais distantes nesse espaço.

## Como visualizar o viés
Embora seja impossível visualizar diretamente esse espaço complexo de muitas dimensões em que o ChatGPT organiza as palavras, podemos usar técnicas para simplificar e transformar esse mapa em algo mais fácil de entender, como um gráfico em 3D. Assim, conseguimos ver como certas palavras estão mais próximas ou distantes umas das outras, o que nos ajuda a entender como o modelo faz suas associações.

Esse tipo de visualização pode nos dar pistas sobre por que o ChatGPT, às vezes, apresenta respostas que parecem enviesadas. Se palavras e conceitos relacionados a um grupo ou ideia específica estão muito próximos nesse "mapa", o modelo tende a usar essas relações quando gera respostas, refletindo padrões que ele aprendeu durante o treinamento.

Por exemplo, no gráfico interativo que desenhei abaixo, usei um modelo de linguagem *open source* treinado em textos em português, já que o ChatGPT não disponibiliza seus dados de treinamento. Aqui, podemos ver como as palavras "cachorro", "cãozinho" e "cachorrinho" aparecem juntas em um espaço diferente de palavras como "melancia", "goiaba" e "melão". Isso nos mostra como o modelo separa conceitos de acordo com sua similaridade, o que pode nos ajudar a perceber possíveis vieses ou padrões na maneira como ele organiza a linguagem.

<Word2Vec3D words={wordsFrutaAnimal} vectors={vectorsFrutaAnimal} />

## Viés nas profissões?

<Word2Vec3D words={wordsEstudo} vectors={vectorsEstudo} />


1. **A visualização do viés é importante.**
   - Embora o viés em modelos como o ChatGPT seja abstrato, usar analogias ou visualizações pode ajudar a entender como ele ocorre e como se manifesta nas respostas do modelo.

2. **O ChatGPT não armazena informações da forma tradicional, mas aprende padrões e relações.**
   - Durante o treinamento, o ChatGPT não "armazena" palavras e seus contextos de forma literal. Ele aprende associações e padrões, que são codificados nos parâmetros do modelo. Essas associações são representadas em um espaço multidimensional, o que lhe permite gerar respostas com base em contextos aprendidos.

3. **Palavras e seus contextos são representados em um espaço vetorial multidimensional.**
   - As palavras que o ChatGPT aprende são representadas como vetores, e a proximidade ou distância entre elas nesse espaço vetorial é definida pela frequência com que aparecem em contextos semelhantes nos dados de treinamento.

4. **Palavras com contextos semelhantes ficam mais próximas no espaço vetorial.**
   - Palavras que frequentemente aparecem juntas ou em contextos semelhantes têm vetores mais próximos, enquanto palavras que raramente aparecem juntas ou em contextos diferentes têm vetores mais distantes. Isso reflete as relações semânticas entre as palavras.

5. **O espaço vetorial multidimensional não pode ser visualizado diretamente.**
   - Como esse espaço possui centenas ou até milhares de dimensões, ele não pode ser visualizado diretamente. No entanto, existem técnicas matemáticas que podem simplificar isso.

6. **É possível projetar esse espaço em 2D ou 3D com perda de informação.**
   - Usando técnicas de redução de dimensionalidade, como PCA ou t-SNE, é possível converter o espaço multidimensional para uma representação visual em 2D ou 3D. Embora isso não seja uma representação exata, pode ajudar a visualizar algumas relações entre palavras e contextos.

7. **Essas projeções podem ajudar a entender como o ChatGPT organiza o conhecimento.**
   - Apesar de serem aproximadas, essas visualizações podem fornecer uma ideia geral de como o modelo organiza e associa diferentes palavras e conceitos com base nos dados de treinamento. Isso facilita a compreensão do "conhecimento" armazenado e como ele pode ser influenciado por vieses nos dados.




No treinamento de modelos de word embeddings como Word2Vec, FastText, ou GloVe, a proximidade ou distância entre palavras no espaço vetorial é definida por como elas aparecem nos contextos dos textos de treinamento. A ideia central é que palavras que ocorrem em contextos semelhantes tendem a ter vetores mais próximos, enquanto palavras que raramente aparecem juntas ou em contextos semelhantes terão vetores mais distantes. 

Sim, é possível calcular a distância entre duas palavras usando os vetores de palavras armazenados no KeyedVectors. A forma mais comum de medir essa distância é utilizando a distância de cosseno, que é o inverso da similaridade de cosseno. A similaridade de cosseno mede o quão alinhados estão dois vetores em um espaço vetorial, e a distância de cosseno pode ser interpretada como uma métrica de dissimilaridade entre os vetores das palavras.
Se a similaridade de cosseno entre dois vetores for alta (perto de 1), significa que os vetores são muito próximos. Por outro lado, quanto menor a similaridade, maior a distância entre as palavras no espaço vetorial.

A distância entre duas palavras, quando medida através dos vetores de palavras (como em KeyedVectors), nos dá informações importantes sobre a semelhança semântica e as relações contextuais entre elas. 

Sim, a proximidade ou distância entre palavras nos modelos de word embeddings pode, de fato, refletir viéses presentes no corpus de treinamento. Esses viéses podem ser sociais, culturais, ou contextuais, e ocorrem porque os modelos de word embeddings, como Word2Vec, FastText e GloVe, aprendem diretamente dos dados textuais que são usados no treinamento. Como esses dados são reflexo da linguagem humana e das interações sociais, eles acabam incorporando os viéses implícitos e explícitos presentes nos textos.