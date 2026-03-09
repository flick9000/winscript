## Clean Temporary Files

Deletes files from Windows Prefetch, User Temp and Windows Temp folders.

```
Remove-Item -Path "C:\Windows\Temp\*" -Recurse -Force
Remove-Item -Path "C:\Windows\Prefetch\*" -Recurse -Force
```

## Run Disk Cleanup

Runs cleanmgr.exe.

```
cleanmgr /verylowdisk /sagerun:5
```

## Empty Recycle Bin

Uses PowerShell to empty the Recycle Bin by iterating through its items and removing them forcefully. It also prints a message indicating which item is being deleted.

```
$bin = (New-Object -ComObject Shell.Application).NameSpace(10); $bin.items() | ForEach { Write-Host "Deleting $($_.Name) from Recycle Bin"; Remove-Item $_.Path -Recurse -Force }

```

## Create Restore Point

Creates a restore point before applying the scripts.

```
Enable-ComputerRestore -Drive $env:SystemDrive ; Checkpoint-Computer -Description "RestorePoint1" -RestorePointType "MODIFY_SETTINGS"
```

## DISM Check

Runs DISM to repair system files.

```
DISM /Online /Cleanup-Image /RestoreHealth
```

## SFC Check

Checks if the system integrity is correct, and if not, fixes the corrupted files.

```
sfc /scannow
```

## Clear Browser History

Clears Chrome, Edge and Firefox history.

```
Remove-Item -Path "$env:LocalAppData\Google\Chrome\User Data\Default\History" -Recurse -Force
Remove-Item -Path "$env:LocalAppData\Google\Chrome\User Data\Default\Cache\*" -Recurse -Force
Remove-Item -Path "$env:LocalAppData\Google\Chrome\User Data\Default\Cookies" -Recurse -Force
Remove-Item -Path "$env:LocalAppData\Microsoft\Edge\User Data\Default\History" -Recurse -Force
Remove-Item -Path "$env:LocalAppData\Microsoft\Edge\User Data\Default\Cache\*" -Recurse -Force
Remove-Item -Path "$env:LocalAppData\Microsoft\Edge\User Data\Default\Cookies" -Recurse -Force
Remove-Item -Path "$env:AppData\Mozilla\Firefox\Profiles\*.default\places.sqlite" -Recurse -Force
Remove-Item -Path "$env:AppData\Mozilla\Firefox\Profiles\*.default\cache2\entries\*" -Recurse -Force
Remove-Item -Path "$env:LocalAppData\BraveSoftware\Brave-Browser\User Data\Default\History" -Recurse -Force
Remove-Item -Path "$env:LocalAppData\BraveSoftware\Brave-Browser\User Data\Default\Cache\*" -Recurse -Force
Remove-Item -Path "$env:LocalAppData\BraveSoftware\Brave-Browser\User Data\Default\Cookies" -Recurse -Force
```

## Reset Network

Resets the network by flushing the DNS cache, releasing and renewing the IP address.

```
ipconfig /flushdns
ipconfig /release | Out-Null
ipconfig /renew | Out-Null
```

## Run MAS

Runs 'Microsoft Activation Scripts' to activate Windows and Office for free.

```
irm https://get.activated.win | iex
```
