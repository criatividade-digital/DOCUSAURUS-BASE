---
sidebar_position: 5
---

# Dica de mestre
Parabéns! Você está chegando ao final deste guia e a um passo de receber o título de "mestre" no uso do ChatGPT. Como última dica para consolidar seu conhecimento, vou abordar uma técnica poderosa e eficaz: o uso de tags para estruturar prompts.

## O Problema
Em alguns casos, o ChatGPT pode ter dificuldade para interpretar qual parte do texto é um comando e qual é o conteúdo a ser processado. Por exemplo:

**Prompt**: *Use seus conhecimentos em prompt engineering para melhorar o prompt.
Descreva qual é a dica que um mestre no ChatGPT não pode deixar de conhecer.*

Nesse exemplo, o modelo pode se confundir sobre qual parte deve ser analisada ou modificada. Ele pode interpretar tudo como comando ou misturar instruções e conteúdo.

Um solução simples para este caso é o uso de aspas para delimitar o conteúdo que precisa ser trabalhado:

**Prompt**: *Use seus conhecimentos em prompt engineering para melhorar o prompt.
"Descreva qual é a dica que um mestre no ChatGPT não pode deixar de conhecer."*

Embora eficaz em muitos casos, as aspas podem falhar em cenários mais complexos, especialmente quando há várias partes interdependentes ou comandos específicos.

## A Solução com Tags
Uma técnica usada por profissionais do *prompt engineering*, mas igualmente simples, é o uso de tags para organizar e delimitar diferentes partes do prompt. 

:::info
Uma tag é um elemento textual usado para marcar ou delimitar partes específicas de um conteúdo, ajudando a organizar e categorizar informações. Ela é amplamente utilizada em linguagens de marcação, como HTML e XML, mas também pode ser aplicada em outros contextos, como na formulação de prompts.
:::

Veja o mesmo exemplo reestruturado com tags:

**Prompt**: *Use seus conhecimentos em prompt engineering para melhorar o &lt;prompt>.*<br />
*&lt;prompt>*
*Descreva qual é a dica que um mestre no ChatGPT não pode deixar de conhecer.
&lt;/prompt>*

As tags &lt;prompt> e &lt;/prompt> destacam as diferentes partes do prompt, deixando explícito o que é comando, dado ou contexto. Experimente esta estratégia ou confira o resultado disso no ChatGPT [neste link](https://chatgpt.com/share/674e2746-9060-8003-8e62-04a9c254192f).

Um último detalhe, você não precisa usar nomes específicos para estas tags, qualquer palavra pode ser usada. O importante é a marcação e não o nome da tag. Você poderia usar uma marcação como &lt;texto> e o resultado seria o mesmo.

## Parabéns!!!

