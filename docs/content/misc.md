## Set Classic Right Click Menu

Restores the Windows 10 context menu on Windows 11.

```
reg add "HKCU\Software\Classes\CLSID\{86ca1aa0-34aa-4e8b-a509-50c905bae2a2}\InprocServer32" /f /ve
reg add "HKCU\Software\Classes\CLSID\{86ca1aa0-34aa-4e8b-a509-50c905bae2a2}\InprocServer32" /ve /t "REG_SZ" /d "" /f"
```

## Disable MultiPlane Overlay (MPO)

Disables MultiPlane Overlay (MPO), might help with screen flickering and crashes.

```
reg add "HKLM\SOFTWARE\Microsoft\Windows\Dwm" /v "OverlayTestMode" /t REG_DWORD /d "00000005" /f
```

## Add End Task to Context Menu

Adds "End Task" to the right click context menu.

```
reg add "HKCU\Software\Microsoft\Windows\CurrentVersion\Explorer\Advanced\TaskbarDeveloperSettings" /v "TaskbarEndTask" /t REG_DWORD /d "1" /f
```

## Move Taskbar icons to left

Moves Taskbar icons to the left.

```
reg add "HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Explorer\Advanced" /v TaskbarAl /t REG_DWORD /d 0 /f
```

## Disable Numlock on startup

Disables Numlock on startup.

```
reg add "HKCU\Control Panel\Keyboard" /v "InitialKeyboardIndicators" /t REG_SZ /d "0" /f
```

## Enable Dark Mode

Disables Light Mode for System and Apps.

```
reg add "HKCU\SOFTWARE\Microsoft\Windows\CurrentVersion\Themes\Personalize" /v "AppsUseLightTheme" /t REG_DWORD /d 0 /f
reg add "HKCU\SOFTWARE\Microsoft\Windows\CurrentVersion\Themes\Personalize" /v "SystemUsesLightTheme" /t REG_DWORD /d 0 /f
```

## Show File Extensions

Shows file extensions by default.

```
reg add "HKCU\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\Advanced" /v "HideFileExt" /t REG_DWORD /d 0 /f
```

## Disable Sticky Keys

Disables sticky keys.

```
reg add "HKCU\Control Panel\Accessibility\StickyKeys" /v "Flags" /t REG_SZ /d "58" /f
```

## Disable Snap Flyout

Disables Snap Assist flyout.

```
reg add "HKCU\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\Advanced" /v "EnableSnapAssistFlyout" /t REG_DWORD /d 0 /f
```

## Detailed BSOD

Enables Detailed BSOD.

```
reg add "HKLM\System\CurrentControlSet\Control\CrashControl" /v "DisplayParameters" /t REG_DWORD /d 1 /f
```

## Verbose Logon

Enables Verbose Logon.

```
reg add "HKLM\SOFTWARE\Microsoft\Windows\CurrentVersion\Policies\System" /v "VerboseStatus" /t REG_DWORD /d 1 /f
```
