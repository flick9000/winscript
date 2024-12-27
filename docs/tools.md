#

## Clean Temporary Files

Deletes files from Windows Prefetch, User Temp and Windows Temp folders.

```
del /s /f /q c:\windows\temp\.
del /s /f /q C:\WINDOWS\Prefetch
del /s /f /q %temp%\.
```

## Run Disk Cleanup

Runs cleanmgr.exe.

```
cleanmgr /verylowdisk /sagerun:5
```

## Empty Recycle Bin

This command uses PowerShell to empty the Recycle Bin by iterating through its items and removing them forcefully. It also prints a message indicating which item is being deleted.

```
PowerShell -ExecutionPolicy Unrestricted -Command "$bin = (New-Object -ComObject Shell.Application).NameSpace(10); $bin.items() | ForEach {; Write-Host "^""Deleting $($_.Name) from Recycle Bin"^""; Remove-Item $_.Path -Recurse -Force; }"

```

## Create Restore Point

Creates a restore point before applying the scripts.

```
powershell -command "Enable-ComputerRestore -Drive $env:SystemDrive ; Checkpoint-Computer -Description "RestorePoint1" -RestorePointType "MODIFY_SETTINGS""
```

## Run MAS

Runs 'Microsoft Activation Scripts' to activate Windows and Office for free.

```
powershell -command "irm https://get.activated.win | iex"
```