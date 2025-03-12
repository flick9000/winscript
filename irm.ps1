# Downloads the latest version, runs it, and cleans up afterward

# GitHub API URL for latest release
$apiUrl = "https://api.github.com/repos/flick9000/winscript/releases/latest"

try {
    # Get latest release info
    $releaseInfo = Invoke-RestMethod -Uri $apiUrl -Headers @{
        "Accept"     = "application/vnd.github.v3+json"
        "User-Agent" = "PowerShell Script"
    }
    
    # Get download URL for portable exe
    $downloadUrl = ($releaseInfo.assets | Where-Object { $_.name -eq "winscript-portable.exe" }).browser_download_url
    
    if (-not $downloadUrl) {
        throw "Could not find winscript-portable.exe in the latest release"
    }
    
    # Create temp file path
    $tempFile = [System.IO.Path]::Combine([System.IO.Path]::GetTempPath(), "winscript-portable.exe")

    if (Test-Path $tempFile) {
        Write-Host "WinScript already downloaded, starting..." -ForegroundColor Green
        Start-Process -FilePath $tempFile -Wait
    }
    else {
        # Download the file
        Write-Host "Downloading from GitHub..." -ForegroundColor Green
        Invoke-WebRequest -Uri $downloadUrl -OutFile $tempFile
    
        # Run the executable
        Write-Host "Starting WinScript..." -ForegroundColor Green
        Start-Process -FilePath $tempFile -Wait
    }
    
    # Clean up after execution
    if (Test-Path $tempFile) {
        Remove-Item -Path $tempFile -Force
        Write-Host "Temporary file removed, done!" -ForegroundColor Green
    }
    
}
catch {
    Write-Host "Error: $_" -ForegroundColor Red
    Write-Host "Failed to download or run WinScript." -ForegroundColor Red
}
