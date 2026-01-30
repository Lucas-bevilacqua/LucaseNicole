@echo off
cd /d "%~dp0"
echo Instalando dependencias...
call npm install
if errorlevel 1 (
    echo Erro ao instalar. Tente: npm cache clean --force
    pause
    exit /b 1
)
echo.
echo Iniciando servidor em http://localhost:3000
call npm run dev
pause
