# Disable Fullscreen Optimizations

```
reg add "HKCU\System\GameConfigStore" /v "GameDVR_DXGIHonorFSEWindowsCompatible" /t REG_DWORD /d 1 /f
```

# Disable Mouse Acceleration

```
reg add "HKCU\\Control Panel\\Mouse" /v "MouseSpeed" /t REG_SZ /d "0" /f
reg add "HKCU\\Control Panel\\Mouse" /v "MouseThreshold1" /t REG_SZ /d "0" /f
reg add "HKCU\\Control Panel\\Mouse" /v "MouseThreshold2" /t REG_SZ /d "0" /f
```

# Disable Game Bar

```
reg add "HKLM\\SOFTWARE\\Polices\\Microsoft\\Windows\\GameDVR" /v "AllowGameDVR" /t REG_DWORD /d 0 /f
reg add "HKLM\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\GameDVR" /v "AppCaptureEnabled" /t REG_DWORD /d 0 /f
reg add "HKCU\\SOFTWARE\\Microsoft\\GameBar" /v "UseNexusForGameBarEnabled" /t REG_DWORD /d 0 /f
reg add "HKCU\\SOFTWARE\\Microsoft\\GameBar" /v "ShowStartupPanel" /t REG_DWORD /d 0 /f
```

# Disable Game Mode

```
reg add "HKLM\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\GameDVR" /v "AutoGameModeEnabled" /t REG_DWORD /d 0 /f
reg add "HKCU\\SOFTWARE\\Microsoft\\GameBar" /v "AutoGameModeEnabled" /t REG_DWORD /d 0 /f
```
