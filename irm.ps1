$ProgressPreference = "SilentlyContinue"
$apiUrl = "https://api.github.com/repos/flick9000/winscript/releases/latest"
$tempFile = [System.IO.Path]::Combine([System.IO.Path]::GetTempPath(), "winscript-portable.exe")

$Logo = @"

 __        __ _         ____               _         _   
 \ \      / /(_) _ __  / ___|   ___  _ __ (_) _ __  | |_ 
  \ \ /\ / / | || '_ \ \___ \  / __|| '__|| || '_ \ | __|
   \ V  V /  | || | | | ___) || (__ | |   | || |_) || |_ 
    \_/\_/   |_||_| |_||____/  \___||_|   |_|| .__/  \__|
                                             |_|         

"@

try {
    Clear-Host
    Write-Host $Logo -ForegroundColor Magenta

    if (-not ([Security.Principal.WindowsPrincipal][Security.Principal.WindowsIdentity]::GetCurrent()).IsInRole([Security.Principal.WindowsBuiltInRole]::Administrator)) { Write-Host "This script requires administrator privileges."`n"Please run the terminal as an administrator." -ForegroundColor Red; exit }
    
    if (Test-Path $tempFile) {
        Remove-Item -Path $tempFile -Force -ErrorAction SilentlyContinue
        Write-Host "Removed old temporary file." -ForegroundColor Magenta
    }
    
    $releaseInfo = Invoke-RestMethod -Uri $apiUrl -Headers @{
        "Accept"     = "application/vnd.github.v3+json"
        "User-Agent" = "PowerShell Script"
    }
    
    $downloadUrl = ($releaseInfo.assets | Where-Object { $_.name -eq "winscript-portable.exe" }).browser_download_url
    
    if (-not $downloadUrl) {
        throw "Could not find winscript-portable.exe in the latest release"
    }

    if (Test-Path $tempFile) {
        Write-Host "WinScript already downloaded, starting..." -ForegroundColor Magenta
        Start-Process -FilePath $tempFile -Wait
    }
    else {
        Write-Host "Downloading from GitHub..." -ForegroundColor Magenta
        Invoke-WebRequest -Uri $downloadUrl -OutFile $tempFile
    
        Write-Host "Starting WinScript..." -ForegroundColor Magenta
        Start-Process -FilePath $tempFile -Wait
    }
    
    if (Test-Path $tempFile) {
        Remove-Item -Path $tempFile -Force
        Write-Host ""
        Write-Host "Thanks for using WinScript!" -ForegroundColor Magenta
        Write-Host ""
    }
    
}
catch {
    Write-Host "Error: $_" -ForegroundColor Red
    Write-Host "Failed to download or run WinScript." -ForegroundColor Red
}
