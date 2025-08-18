@echo off
REM ==================================================
REM Script seguro para enviar arquivos para GitHub
REM ==================================================

REM Mensagem de commit com data e hora
set COMMIT_MSG=Update %date% %time%

REM Adicionar todos os arquivos modificados
git add .

REM Fazer commit
git commit -m "%COMMIT_MSG%"

REM Enviar para o GitHub (vai pedir username e token se necessário)
git push origin main

pause
