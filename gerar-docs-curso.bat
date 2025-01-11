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

rem **** Estrutura do prompt ****
md ".\docs-curso\03 - paranaues\02 - exploracao"
rem Apaga o arquivo index.md no caso de uma recópia para não dar o erro de arquivo já existente
del ".\docs-curso\03 - paranaues\02 - exploracao\index.md"
copy ".\docs-guia\exploracao\*.*" ".\docs-curso\03 - paranaues\02 - exploracao"
ren ".\docs-curso\03 - paranaues\02 - exploracao\exploracao.md" "index.md"
rem Altera título do texto
C:\ProgramData\miniconda3\python gerar-docs-curso-troca-texto.py ".\docs-curso\03 - paranaues\02 - exploracao\index.md" "# Exploração" "# Estrutura do prompt"
rem Apagua trecho no final do texto 
C:\ProgramData\miniconda3\python gerar-docs-curso-troca-texto.py ".\docs-curso\03 - paranaues\02 - exploracao\index.md" "<guia01>" "##excluir##" TAG

rem **** Oráculo ****
md ".\docs-curso\03 - paranaues\03 - oraculo"
rem Apaga o arquivo index.md no caso de uma recópia para não dar o erro de arquivo já existente
del ".\docs-curso\03 - paranaues\03 - oraculo\index.md"
copy ".\docs-guia\construcao\oraculo\*.*" ".\docs-curso\03 - paranaues\03 - oraculo\"
ren ".\docs-curso\03 - paranaues\03 - oraculo\oraculo.md" "index.md"
rem Altera posição no sidebar
C:\ProgramData\miniconda3\python gerar-docs-curso-troca-texto.py ".\docs-curso\03 - paranaues\03 - oraculo\index.md" "sidebar_position: 2" "sidebar_position: 3"


