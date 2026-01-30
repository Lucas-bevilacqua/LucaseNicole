# Roda o site de casamento localmente
# Execute: .\run-local.ps1 (ou clique com botão direito > Executar com PowerShell)

Set-Location $PSScriptRoot

Write-Host "Instalando dependencias..." -ForegroundColor Green
npm install
if ($LASTEXITCODE -ne 0) {
    Write-Host "Erro ao instalar. Tente: npm cache clean --force" -ForegroundColor Yellow
    exit 1
}

Write-Host "Iniciando servidor em http://localhost:3000" -ForegroundColor Green
npm run dev
