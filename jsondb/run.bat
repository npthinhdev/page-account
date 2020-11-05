@echo off

set db="db.json"
set host="192.168.98.130"
set port=3001

call json-server -w %db% -H %host% -p %port%
