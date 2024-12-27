# Misc Options

## Enable Dark Mode

Disables Light Mode for System and Apps.

```
reg add "HKCU\SOFTWARE\Microsoft\Windows\CurrentVersion\Themes\Personalize" /v "AppsUseLightTheme" /t REG_DWORD /d 0 /f
reg add "HKCU\SOFTWARE\Microsoft\Windows\CurrentVersion\Themes\Personalize" /v "SystemUsesLightTheme" /t REG_DWORD /d 0 /f
```

## Add End Task to Context Menu

```
reg add "HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\Advanced\\TaskbarDeveloperSettings" /v "TaskbarEndTask" /t REG_DWORD /d "1" /f
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

## Disable Taskbar Widgets

Disables taskbar widgets.

```
reg add "HKCU\Software\Microsoft\Windows\CurrentVersion\Explorer\Advanced" /v "TaskbarDa" /t REG_DWORD /d 0 /f
```

## Disable Numlock on startup

Disables Numlock on startup

```
reg add "HKCU\Control Panel\Keyboard" /v "InitialKeyboardIndicators" /t REG_SZ /d "0" /f

```

## Disable Snap Flyout

Disables Snap Assist Flyout

```
reg add "HKCU\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\Advanced" /v "EnableSnapAssistFlyout" /t REG_DWORD /d 0 /f
```