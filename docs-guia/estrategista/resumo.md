---
sidebar_position: 5
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import IframeResizer from '@iframe-resizer/react'
import GerenciarMemoriaChatGPT from '@site/src/components/GerenciarMemoriaChatGPT'

# O resumo da Ópera
Uma das tarefas em que o ChatGPT realmente brilha é a criação de resumos. Imagine que você acabou de ler um artigo longo, um documento técnico ou até mesmo um capítulo de um livro. Às vezes, fica difícil lembrar de todos os pontos principais, certo? Aqui é onde o ChatGPT pode ajudar.

## O poder de sintetizar conteúdo
O ChatGPT pode pegar um texto longo e condensá-lo em um resumo claro e objetivo. Ele faz isso destacando as ideias centrais e os pontos mais importantes, deixando de lado os detalhes menores. Pense nele como um "peneirador" de informações: ele filtra o que é mais relevante, deixando apenas o essencial à vista.

Imagine que você tenha um balde cheio de areia e pedras. Quando você passa o conteúdo por uma peneira, as pedrinhas maiores, que são os elementos mais importantes, ficam retidas, enquanto os grãos de areia caem. Essa é uma boa analogia para o processo de resumo: o ChatGPT retém as "pedras" (os conceitos principais) e descarta os "grãos de areia" (os detalhes que podem ser omitidos em um resumo).

## Como funciona na prática?
Basta você fornecer o texto que deseja resumir, e o ChatGPT fará o trabalho pesado para você. Ele analisa o conteúdo, identifica os temas centrais e, em questão de segundos, entrega uma versão compacta. Isso pode ser extremamente útil quando você precisa entender rapidamente um documento, preparar-se para uma reunião ou simplesmente revisar informações sem perder tempo lendo tudo de novo.

Você pode optar por um *prompt* simples e direto como:
>*Resuma o texto abaixo.*

Ou, se quiser ter mais controle sobre o resultado, experimente com orientações mais detalhadas:
>*Resuma o texto abaixo focando nos principais argumentos ou conclusões, omitindo detalhes menores e exemplos específicos, mas preservando informações essenciais.*

Ainda assim, "principais argumentos" é uma orientação um pouco genérica. Se você tem conhecimento técnico sobre o tema, pode usar isso para ajudar o ChatGPT a selecionar os pontos mais importantes. Lembre-se do que discutimos na seção "Na ponta da língua". Se não se lembra bem, [vale a pena revisitar essa parte](na-ponta-da-lingua), onde apresento ideias como:
>*Imagine que você está revisando um texto e quer que o ChatGPT ajude a melhorar a redação. Se você pedir algo genérico, como "melhore este texto", o modelo pode fazer ajustes básicos, deixando a linguagem um pouco mais fluida, mas sem grandes mudanças. Agora, se você pedir algo mais específico, como "melhore a coesão das ideias" ou "substitua palavras repetidas por sinônimos mais adequados", o ChatGPT entenderá melhor o que você deseja e fará melhorias mais direcionadas e eficazes.*

## Limites do tamanho do texto
É importante destacar uma limitação técnica do ChatGPT: tanto a interface quanto o próprio modelo possuem uma restrição no tamanho de texto que pode ser processado de uma só vez. Se você já leu o [texto sobre a 'janela de contexto'](peixe-ou-elefante), deve lembrar que esse limite varia de acordo com a versão da ferramenta que você está usando. Por isso, é essencial prestar atenção ao tamanho do texto fornecido para que ele seja processado e resumido corretamente pelo ChatGPT.

Se o documento for muito extenso, pode ser necessário dividir o conteúdo em partes menores para que o ChatGPT consiga processá-lo de forma eficiente. Assim, ao invés de tentar resumir tudo de uma vez, você pode dividir o texto em blocos e pedir um resumo de cada parte separadamente. Isso garante que o modelo consiga trabalhar bem com cada seção e evita a perda de informações importantes.

## Versatilidade do ChatGPT
Além de resumos simples, o ChatGPT é eficiente em diversas tarefas relacionadas a resumos, como:

1. **Resumo de Artigos Científicos ou Acadêmicos**: Condensar a estrutura de introdução, método, resultados e conclusão.
   
2. **Resumo de Livros ou Capítulos**: Fornecer uma visão geral dos principais temas, personagens e enredos.

3. **Resumo Executivo**: Criar um resumo claro e direto, focando nas informações mais relevantes para tomada de decisão em contextos empresariais ou profissionais.

4. **Resumo de Reuniões ou Conversas**: Sintetizar os principais pontos discutidos, decisões tomadas e próximos passos.

5. **Resumo de Notícias**: Reduzir matérias jornalísticas longas em parágrafos concisos com os fatos centrais.

6. **Resumo de Aulas ou Palestras**: Extrair as principais ideias de uma aula, palestra ou webinar, útil para revisão.

7. **Resumo de Documentos Jurídicos**: Simplificar e destacar os pontos centrais de contratos, regulamentos ou legislações.

8. **Resumo Comparativo**: Comparar e sintetizar várias fontes ou textos sobre um mesmo tema, apontando semelhanças e diferenças.

9. **Resumo de Vídeos ou Podcasts**: Baseado em transcrições ou descrições, pode condensar os principais tópicos abordados em vídeos ou podcasts.

Como já mencionei neste guia, especialmente em textos técnicos, o resumo gerado pelo ChatGPT pode, em alguns casos, conter imprecisões. Por exemplo, apliquei a estratégia descrita anteriormente e submeti os itens da lista acima para validação pelo próprio ChatGPT. O resultado está copiado abaixo.

<IframeResizer
  license="GPLv3"
  src={useBaseUrl('/html/revisao-tipos-resumo/index.html')}
  style={{ width: '100%',  height: '100vh' }}
  waitForLoad
/>

Usar o ChatGPT para criar resumos é uma maneira eficiente de economizar tempo e energia. Ele sintetiza conteúdos extensos de forma rápida e clara. Contudo, lembre-se de que há uma limitação no tamanho de texto que pode ser colocado no prompt de uma vez. Ao trabalhar com textos muito longos, dividir o conteúdo em partes menores é uma estratégia útil para garantir a qualidade dos resumos.