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
*&lt;prompt>*<br />
*Descreva qual é a dica que um mestre no ChatGPT não pode deixar de conhecer.<br />
&lt;/prompt>*

As tags &lt;prompt> e &lt;/prompt> destacam as diferentes partes do prompt, deixando explícito o que é comando, dado ou contexto. Experimente esta estratégia ou confira o resultado disso no ChatGPT [neste link](https://chatgpt.com/share/674e2746-9060-8003-8e62-04a9c254192f).

Um último detalhe: você não precisa usar nomes específicos para estas tags. Qualquer palavra pode ser utilizada. Por exemplo, você poderia criar uma tag chamada &lt;XPTO>, e o ChatGPT ainda entenderia a marcação. Veja [aqui um exemplo disso](https://chatgpt.com/share/6750c365-1b44-8003-951f-ef1605d13e23).

Mesmo assim, prefira escolher palavras que resumam bem a função ou o conteúdo que as tags delimitam. Isso ajuda a tornar o prompt mais intuitivo e organizado. Aqui estão algumas ideias: 
* Use **&lt;pergunta>** para marcar trechos com questões.  
* Escolha **&lt;resposta>** para separar as partes onde o ChatGPT deve responder.  
* Experimente **&lt;contexto>** para destacar informações de fundo ou de apoio.  

Seja criativo e adapte os nomes das tags ao seu estilo e necessidade. O mais importante é que elas façam sentido para você (ou para quem for reutilizar o prompt). 

## Parabéns!
Ao longo deste guia, você explorou técnicas e estratégias para aproveitar ao máximo o potencial do ChatGPT. Lembre-se: o segredo para se tornar um verdadeiro mestre é experimentar, adaptar e refinar suas técnicas constantemente. Cada interação é uma nova oportunidade de aprender e evoluir.

Agora, é a sua vez de brilhar! Aplique tudo o que aprendeu para criar prompts cada vez mais criativos, eficazes e surpreendentes. A inteligência artificial é sua aliada, mas o verdadeiro mestre é você.

**Parabéns por concluir este capítulo e por dar mais um passo em sua jornada de aprendizado!**

