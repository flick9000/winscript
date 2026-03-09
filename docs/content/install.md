## Chocolatey Install

Installs Chocolatey needed in order to install all the other apps via terminal.

```
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
```

## Winget Update

If Winget is selected as package manager, this script will update it if it's out of date.

```
$v = winget -v; if ([version]($v.TrimStart('v')) -lt [version]'1.7.0') { Write-Output '-- - Old Winget version detected, upgrading.'; Set-Location $env:USERPROFILE; Invoke-WebRequest -Uri 'https://aka.ms/getwinget' -OutFile 'winget.msixbundle'; Add-AppPackage -ForceApplicationShutdown .\winget.msixbundle; Remove-Item .\winget.msixbundle } else { Write-Output 'Winget is already up to date, skipping upgrade.' }
```

## Installing Apps

Restarts Windows Explorer to avoid any Chocolatey bugs/errors, and proceeds to install the apps via `choco install`, with `-y --force --ignorepackageexitcodes` arguments.

```
Stop-Process -Name explorer -Force -ErrorAction SilentlyContinue | Start-Process explorer.exe | Start-Process cmd.exe -ArgumentList '/k choco install apps -y --force --ignorepackageexitcodes"'
```
