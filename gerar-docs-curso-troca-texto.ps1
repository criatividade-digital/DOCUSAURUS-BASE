# SUBSTITUI CONTEÚDO DO ARQUIVO DE TEXTO
param (
    [string]$filePath,
    [string]$searchText,
    [string]$replaceText
)

# Verifica se o arquivo existe
if (Test-Path $filePath) {
    Write-Host "Arquivo encontrado: $filePath"
    
    # Lê o conteúdo do arquivo com codificação UTF-8
    $content = Get-Content -Path $filePath -Raw -Encoding UTF8

    # Imprime o conteúdo do arquivo lido
    Write-Host "Conteúdo do arquivo antes da substituição:"
    Write-Host $content

    # Substitui o texto
    $content = $content -replace [regex]::Escape($searchText), $replaceText

    # Grava o conteúdo de volta no arquivo com codificação UTF-8
    Set-Content -Path $filePath -Value $content -Encoding UTF8

    Write-Host "Texto substituído com sucesso: $searchText -> $replaceText"

    # Imprime o conteúdo do arquivo após a substituição
    $newContent = Get-Content -Path $filePath -Raw -Encoding UTF8
    Write-Host "Conteúdo do arquivo após a substituição:"
    Write-Host $newContent
} else {
    Write-Host "Arquivo não encontrado: $filePath"
}