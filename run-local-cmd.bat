@echo off
cd /d "%~dp0"
echo Instalando dependencias...
call npm.cmd install
if errorlevel 1 (
    echo Erro ao instalar.
    pause
    exit /b 1
)
echo.
echo Iniciando servidor em http://localhost:3000
call npm.cmd run dev
pause
