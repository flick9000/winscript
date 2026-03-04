# Автоматическая установка необходимых компонентов для WinScript

# Установка Chocolatey, если не установлен
if (-not (Get-Command choco -ErrorAction SilentlyContinue)) {
    Write-Host "Устанавливаем Chocolatey..."
    Set-ExecutionPolicy Bypass -Scope Process -Force
    [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072
    iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
}

# Установка NodeJS (LTS)
choco install nodejs-lts -y

# Установка NSIS
choco install nsis -y
