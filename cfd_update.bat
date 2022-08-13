@echo off
sc stop cloudflared >nul 2>&1
rename "C:\progs\bin\cloudflared.exe" cloudflared.exe.old
rename "C:\progs\bin\cloudflared.exe.new" cloudflared.exe
del "C:\progs\bin\cloudflared.exe.old"
sc start cloudflared >nul 2>&1
del cfd_update.bat