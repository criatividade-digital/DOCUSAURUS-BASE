rem Script que copia e ajusta as páginas do guia que são reaproveitadas no curso


rem **CONTEÚDO PARA O TÓPICO DOS PARANAUES**

rem **** Vocabulário ****
md ".\docs-curso\03 - paranaues\01 - vocabulario"
rem Apaga o arquivo index.md no caso de uma recópia para não dar o erro de arquivo já existente
del ".\docs-curso\03 - paranaues\01 - vocabulario\index.md"
rem Copia os arquivos do guia para a pasta do curso
copy ".\docs-guia\iniciacao\*.*" ".\docs-curso\03 - paranaues\01 - vocabulario\"
ren ".\docs-curso\03 - paranaues\01 - vocabulario\iniciacao.md" "index.md"
rem Altera título 
C:\ProgramData\miniconda3\python gerar-docs-curso-troca-texto.py ".\docs-curso\03 - paranaues\01 - vocabulario\index.md" "# Iniciação" "# Vocabulário"
rem Apagua primeiro paragrafo 
C:\ProgramData\miniconda3\python gerar-docs-curso-troca-texto.py ".\docs-curso\03 - paranaues\01 - vocabulario\index.md" "<guia01>" "##excluir##" TAG
rem Apagua trechos no final do texto 
C:\ProgramData\miniconda3\python gerar-docs-curso-troca-texto.py ".\docs-curso\03 - paranaues\01 - vocabulario\index.md" "<guia02>" "##excluir##" TAG
C:\ProgramData\miniconda3\python gerar-docs-curso-troca-texto.py ".\docs-curso\03 - paranaues\01 - vocabulario\index.md" "<guia03>" "##excluir##" TAG
C:\ProgramData\miniconda3\python gerar-docs-curso-troca-texto.py ".\docs-curso\03 - paranaues\01 - vocabulario\index.md" "<guia04>" "##excluir##" TAG

rem **** Desmistificando o ChatGPT ****
copy ".\docs-guia\exploracao\desmistificando*.*" ".\docs-curso\03 - paranaues\02 - desmistificando\
ren ".\docs-curso\03 - paranaues\02 - desmistificando\desmistificando.md" "index.md"
rem Altera posição no sidebar
C:\ProgramData\miniconda3\python gerar-docs-curso-troca-texto.py ".\docs-curso\03 - paranaues\02 - desmistificando\index.md" "sidebar_position: 1" "sidebar_position: 2"

rem **** Criatividade ****
copy ".\docs-guia\exploracao\criatividade.md" ".\docs-curso\03 - paranaues\
rem Altera posição no sidebar
C:\ProgramData\miniconda3\python gerar-docs-curso-troca-texto.py ".\docs-curso\03 - paranaues\criatividade.md" "sidebar_position: 2" "sidebar_position: 3"


rem **** Estrutura do prompt ****
md ".\docs-curso\03 - paranaues\03 - exploracao"
rem Apaga o arquivo index.md no caso de uma recópia para não dar o erro de arquivo já existente
del ".\docs-curso\03 - paranaues\03 - exploracao\index.md"
copy ".\docs-guia\construcao\estrutura\*.*" ".\docs-curso\03 - paranaues\03 - exploracao"
ren ".\docs-curso\03 - paranaues\03 - exploracao\exploracao.md" "index.md"
rem Altera título do texto
C:\ProgramData\miniconda3\python gerar-docs-curso-troca-texto.py ".\docs-curso\03 - paranaues\03 - exploracao\index.md" "# Exploração" "# Estrutura do prompt"
rem Apagua trecho no final do texto 
C:\ProgramData\miniconda3\python gerar-docs-curso-troca-texto.py ".\docs-curso\03 - paranaues\03 - exploracao\index.md" "<guia01>" "##excluir##" TAG
rem Altera posição no sidebar
C:\ProgramData\miniconda3\python gerar-docs-curso-troca-texto.py ".\docs-curso\03 - paranaues\03 - exploracao\index.md" "sidebar_position: 1" "sidebar_position: 5"


rem **** Oráculo ****
md ".\docs-curso\03 - paranaues\04 - oraculo"
rem Apaga o arquivo index.md no caso de uma recópia para não dar o erro de arquivo já existente
del ".\docs-curso\03 - paranaues\04 - oraculo\index.md"
copy ".\docs-guia\construcao\oraculo\*.*" ".\docs-curso\03 - paranaues\04 - oraculo\"
ren ".\docs-curso\03 - paranaues\04 - oraculo\oraculo.md" "index.md"
rem Altera posição no sidebar
C:\ProgramData\miniconda3\python gerar-docs-curso-troca-texto.py ".\docs-curso\03 - paranaues\04 - oraculo\index.md" "sidebar_position: 2" "sidebar_position: 5"

rem **** Por que ChatGPT ****
copy ".\docs-guia\construcao\porqueChatGPT.md" ".\docs-curso\03 - paranaues\"
rem Altera posição no sidebar
C:\ProgramData\miniconda3\python gerar-docs-curso-troca-texto.py ".\docs-curso\03 - paranaues\porqueChatGPT.md" "sidebar_position: 3" "sidebar_position: 4"

rem **** Alucinações ****
copy ".\docs-guia\criacao\alucinacao.md" ".\docs-curso\03 - paranaues\04 - desafios\"
rem Altera posição no sidebar
C:\ProgramData\miniconda3\python gerar-docs-curso-troca-texto.py ".\docs-curso\03 - paranaues\04 - desafios\alucinacao.md" "sidebar_position: 6" "sidebar_position: 2"

rem **** Viés ****
copy ".\docs-guia\criacao\vies.md" ".\docs-curso\03 - paranaues\04 - desafios\"
rem Altera posição no sidebar
C:\ProgramData\miniconda3\python gerar-docs-curso-troca-texto.py ".\docs-curso\03 - paranaues\04 - desafios\vies.md" "sidebar_position: 3" "sidebar_position: 3"
