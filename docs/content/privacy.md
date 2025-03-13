# Disable app access

These scripts disable apps access to certain part of the system, list below.

- Location Access: Disabled

  - `HKLM\SOFTWARE\Microsoft\Windows\CurrentVersion\CapabilityAccessManager\ConsentStore\location` set to `Deny`

- Camera Access: Disabled

  - `HKLM\SOFTWARE\Microsoft\Windows\CurrentVersion\CapabilityAccessManager\ConsentStore\webcam` set to `Deny`

- Microphone Access: Disabled

  - `HKLM\SOFTWARE\Microsoft\Windows\CurrentVersion\CapabilityAccessManager\ConsentStore\microphone` set to `Deny`

- System Files Access: Disabled

  - `HKLM\Software\Microsoft\Windows\CurrentVersion\CapabilityAccessManager\ConsentStore\documentsLibrary` set to `Deny`
  - `HKLM\Software\Microsoft\Windows\CurrentVersion\CapabilityAccessManager\ConsentStore\picturesLibrary` set to `Deny`
  - `HKLM\Software\Microsoft\Windows\CurrentVersion\CapabilityAccessManager\ConsentStore\videosLibrary` set to `Deny`
  - `HKLM\SOFTWARE\Microsoft\Windows\CurrentVersion\CapabilityAccessManager\ConsentStore\broadFileSystemAccess` set to `Deny`

- Account Information Access: Disabled

  - `HKLM\SOFTWARE\Microsoft\Windows\CurrentVersion\CapabilityAccessManager\ConsentStore\userAccountInformation` set to `Deny`

- Contacts Access: Disabled

  - `HKLM\SOFTWARE\Microsoft\Windows\CurrentVersion\CapabilityAccessManager\ConsentStore\contacts` set to `Deny`

- Call History Access: Disabled

  - `HKLM\SOFTWARE\Microsoft\Windows\CurrentVersion\CapabilityAccessManager\ConsentStore\phoneCallHistory` set to `Deny`

- Messaging Access: Disabled

  - `HKLM\SOFTWARE\Microsoft\Windows\CurrentVersion\CapabilityAccessManager\ConsentStore\chat` set to `Deny`

- Notification Access: Disabled

  - `HKLM\SOFTWARE\Microsoft\Windows\CurrentVersion\CapabilityAccessManager\ConsentStore\userNotificationListener` set to `Deny`

- Email Access: Disabled

  - `HKLM\SOFTWARE\Microsoft\Windows\CurrentVersion\CapabilityAccessManager\ConsentStore\email` set to `Deny`

- Tasks Access: Disabled

  - `HKLM\SOFTWARE\Microsoft\Windows\CurrentVersion\CapabilityAccessManager\ConsentStore\userDataTasks` set to `Deny`

- Diagnostics Access: Disabled

  - `HKLM\SOFTWARE\Microsoft\Windows\CurrentVersion\CapabilityAccessManager\ConsentStore\appDiagnostics` set to `Deny`

- Voice Activation Access: Disabled

  - `HKCU\Software\Microsoft\Speech_OneCore\Settings\VoiceActivation\UserPreferenceForAllApps` set `AgentActivationEnabled` to `0`

- Phone Access: Disabled

  - `HKLM\SOFTWARE\Policies\Microsoft\Windows\AppPrivacy\LetAppsAccessPhone` set to `2`
  - `HKLM\SOFTWARE\Policies\Microsoft\Windows\AppPrivacy\LetAppsAccessPhone_UserInControlOfTheseApps` set to empty
  - `HKLM\SOFTWARE\Policies\Microsoft\Windows\AppPrivacy\LetAppsAccessPhone_ForceAllowTheseApps` set to empty
  - `HKLM\SOFTWARE\Policies\Microsoft\Windows\AppPrivacy\LetAppsAccessPhone_ForceDenyTheseApps` set to empty

- Trusted Devices Access: Disabled

  - `HKCU\SOFTWARE\Microsoft\Windows\CurrentVersion\DeviceAccess\Global\{C1D23ACC-752B-43E5-8448-8D0E519CD6D6}` set to `Deny`

- Calendar Access: Disabled

  - `HKLM\SOFTWARE\Microsoft\Windows\CurrentVersion\CapabilityAccessManager\ConsentStore\appointments` set to `Deny`

- Motion Access: Disabled

  - `HKLM\SOFTWARE\Microsoft\Windows\CurrentVersion\CapabilityAccessManager\ConsentStore\activity` set to `Deny`

- Radio Access: Disabled
  - `HKLM\SOFTWARE\Microsoft\Windows\CurrentVersion\CapabilityAccessManager\ConsentStore\radios` set to `Deny`

# Disable Cloud Sync

- Disable Setting Sync:

  - `HKLM\SOFTWARE\Policies\Microsoft\Windows\SettingSync\DisableSettingSync` set to `2`
  - `HKLM\SOFTWARE\Policies\Microsoft\Windows\SettingSync\DisableSettingSyncUserOverride` set to `1`

- Disable Sync on Paid Network:

  - `HKLM\SOFTWARE\Policies\Microsoft\Windows\SettingSync\DisableSyncOnPaidNetwork` set to `1`

- Sync Policy:

  - `HKCU\SOFTWARE\Microsoft\Windows\CurrentVersion\SettingSync\SyncPolicy` set to `5`

- Disable Application Setting Sync:

  - `HKLM\SOFTWARE\Policies\Microsoft\Windows\SettingSync\DisableApplicationSettingSync` set to `2`
  - `HKLM\SOFTWARE\Policies\Microsoft\Windows\SettingSync\DisableApplicationSettingSyncUserOverride` set to `1`

- Disable App Sync Setting Sync:

  - `HKLM\SOFTWARE\Policies\Microsoft\Windows\SettingSync\DisableAppSyncSettingSync` set to `2`
  - `HKLM\SOFTWARE\Policies\Microsoft\Windows\SettingSync\DisableAppSyncSettingSyncUserOverride` set to `1`

- Disable Credentials Setting Sync:

  - `HKLM\SOFTWARE\Policies\Microsoft\Windows\SettingSync\DisableCredentialsSettingSync` set to `2`
  - `HKLM\SOFTWARE\Policies\Microsoft\Windows\SettingSync\DisableCredentialsSettingSyncUserOverride` set to `1`
  - `HKCU\SOFTWARE\Microsoft\Windows\CurrentVersion\SettingSync\Groups\Credentials\Enabled` set to `0`

- Disable Desktop Theme Setting Sync:

  - `HKLM\SOFTWARE\Policies\Microsoft\Windows\SettingSync\DisableDesktopThemeSettingSync` set to `2`
  - `HKLM\SOFTWARE\Policies\Microsoft\Windows\SettingSync\DisableDesktopThemeSettingSyncUserOverride` set to `1`

- Disable Personalization Setting Sync:

  - `HKLM\SOFTWARE\Policies\Microsoft\Windows\SettingSync\DisablePersonalizationSettingSync` set to `2`
  - `HKLM\SOFTWARE\Policies\Microsoft\Windows\SettingSync\DisablePersonalizationSettingSyncUserOverride` set to `1`

- Disable Start Layout Setting Sync:

  - `HKLM\SOFTWARE\Policies\Microsoft\Windows\SettingSync\DisableStartLayoutSettingSync` set to `2`
  - `HKLM\SOFTWARE\Policies\Microsoft\Windows\SettingSync\DisableStartLayoutSettingSyncUserOverride` set to `1`

- Disable Web Browser Setting Sync:

  - `HKLM\SOFTWARE\Policies\Microsoft\Windows\SettingSync\DisableWebBrowserSettingSync` set to `2`
  - `HKLM\SOFTWARE\Policies\Microsoft\Windows\SettingSync\DisableWebBrowserSettingSyncUserOverride` set to `1`

- Disable Windows Setting Sync:

  - `HKLM\SOFTWARE\Policies\Microsoft\Windows\SettingSync\DisableWindowsSettingSync` set to `2`
  - `HKLM\SOFTWARE\Policies\Microsoft\Windows\SettingSync\DisableWindowsSettingSyncUserOverride` set to `1`

- Disable Language Sync:
  - `HKCU\SOFTWARE\Microsoft\Windows\CurrentVersion\SettingSync\Groups\Language\Enabled` set to `0`

```
reg add "HKLM\SOFTWARE\Policies\Microsoft\Windows\SettingSync" /v "DisableSettingSync" /t REG_DWORD /d 2 /f
reg add "HKLM\SOFTWARE\Policies\Microsoft\Windows\SettingSync" /v "DisableSettingSyncUserOverride" /t REG_DWORD /d 1 /f
reg add "HKLM\SOFTWARE\Policies\Microsoft\Windows\SettingSync" /v "DisableSyncOnPaidNetwork" /t REG_DWORD /d 1 /f
reg add "HKCU\SOFTWARE\Microsoft\Windows\CurrentVersion\SettingSync" /v "SyncPolicy" /t REG_DWORD /d 5 /f
reg add "HKLM\SOFTWARE\Policies\Microsoft\Windows\SettingSync" /v "DisableApplicationSettingSync" /t REG_DWORD /d 2 /f
reg add "HKLM\SOFTWARE\Policies\Microsoft\Windows\SettingSync" /v "DisableApplicationSettingSyncUserOverride" /t REG_DWORD /d 1 /f
reg add "HKLM\SOFTWARE\Policies\Microsoft\Windows\SettingSync" /v "DisableAppSyncSettingSync" /t REG_DWORD /d 2 /f
reg add "HKLM\SOFTWARE\Policies\Microsoft\Windows\SettingSync" /v "DisableAppSyncSettingSyncUserOverride" /t REG_DWORD /d 1 /f
reg add "HKLM\SOFTWARE\Policies\Microsoft\Windows\SettingSync" /v "DisableCredentialsSettingSync" /t REG_DWORD /d 2 /f
reg add "HKLM\SOFTWARE\Policies\Microsoft\Windows\SettingSync" /v "DisableCredentialsSettingSyncUserOverride" /t REG_DWORD /d 1 /f
reg add "HKCU\SOFTWARE\Microsoft\Windows\CurrentVersion\SettingSync\Groups\Credentials" /v "Enabled" /t REG_DWORD /d 0 /f
reg add "HKLM\SOFTWARE\Policies\Microsoft\Windows\SettingSync" /v "DisableDesktopThemeSettingSync" /t REG_DWORD /d 2 /f
reg add "HKLM\SOFTWARE\Policies\Microsoft\Windows\SettingSync" /v "DisableDesktopThemeSettingSyncUserOverride" /t REG_DWORD /d 1 /f
reg add "HKLM\SOFTWARE\Policies\Microsoft\Windows\SettingSync" /v "DisablePersonalizationSettingSync" /t REG_DWORD /d 2 /f
reg add "HKLM\SOFTWARE\Policies\Microsoft\Windows\SettingSync" /v "DisablePersonalizationSettingSyncUserOverride" /t REG_DWORD /d 1 /f
reg add "HKLM\SOFTWARE\Policies\Microsoft\Windows\SettingSync" /v "DisableStartLayoutSettingSync" /t REG_DWORD /d 2 /f
reg add "HKLM\SOFTWARE\Policies\Microsoft\Windows\SettingSync" /v "DisableStartLayoutSettingSyncUserOverride" /t REG_DWORD /d 1 /f
reg add "HKLM\SOFTWARE\Policies\Microsoft\Windows\SettingSync" /v "DisableWebBrowserSettingSync" /t REG_DWORD /d 2 /f
reg add "HKLM\SOFTWARE\Policies\Microsoft\Windows\SettingSync" /v "DisableWebBrowserSettingSyncUserOverride" /t REG_DWORD /d 1 /f
reg add "HKLM\SOFTWARE\Policies\Microsoft\Windows\SettingSync" /v "DisableWebBrowserSettingSync" /t REG_DWORD /d 2 /f
reg add "HKLM\SOFTWARE\Policies\Microsoft\Windows\SettingSync" /v "DisableWebBrowserSettingSyncUserOverride" /t REG_DWORD /d 1 /f
reg add "HKLM\SOFTWARE\Policies\Microsoft\Windows\SettingSync" /v "DisableWindowsSettingSync" /t REG_DWORD /d 2 /f
reg add "HKLM\SOFTWARE\Policies\Microsoft\Windows\SettingSync" /v "DisableWindowsSettingSyncUserOverride" /t REG_DWORD /d 1 /f
reg add "HKCU\SOFTWARE\Microsoft\Windows\CurrentVersion\SettingSync\Groups\Language" /t REG_DWORD /v "Enabled" /d 0 /f

```

# Disable Activity Feed

- Disable Activity Feed:
  - `HKLM\SOFTWARE\Policies\Microsoft\Windows\System\EnableActivityFeed` set to `0`

```
reg add "HKLM\SOFTWARE\Policies\Microsoft\Windows\System" /v "EnableActivityFeed" /d "0" /t REG_DWORD /f

```

# Disable Screen Recording

- Disable Game DVR:
  - `HKCU\System\GameConfigStore\GameDVR_Enabled` set to `0`
  - `HKLM\SOFTWARE\Policies\Microsoft\Windows\GameDVR\AllowGameDVR` set to `0`

```
reg add "HKCU\System\GameConfigStore" /v "GameDVR_Enabled" /t REG_DWORD /d 0 /f
reg add "HKLM\SOFTWARE\Policies\Microsoft\Windows\GameDVR" /v "AllowGameDVR" /t REG_DWORD /d 0 /f
```

# Disable Notifications Tray

```
reg add "HKCU\\Software\\Policies\\Microsoft\\Windows\\Explorer" /v "DisableNotificationCenter" /d "1" /t REG_DWORD /f
reg add "HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\PushNotifications" /v "ToastEnabled" /d "0" /t REG_DWORD /f
```

# Disable Automatic Map Downloads

- Disable Map Data Updates and Network Traffic:
  - `HKLM\SOFTWARE\Policies\Microsoft\Windows\Maps\AllowUntriggeredNetworkTrafficOnSettingsPage` set to `0`
  - `HKLM\SOFTWARE\Policies\Microsoft\Windows\Maps\AutoDownloadAndUpdateMapData` set to `0`

```
reg add "HKLM\SOFTWARE\Policies\Microsoft\Windows\Maps" /v "AllowUntriggeredNetworkTrafficOnSettingsPage" /t REG_DWORD /d 0 /f
reg add "HKLM\SOFTWARE\Policies\Microsoft\Windows\Maps" /v "AutoDownloadAndUpdateMapData" /t REG_DWORD /d 0 /f
```

# Disable Lockscreen Camera Access

- Disable Lock Screen Camera:
  - `HKLM\SOFTWARE\Policies\Microsoft\Windows\Personalization\NoLockScreenCamera` set to `1`

```
reg add "HKLM\SOFTWARE\Policies\Microsoft\Windows\Personalization" /v "NoLockScreenCamera" /t REG_DWORD /d 1 /f

```

# Disable Biometrics

- Disable Biometrics:
  - `HKLM\SOFTWARE\Policies\Microsoft\Biometrics\Enabled` set to `0`
  - `HKLM\SOFTWARE\Policies\Microsoft\Biometrics\Credential Provider\Enabled` set to `0`

```
reg add "HKLM\SOFTWARE\Policies\Microsoft\Biometrics" /v "Enabled" /t REG_DWORD /d "0" /f
reg add "HKLM\SOFTWARE\Policies\Microsoft\Biometrics\Credential Provider" /v "Enabled" /t "REG_DWORD" /d "0" /f

```
