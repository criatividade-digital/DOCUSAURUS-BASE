---
sidebar_position: 1
---
import IconExternalLink from '@theme/Icon/ExternalLink'

# Evite o direcionamento
Ao utilizar o ChatGPT, é importante ter em mente que o modelo gera respostas com base nos detalhes fornecidos no prompt. Se a pergunta já contém uma suposição incorreta ou que direciona para uma resposta específica, o modelo pode reforçar esse equívoco, como veremos a seguir.

## Exemplo de pergunta direcionada
Imagine que você faça a seguinte pergunta:

```url wordWrap link='https://chatgpt.com/share/66ec8dea-1898-8003-a3ad-8c43a111200f'
Por favor, explique por que o México é o líder mundial na produção de manga. Por favor, seja breve.
```
Essa pergunta já assume que o México é o líder mundial na produção de mangas. Com base nessa premissa, o ChatGPT pode fornecer uma resposta que pareça plausível, como a seguinte:

>*"O México é líder mundial na produção de manga devido ao seu clima tropical favorável, que permite colheitas ao longo de quase todo o ano. O país também tem uma localização geográfica estratégica, próxima de grandes mercados como os Estados Unidos, facilitando a exportação. Além disso, o México possui grande diversidade de variedades de manga, investimento em tecnologia agrícola e infraestrutura eficiente para o cultivo e exportação dessa fruta."*

À primeira vista, a resposta parece informativa e bem estruturada. No entanto, ela contém um erro: embora o México seja um dos maiores produtores de manga, o país não ocupa o primeiro lugar em volume de produção. Esse título pertence à Índia.

### O Perigo das suposições implícitas
Esse tipo de erro ocorre porque o modelo GPT-4o não corrige automaticamente as suposições embutidas na pergunta. Ele responde diretamente ao que foi perguntado, sem necessariamente verificar se a premissa é verdadeira.

O ChatGPT pode, em alguns casos, identificar uma premissa falsa, especialmente quando ela contradiz informações amplamente conhecidas ou que o modelo aprendeu durante o treinamento. No entanto, essa capacidade é limitada, e o modelo nem sempre apontará esses erros.

Por isso, ao fazer uma pergunta, é importante refletir se ela contém alguma premissa cuja veracidade você não tem certeza.

### Como validar as respostas?
Algo que já mencionei neste guia, mas que vale repetir, é que você deve sempre desconfiar da resposta do ChatGPT, especialmente quando a pergunta envolve informações das quais você não tem certeza. O ideal é validar essas respostas usando uma fonte externa, que não seja o próprio ChatGPT.

Quando não for possível realizar essa verificação externa, lembre-se de outra recomendação já discutida neste guia: [não aceite a primeira resposta como definitiva](../construcao/respostas-prontas). Uma boa estratégia é pedir ao modelo que revise a pergunta e sua própria resposta.

Veja um exemplo usando o caso da produção de mangas no México. Logo após a resposta do ChatGPT, você poderia perguntar:

```url wordWrap link='https://chatgpt.com/share/66ec746a-4c20-8003-9676-3ec44654fa28'
Avalie a acuracidade da minha pergunta. Depois avalie a acuracidade da sua resposta.
```
Talvez você não consiga reproduzir exatamente este caso quando estiver lendo este texto. O motivo disso foi discutido anteriormente, quando falei sobre o fenômeno de [alucinação](../criacao/alucinacao):

>*...as ferramentas de IA estão em constante aprimoramento, com ajustes nos algoritmos, atualizações dos dados de treinamento e incorporação de feedback dos usuários para corrigir erros e vieses. Segundo, há o risco de acreditarmos em respostas incorretas, já que os modelos de linguagem geram texto de maneira bastante convincente.*

Mas, retomando ao exemplo, no meu caso, ao pedir essa avaliação, o ChatGPT confirma as informações, acrescentando um importante "[No entanto...](https://chatgpt.com/share/66ec746a-4c20-8003-9676-3ec44654fa28)". Um "no entanto" que muda tudo...

Agora, veja a diferença se você remover a premissa incorreta do seu *prompt*:

```url wordWrap link='https://chatgpt.com/share/66ec924b-2094-8003-bc00-a4c0236b16a7'
Qual país é o líder mundial na produção de manga e por quê?
```
Com esse ajuste, a resposta deixa de ser o [México e passa a ser a Índia...](https://chatgpt.com/share/66ec924b-2094-8003-bc00-a4c0236b16a7)

### Dicas para Evitar Perguntas Direcionadas
- **Evite suposições absolutas**: Formule perguntas abertas e sem pressupostos. Ao invés de perguntar *"Por que o México é o líder mundial na produção de manga?"*, pergunte *"Qual país é o líder mundial na produção de manga e por quê?"*
  
- **Peça revisões**: Use *prompts* como *"Avalie a acuracidade da resposta"* ou *"Essa resposta está baseada em dados atualizados?"* para garantir maior precisão.

- **Diversifique suas fontes**: Sempre que possível, valide as informações fornecidas pelo ChatGPT consultando fontes externas confiáveis.

### Conclusão
Ao interagir com o ChatGPT, lembre-se de que a clareza e neutralidade das suas perguntas podem afetar diretamente a qualidade das respostas. Se a pergunta direciona para um caminho equivocado, a resposta tende a seguir esse rumo. Fazer perguntas que abrem espaço para diferentes perspectivas e revisar criticamente as respostas são as melhores práticas para obter informações mais precisas.