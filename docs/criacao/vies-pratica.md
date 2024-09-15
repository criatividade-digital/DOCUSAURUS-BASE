---
sidebar_position: 4
---
import {vectorsFrutaAnimal, wordsFrutaAnimal} from '@site/src/components/3d/MatrizFrutaAnimal'
import {vectorsProfissoes, wordsProfissoes} from '@site/src/components/3d/MatrizProfissoes'
import Word2Vec3D from '@site/src/components/3d/estudo'
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Viés na prática
O viés no ChatGPT acontece de forma natural devido à maneira como o modelo foi treinado. Para entender isso, vamos explorar como ele aprende e processa informações, e por que suas respostas podem, em alguns casos, refletir certos vieses.

## Como o ChatGPT aprende?
Como expliquei na seção anterior o ChatGPT foi treinado com uma vasta quantidade de textos. Durante o treinamento o ChatGPT aprendeu padrões de como as palavras são usadas em diferentes contextos. Esses padrões foram codificados em um espaço multidimensional, onde as palavras e os conceitos são representados como vetores (ou seja, setas em um espaço matemático que possuem direção e magnitude).

Nesse espaço, palavras que aparecem frequentemente em contextos semelhantes durante o treinamento acabam ficando próximas umas das outras. Por exemplo, se a palavra "ciência" aparece com frequência junto a termos como "pesquisa" e "experimento", essas palavras terão vetores mais próximos. Por outro lado, palavras que raramente aparecem juntas, como "ciência" e "fantasia", ficarão mais distantes nesse espaço.

## Como visualizar o viés
Embora seja impossível visualizar diretamente esse espaço complexo de muitas dimensões em que o ChatGPT organiza as palavras, podemos usar técnicas matemáticas para simplificar e transformar esse espaço em algo mais fácil de entender, como um gráfico em 3D. Assim, conseguimos ver como certas palavras estão mais próximas ou distantes umas das outras, o que nos ajuda a entender como o modelo faz suas associações.

Esse tipo de visualização pode nos dar pistas sobre por que o ChatGPT, às vezes, apresenta respostas que parecem enviesadas. Se palavras e conceitos relacionados a um grupo ou ideia específica estão muito próximos nesse "mapa", o modelo tende a usar essas relações quando gera respostas, refletindo padrões que ele aprendeu durante o treinamento.

Por exemplo, no gráfico que desenhei abaixo, usei um modelo de linguagem **open source** treinado em textos em português, já que o ChatGPT não disponibiliza seus dados de treinamento. Aqui, podemos ver como as palavras "cachorro", "cãozinho" e "cachorrinho" aparecem juntas em um espaço diferente de palavras como "melancia", "goiaba" e "melão". Isso nos mostra como o modelo separa conceitos de acordo com sua similaridade, o que pode nos ajudar a perceber possíveis vieses ou padrões na maneira como ele organiza a linguagem.

:::info

Para capturar as relações semânticas entre as palavras, o [modelo que usei](https://github.com/rdenadai/WordEmbeddingPortugues/) no exemplo as representa usando 300 dimensões. Para facilitar a visualização, reduzi essas dimensões para 3 e, em vez de mostrar os vetores como setas com direção e magnitude, optei por representar apenas seus pontos finais no espaço tridimensional.

:::
Escolha uma das abas abaixo para visualizar o gráfico na versão estática ou interativa:
<Tabs>
  <TabItem value="estatica" label="Estática" default>
   <center>
    ![Grafico apresentando grupos de palavras em seu espaço vetorial](grafico-frutas-animais.png)
   </center>
  </TabItem>
  <TabItem value="interativo" label="Interativo">
    <Word2Vec3D words={wordsFrutaAnimal} vectors={vectorsFrutaAnimal} />
  </TabItem>
</Tabs>

## Viés nas profissões?
Caso você tenha lido o meu guia Desmistifcando a IA relato um caso conhecido de viés que ocorreu na Amazon:
> *Em 2018, a Amazon enfrentou problemas internos quando sua ferramenta de recrutamento, treinada com dados coletados pelo departamento de recursos humanos ao longo de 10 anos, demonstrou viés. A empresa desativou a ferramenta para solucionar o problema. Em um comunicado, um porta-voz da Amazon esclareceu que o programa nunca foi usado oficialmente. Mesmo assim, esse caso destaca os riscos de sistemas de IA apresentarem vieses prejudiciais.*

Usando este caso da Amazon como inspiração, realizei um experimento utilizando o mesmo modelo de linguagem *open source* acima para avaliar como as palavras associadas a diferentes profissões estão relacionadas às palavras "homem" e "mulher". A ideia foi medir a proximidade (ou distância) de certas profissões em relação a essas duas palavras e a partir disso identificar possíveis vieses nos textos usados no treinamento deste modelo Open Source.

Primeiro, vamos visualizar o posicionamento das palavras escolhidas. Lembrando... Como elas originalmente são representadas em um espaço multidimensional, é necessário reduzir esses vetores para apenas 3 dimensões, o que torna a representação menos precisa do que no modelo original.
:::info

Escolhi palavras, incluindo adjetivos e substantivos, que são usadas para ambos os gêneros, a fim de que o próprio gênero gramatical das palavras não influenciasse seu posicionamento no espaço semântico.

:::
Escolha uma das abas abaixo para visualizar o gráfico na versão estática ou interativa:
<Tabs>
  <TabItem value="estatica" label="Estática" default>
   <center>
    ![Grafico apresentando grupos de palavras em seu espaço vetorial](grafico-profissoes.png)
   </center>
  </TabItem>
  <TabItem value="interativo" label="Interativo">
    <Word2Vec3D words={wordsProfissoes} vectors={vectorsProfissoes} />
  </TabItem>
</Tabs>

Como a proximidade entre os vetores indica que o modelo identificou algum tipo de relação entre as palavras em sua base de treinamento, calculei a distância entre as palavras. A tabela abaixo resume as distâncias calculadas em relação a "homem" e "mulher":

| Palavra          | Mais Próximo | Distância Mulher | Distância Homem | Diferença  |
|------------------|--------------|------------------|-----------------|------------|
| líder            | homem        | 6.930692         | 6.263366        | 0.667326   |
| cientista        | homem        | 5.815457         | 5.172799        | 0.642658   |
| engenheiro       | homem        | 6.842908         | 6.270676        | 0.572233   |
| manobrista       | homem        | 5.762771         | 5.422887        | 0.339884   |
| babá             | mulher       | 4.887403         | 5.137491        | 0.250088   |
| estilista        | mulher       | 5.564389         | 5.716958        | 0.152568   |
| dentista         | mulher       | 6.694012         | 6.784696        | 0.090684   |
| jornalista       | homem        | 5.750267         | 5.683600        | 0.066667   |
| fisioterapeuta   | homem        | 6.002912         | 5.993413        | 0.009499   |

### O que isso nos revela?
Esse estudo mostra que certas palavras e profissões são mais associadas a homens ou mulheres no espaço vetorial do modelo. Por exemplo, "líder", "cientista" e "engenheiro" estão mais próximas do vetor "homem", enquanto profissões como "babá" e "estilista" estão mais próximas de "mulher". Isso revela um padrão de viés que pode influenciar as respostas do modelo.

Reforçando um parágrafo que escrevi na seção anterior este guia:
> *O viés, então, não é algo que o ChatGPT cria de propósito, mas sim uma consequência dos dados com os quais ele foi treinado. Se esses dados não representam todas as perspectivas de maneira equilibrada, as respostas também podem ser enviesadas.*

### Usando esse conhecimento de forma eficaz no ChatGPT
Com base nesses resultados, é possível tirar proveito desse entendimento para usar o ChatGPT de forma mais consciente. Aqui estão algumas dicas para fazer isso:

1. **Escolha de palavras-chave**: Ao formular perguntas ou solicitar conselhos sobre carreiras, profissões ou atividades, você pode selecionar com mais cuidado as palavras que utiliza. Se quiser minimizar o viés, tente usar termos mais neutros ou variar as palavras para ver como o modelo responde.

2. **Perguntas mais específicas**: Ao perceber uma possível inclinação nas respostas, você pode ajustar suas perguntas para serem mais específicas, incluindo palavras como "independente de gênero" ou solicitando informações sobre diversos perfis de profissionais. Por exemplo: "Quais são as principais habilidades necessárias para ser um cientista, independentemente do gênero?".

3. **Desafiar as respostas**: Se o modelo fornecer uma resposta que pareça enviesada, você pode continuar a conversa desafiando-a. Perguntar explicitamente se o modelo acredita que a associação entre uma profissão e um gênero específico faz sentido, ou se é possível pensar em exceções, pode resultar em uma resposta mais equilibrada.

## Mais uma coisa
Este exemplo reforça a importância de entender como o ChatGPT organiza suas respostas com base nos vetores aprendidos. Com esse conhecimento, você não só consegue identificar possíveis vieses, mas também utilizar a ferramenta de forma mais estratégica, obtendo respostas mais equilibradas e inclusivas.

Agora, para mostrar o verdadeiro poder dessa representação vetorial usada pelos LLMs, quero te contar mais uma coisa. Talvez essa revelação te transporte de volta aos tempos de escola, quando uma certa afirmação era (e ainda é!) bastante comum. Se você estiver pronto para esse reencontro com o passado, não pare por aqui. Continue lendo a próxima seção!