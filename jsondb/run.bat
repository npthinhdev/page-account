@echo off

set db="db.json"
set port=3001

call json-server -w %db% -p %port%
