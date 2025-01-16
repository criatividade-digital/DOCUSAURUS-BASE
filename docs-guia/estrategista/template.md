---
sidebar_position: 6
---
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

# Template
Quando você abre um editor de texto ou uma planilha, geralmente tem duas opções: começar do zero ou usar um modelo pré-formatado (o famoso *template*). Empresas, por exemplo, muitas vezes têm seus próprios *templates* para contratos, relatórios ou comunicações internas. Nestes modelos toda a estrutura e formatação já estão prontas, permitindo que o foco esteja em preencher as lacunas com informações específicas.

O uso de *templates* tem várias vantagens:
- **Economia de tempo**: Não é preciso reinventar a roda; a estrutura básica já está pronta.
- **Consistência**: Garante que documentos sigam um padrão, facilitando a uniformidade e a identidade visual.
- **Redução de erros**: Com campos predefinidos, diminui a chance de omissões ou inconsistências.
- **Facilidade de personalização**: É possível adaptar um mesmo *template* para diferentes situações rapidamente.

O mesmo conceito, com todos os seus benefícios, pode ser facilmente aplicado ao uso de *prompts* no ChatGPT. É isso que vou explicar a seguir.

## O que é um *template* de *prompt* no ChatGPT?
Imagine um *template* de documento, onde você só precisa preencher alguns campos com informações específicas. Um *template de prompt* no ChatGPT segue a mesma lógica: ele é uma estrutura de instrução pré-formatada que você ajusta conforme a necessidade. Isso economiza tempo e traz consistência à forma como você faz pedidos à IA.

Por exemplo, um *template* de *prompt* básico pode ser:

> _Crie uma descrição detalhada para a vaga de **[cargo]**, destacando as principais responsabilidades e requisitos._

Aqui, basta copiar o template, colá-lo no ChatGPT e preencher o campo "[cargo]" com a vaga específica. O formato pode ser reutilizado quantas vezes for necessário, mantendo sempre a mesma estrutura.

Apesar de simples, esse *template* já oferece benefícios. Ao usá-lo para descrever uma vaga, você não precisará se preocupar em lembrar dos detalhes do *prompt*. Além disso, ao evitar criar novos *prompts* para a mesma tarefa, você ganha consistência, pois todas as descrições serão geradas com a mesma instrução para o ChatGPT.

Com o tempo, conforme você ganha mais experiência, pode ajustar e enriquecer os *prompts* para se adequarem melhor às suas necessidades. Veja um exemplo de *prompt* mais elaborado:

> _Darei a você uma descrição de uma vaga da nossa empresa. Você deverá escrever um e-mail convidando o candidato a participar do processo de seleção. Comece com um texto envolvente apresentando a oportunidade de emprego. Em seguida descreva os benefícios. Ao final faça o convite para que o candidato participe do processo de seleção ressaltando a possibilidade de crescimento profissional que a vaga apresenta. Use a terminologia do setor. Seja breve, não use palavras desnecessárias. Seja amigável e tenha um tom humano.
> **[texto com a descrição da vaga]**._

Aqui, o *template* se aprofunda mais nas instruções, guiando o ChatGPT para gerar um texto mais direcionado e ajustado às suas necessidades. Você pode, então, reutilizar e ajustar conforme o contexto, economizando tempo em cada nova solicitação.

## O *prompt* *compliance*
Um uso muito produtivo dos *templates* de *prompt* é auxiliar na verificação de documentos e comunicações quanto à conformidade com padrões estabelecidos. Esse processo, que podemos chamar figurativamente de *prompt compliance*, envolve a criação de *prompts* padronizados para verificar se um texto atende aos critérios e normas definidos pela organização ou pelo setor em que atua.

Imagine que sua equipe precisa enviar e-mails com frequência para clientes ou parceiros, e cada mensagem deve seguir um conjunto específico de regras para garantir a qualidade e a consistência da comunicação. É aqui que entra o conceito de *prompt compliance*, que auxilia na revisão dos e-mails com base em critérios estabelecidos. Um exemplo de como isso pode funcionar é o seguinte:

> **Verifique se o texto do e-mail abaixo atende aos seguintes critérios:**
> - O assunto é claro e reflete com precisão o conteúdo.
> - Inclui uma saudação personalizada com o nome do cliente.
> - O corpo da mensagem é cordial e profissional, sem tons desrespeitosos.
> - A mensagem finaliza com uma saudação e o nome do remetente.
> - O texto está livre de erros gramaticais, de pontuação e de digitação.
> - Se houver menção a datas, elas devem ser coerentes entre si. Todas as referências a datas de eventos, prazos ou promoções devem estar sincronizadas em todo o e-mail.
> - O rodapé contém informações da empresa: nome, endereço, telefone e e-mail.

Como exemplo prático, usei este *template* de *prompt* para revisar um e-mail de *follow-up* de uma reunião. [Confira o resultado neste link](https://chatgpt.com/share/67181784-eaec-8003-9549-23a10e413f2f).<span data-tooltip-id="my-tooltip" data-tooltip-content="Modelo de e-mail apresentado pela Appointlet."> *</span>

Embora o ChatGPT não possa substituir um processo formal de *compliance*, ele pode ajudar a revisar documentos e apontar possíveis problemas com base em padrões predefinidos. Nesse contexto, a própria pessoa que está escrevendo o documento pode usar o *template* como uma ferramenta de apoio, submetendo seus textos para verificar se estão em conformidade com os critérios estabelecidos pela organização.

:::danger[Uso Consciente]
Ao submeter dados confidenciais ao ChatGPT, lembre-se das orientações [apresentadas na seção de privacidade deste guia](../criacao/privacidade.md).
:::

## Construindo sua caixa de ferramentas de *prompts*
À medida que você utiliza o ChatGPT com mais frequência, perceberá que alguns *prompts* são usados repetidamente, com poucas alterações. E, em outros momentos, vai se lembrar de um ótimo *prompt* que criou, mas não terá certeza dos detalhes. Por isso, vale a pena começar a construir um banco de *prompts*.

O processo é simples: identifique as tarefas que realiza com frequência e crie *templates* ajustáveis. Você pode armazená-los em uma planilha (excelente para aplicar filtros) ou em ferramentas colaborativas como ClickUp, Notion ou outra plataforma adotada por sua organização.

:::tip
Novos colaboradores podem rapidamente melhorar seu uso do ChatGPT se tiverem acesso aos *templates* desenvolvidos pela organização.
:::

Além disso, com o tempo, você começará a refinar seus *prompts*, aprendendo a usar palavras, estruturas e formatos que geram melhores respostas do ChatGPT. Isso significa que sua coleção de *prompts* não só crescerá, mas se tornará mais eficiente e personalizada.

:::tip
Um banco de *prompts* deve ser revisitado e atualizado periodicamente. Remova *prompts* obsoletos, substitua aqueles que foram aprimorados e adicione novos conforme as demandas mudam. 
:::

Criar um banco de *prompts* para o ChatGPT é como montar uma caixa de ferramentas digital. Cada *template* é uma ferramenta que você pode usar para agilizar suas interações com a IA, assim como um carpinteiro utiliza diferentes ferramentas para diferentes tarefas. Usando templates, você garante rapidez, consistência e precisão em suas solicitações, seja para tarefas simples do dia a dia ou para demandas mais complexas.
