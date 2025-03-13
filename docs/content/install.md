# Install Process

## Chocolatey Install

This script install chocolatey packet manager needed in order to install all the other apps via terminal.

```
powershell -command "Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))"
```

## Refreshing Environment

Refreshes terminal environment to make chocolatey work without opening another terminal shell.

```
call "%ProgramData%\chocolatey\bin\RefreshEnv.cmd"
```

## Installing Apps

Refreshes Windows Explorer to avoid any chocolatey bugs/errors. and then proceeds to install the apps via `choco install`, with `-y --force --ignorepackageexitcodes` chocolatey argument.

```
taskkill /f /im explorer.exe && start explorer.exe && start cmd /k "choco install list-of-apps -y --force --ignorepackageexitcodes"
```
