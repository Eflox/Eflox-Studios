@echo off
rem Preview the site at http://localhost:8000 (close this window to stop).
rem YouTube refuses to play the trailer on pages opened straight from disk (Error 153),
rem so serve the folder over http instead of double-clicking index.html.
cd /d "%~dp0"
echo Serving BREACH: Zero Hour at http://localhost:8000  -  close this window to stop.
start "" http://localhost:8000/
python -m http.server 8000
