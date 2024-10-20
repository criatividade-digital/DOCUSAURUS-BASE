---
sidebar_position: 4
---
# Memória de peixe ou elefante?
É comum associar a "memória curta" ao peixinho-dourado (ou *goldfish*). Embora seja um mito popular que esses peixes têm uma memória de apenas alguns segundos, a verdade é que eles conseguem se lembrar de informações por meses.

Por outro lado, o elefante é famoso por sua "memória extraordinária". Elefantes possuem uma incrível capacidade de lembrar eventos, lugares e até outros elefantes por anos, o que é vital para sua sobrevivência em ambientes complexos e para manter suas relações sociais.

Nas minhas primeiras interações com o ChatGPT, fiquei impressionado com sua capacidade de manter o contexto da conversa. Já mencionei um [exemplo disso neste guia](../construcao/porqueChatGPT#o-contexto-da-conversa). Sob esse aspecto, a retenção de contexto do ChatGPT se assemelha mais à de um peixe do que à de um elefante. Embora o modelo consiga acompanhar a conversa, ele pode "esquecer" informações em interações longas devido ao tamanho da janela de contexto.

## Janela de contexto
O tamanho da janela de contexto varia conforme a versão do ChatGPT que você estiver utilizando. No momento da escrita deste texto, a versão gratuita oferece uma janela de 8K tokens, enquanto a versão Plus e Teams permite até 32K tokens, e a versão Enterprise chega a 128K tokens. Para facilitar a compreensão, pense em palavras: 8K tokens equivalem aproximadamente a 6.000 palavras, e 32K tokens a cerca de 24.000 palavras. Esses números são aproximados porque a quantidade de tokens por palavra varia de acordo com a palavra.

## O que acontece em conversas longas?
Conforme você e o ChatGPT conversam, a janela de contexto vai sendo preenchida com o conteúdo da interação. Quando a janela atinge sua capacidade máxima, novas informações "empurram" para fora os dados mais antigos. Isso significa que, em conversas longas, detalhes fornecidos anteriormente podem ser "esquecidos".

É como se, ao longo de uma longa jornada, as primeiras pegadas deixadas no caminho começassem a ser apagadas pela poeira. Ele ainda lembra do caminho que está percorrendo, mas talvez não consiga ver com clareza o ponto de partida.

## Como lidar com isso?
Se você estiver envolvido em uma conversa longa, pode ser útil reiterar os pontos mais importantes para o ChatGPT. Ao incluir novamente no prompt as informações cruciais que deseja manter, você garante que o modelo continue focado no que é relevante.

A "janela de contexto" é como uma visão deslizante da conversa: à medida que novas informações entram, as mais antigas são empurradas para fora. O ChatGPT só pode "ver" o que está dentro dessa janela e, uma vez que as informações saem, elas são esquecidas.

Outra abordagem interessante é perguntar diretamente ao ChatGPT o que ele lembra da conversa. Por exemplo, neste capítulo do guia, apresentei um exemplo de prompt para revisar textos. O prompt era o seguinte:
>*Adote o papel de um especialista em revisão de textos, com vasta experiência e alta qualificação. Realize uma revisão detalhada do texto a seguir, focando em: coerência, objetividade, fluidez entre parágrafos, ortografia, gramática, pontuação e sintaxe.*

Após usar o *prompt* acima, você pode continuar revisando outros textos na mesma sessão sem precisar repetir a instrução. Basta escrever algo como "Revise mais este texto", e o ChatGPT seguirá considerando os parâmetros do primeiro *prompt*. No entanto, conforme a conversa se prolonga e mais textos são revisados, é possível que ele "esqueça" os parâmetros iniciais devido às limitações da janela de contexto.

Se você quiser verificar se isso aconteceu, pode perguntar algo como "Quais parâmetros você está considerando para a revisão do texto?" e observar o que ele ainda "lembra".

Realizei uma conversa prática com o ChatGPT para demonstrar essa ideia. No link abaixo, você verá como utilizei o *prompt* "revise mais este texto" ao longo da sessão e, ao final, pedi ao ChatGPT que explicasse o que ainda lembrava da tarefa original passada no início. Essa abordagem permite acompanhar como o modelo gerencia a memória de contexto durante a interação.

[Link: **exemplo de revisão de texto e verificação do que o ChatGPT lembra das instruções desta tarefa.**](https://chatgpt.com/share/671513e6-c7cc-8003-9b63-8dc17c9ff244)

## Resumo da Ópera
A janela de contexto é como a memória de curto prazo do ChatGPT. Ela segue a conversa até certo ponto, mas em diálogos longos ou muito complexos, alguns detalhes antigos podem se perder. Para evitar isso, forneça resumos frequentes ou reitere pontos-chave ao longo da conversa. Dessa forma, você garante que o modelo continue a gerar respostas relevantes e conectadas ao contexto inicial.