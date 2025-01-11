rem USAR O POWERSHELL
rem Script que copia e ajusta as páginas do guia que são reaproveitadas no curso
md ".\docs-curso\03 - paranaues\02 - exploracao"
copy ".\docs-guia\exploracao\*.*" ".\docs-curso\03 - paranaues\02 - exploracao"
ren ".\docs-curso\03 - paranaues\02 - exploracao\exploracao.md" "index.md"





param (
    [string]$filePath,
    [string]$searchText,
    [string]$replaceText
)

# Verifica se o arquivo existe
if (Test-Path $filePath) {
    # Lê o conteúdo do arquivo
    $content = Get-Content $filePath

    # Substitui o texto
    $content = $content -replace [regex]::Escape($searchText), $replaceText

    # Grava o conteúdo de volta no arquivo
    Set-Content -Path $filePath -Value $content
} else {
    Write-Host "Arquivo não encontrado: $filePath"
}