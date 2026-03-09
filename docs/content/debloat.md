## Remove 3rd-party apps

Removes 3rd-party apps that come pre-installed with Windows, such as Shazam, Spotify, and more.

```
@("*DropboxOEM*","*BingSearch*","*RandomSaladGamesLLC*","*UserExperienceImprovementProgram*","*McAfee*","ShazamEntertainmentLtd.Shazam","ClearChannelRadioDigital.iHeartRadio","SpotifyAB.SpotifyMusic","*EclipseManager*","*ActiproSoftwareLLC*","*AdobeSystemsIncorporated.AdobePhotoshopExpress*","*Duolingo-LearnLanguagesforFree*","*PandoraMediaInc*","*CandyCrush*","*BubbleWitch3Saga*","*Wunderlist*","*Flipboard*","*Twitter*","*Facebook*","*Royal Revolt*","*Sway*","*Speed Test*","*Dolby*","*Viber*","*ACGMediaPlayer*","*Netflix*","*OneCalendar*","*LinkedInForWindows*","*HiddenCityMysteryofShadows*","*Hulu*","*HiddenCity*","*AdobePhotoshopExpress*") | ForEach-Object { $pkg = Get-AppxPackage $_; if ($pkg) { $pkg | Remove-AppxPackage; Write-Host "Removed: $_" } }
```

## Remove extension apps

Removes image and video extensions/codecs from Windows.

```
@("Microsoft.HEIFImageExtension","Microsoft.VP9VideoExtensions","Microsoft.WebpImageExtension","Microsoft.HEVCVideoExtension","Microsoft.RawImageExtension","Microsoft.WebMediaExtensions") | ForEach-Object { $pkg = Get-AppxPackage $_; if ($pkg) { $pkg | Remove-AppxPackage; Write-Host "Removed: $_" } }
```

## Remove Microsoft apps

Removes Windows & Microsoft Store built-in apps from Windows.

```
@("Microsoft.ZuneMusic","Microsoft.Whiteboard","Microsoft.Office.Lens","Microsoft.News","Microsoft.GetHelp","Microsoft.BingTravel","Microsoft.BingHealthAndFitness","Microsoft.BingFoodAndDrink","Microsoft.BingTranslator","Microsoft.AppConnector","MicrosoftCorporationII.MicrosoftFamily","*QuickAssist*","Microsoft.OutlookForWindows","Clipchamp.Clipchamp","Microsoft.3DBuilder","Microsoft.Microsoft3DViewer","Microsoft.BingWeather","Microsoft.BingSports","Microsoft.BingFinance","Microsoft.MicrosoftOfficeHub","Microsoft.BingNews","Microsoft.Office.OneNote","Microsoft.Office.Sway","Microsoft.WindowsPhone","Microsoft.CommsPhone","Microsoft.YourPhone","Microsoft.Getstarted","Microsoft.549981C3F5F10","Microsoft.Messaging","Microsoft.WindowsSoundRecorder","Microsoft.MixedReality.Portal","Microsoft.WindowsFeedbackHub","Microsoft.WindowsAlarms","Microsoft.MSPaint","Microsoft.WindowsMaps","Microsoft.MinecraftUWP","Microsoft.People","Microsoft.Wallet","Microsoft.Print3D","Microsoft.OneConnect","Microsoft.MicrosoftSolitaireCollection","Microsoft.MicrosoftStickyNotes","microsoft.windowscommunicationsapps","Microsoft.SkypeApp","Microsoft.GroupMe10","MSTeams","Microsoft.Todos") | ForEach-Object { $pkg = Get-AppxPackage $_; if ($pkg) { $pkg | Remove-AppxPackage; Write-Host "Removed: $_" } }
```

## Remove Xbox apps

Removes various Xbox-related applications, services and components from Windows.

```
@("Microsoft.XboxApp","Microsoft.Xbox.TCUI","Microsoft.XboxGamingOverlay","Microsoft.XboxGameOverlay","Microsoft.XboxIdentityProvider","Microsoft.XboxSpeechToTextOverlay","Microsoft.GamingApp") | ForEach-Object { $pkg = Get-AppxPackage $_ -AllUsers; if ($pkg) { $pkg | Remove-AppxPackage -AllUsers; Write-Host "Removed: $_" } }
reg add "HKLM\SOFTWARE\Microsoft\Windows\CurrentVersion\Appx\AppxAllUserStore\Deprovisioned\Microsoft.XboxSpeechToTextOverlay_8wekyb3d8bbwe" /f
reg add "HKLM\SOFTWARE\Microsoft\Windows\CurrentVersion\Appx\AppxAllUserStore\Deprovisioned\Microsoft.Xbox.TCUI_8wekyb3d8bbwe" /f
reg add "HKLM\SOFTWARE\Microsoft\Windows\CurrentVersion\Appx\AppxAllUserStore\Deprovisioned\Microsoft.XboxApp_8wekyb3d8bbwe" /f
reg add "HKLM\SOFTWARE\Microsoft\Windows\CurrentVersion\Appx\AppxAllUserStore\Deprovisioned\Microsoft.XboxGamingOverlay_8wekyb3d8bbwe" /f
reg add "HKLM\SOFTWARE\Microsoft\Windows\CurrentVersion\Appx\AppxAllUserStore\Deprovisioned\Microsoft.XboxGameOverlay_8wekyb3d8bbwe" /f
Set-Service -Name "XblAuthManager" -StartupType Manual
Set-Service -Name "XblGameSave" -StartupType Manual
Set-Service -Name "XboxGipSvc" -StartupType Manual
Set-Service -Name "XboxNetApiSvc" -StartupType Manual

```

## Consumer Features

This command disables the "Consumer Features" feature, which can automatically install unwanted apps.

```
reg add "HKLM\SOFTWARE\Policies\Microsoft\Windows\CloudContent" /v "DisableWindowsConsumerFeatures" /t "REG_DWORD" /d "1" /f
```

## Hyper-V

Removes the Hyper-V feature from Windows, virtual machines might stop working when disabling this feature.

```
try { Disable-WindowsOptionalFeature -FeatureName "Microsoft-Hyper-V-All" -Online -NoRestart -ErrorAction Stop; Write-Output "Successfully disabled the feature Microsoft-Hyper-V-All." } catch { Write-Output "Feature not found: Microsoft-Hyper-V-All" }
```

## Internet Explorer

Removes the Internet Explorer feature from Windows.

```
dism /online /Disable-Feature /FeatureName:Internet-Explorer-Optional-amd64 | Out-Null; if ($LASTEXITCODE -eq 0) { Write-Host "Successfully removed the feature: Internet-Explorer-Optional-amd64" } else { Write-Host "Feature not found: Internet-Explorer-Optional-amd64" }
```

## Fax & Scan

Removes the Fax Services feature from Windows.

```
dism /Online /Disable-Feature /FeatureName:FaxServicesClientPackage | Out-Null; if ($LASTEXITCODE -eq 0) { Write-Host "Successfully removed the feature: FaxServicesClientPackage" } else { Write-Host "Feature not found: FaxServicesClientPackage" }
```

## Media Player

Removes the Windows Media Player feature from Windows.

```
try { Disable-WindowsOptionalFeature -FeatureName "WindowsMediaPlayer" -Online -NoRestart -ErrorAction Stop | Out-Null; Write-Output "-- Successfully disabled the feature WindowsMediaPlayer." } catch { Write-Output "Feature not found." }
```

## Hide Copilot Button in Explorer

Disables the Copilot button in Windows Explorer.

```
reg add "HKCU\Software\Microsoft\Windows\CurrentVersion\Explorer\Advanced" /v "ShowCopilotButton" /t REG_DWORD /d 0 /f
```

## Remove AI Packages

Removes all the AI packages from Windows.

```
$aiPackages = @('Microsoft.Windows.Ai.Copilot.Provider','Microsoft.Copilot','Microsoft.WindowsAiFoundation','Microsoft.Windows.Recall'); foreach ($package in $aiPackages) { try { $removed = $false; $appxPackages = Get-AppxPackage -Name $package -AllUsers; if ($appxPackages) { $appxPackages | Remove-AppxPackage -AllUsers; $removed = $true; } $provisionedPackages = Get-AppxProvisionedPackage -Online | Where-Object DisplayName -like $package; if ($provisionedPackages) { $provisionedPackages | Remove-AppxProvisionedPackage -Online; $removed = $true; } if ($removed) { Write-Host 'Removed: ' $package; } } catch { Write-Host 'Could not remove: ' $package -ForegroundColor Red; } }
```

## Remove Copilot

Removes the Copilot feature from Windows.

```
Get-AppxPackage "Microsoft.CoPilot" | Remove-AppxPackage
reg add "HKLM\SOFTWARE\Policies\Microsoft\Windows\WindowsCopilot" /v "TurnOffWindowsCopilot" /t "REG_DWORD" /d "1" /f
reg add "HKCU\Software\Policies\Microsoft\Windows\WindowsCopilot" /v "TurnOffWindowsCopilot" /t "REG_DWORD" /d "1" /f
reg add "HKCU\Software\Microsoft\Windows\CurrentVersion\Notifications\Settings" /v "AutoOpenCopilotLargeScreens" /t "REG_DWORD" /d "0" /f
reg add "HKCU\Software\Microsoft\Windows\CurrentVersion\Explorer\Advanced" /v "ShowCopilotButton" /t "REG_DWORD" /d "0" /f
reg add "HKLM\SOFTWARE\Microsoft\Windows\Shell\Copilot" /v "CopilotDisabledReason" /t "REG_SZ" /d "IsEnabledForGeographicRegionFailed" /f
reg add "HKCU\SOFTWARE\Microsoft\Windows\CurrentVersion\WindowsCopilot" /v "AllowCopilotRuntime" /t "REG_DWORD" /d "0" /f
reg add "HKLM\SOFTWARE\Microsoft\Windows\CurrentVersion\Shell Extensions\Blocked" /v "{CB3B0003-8088-4EDE-8769-8B354AB2FF8C}" /t "REG_SZ" /d "" /f
reg add "HKLM\SOFTWARE\Microsoft\Windows\Shell\Copilot" /v "IsCopilotAvailable" /t "REG_DWORD" /d "0" /f
reg add "HKCU\Software\Microsoft\Windows\Shell\Copilot\BingChat" /v "IsUserEligible" /t "REG_DWORD" /d "0" /f
```

## Remove Recall

Removes the Recall feature from Windows.

```
DISM /Online /Disable-Feature /NoRestart /FeatureName:Recall | Out-Null; if ($LASTEXITCODE -eq 0) { Write-Host "Successfully removed the feature: Recall" } else { Write-Host "Feature not found: Recall" }
$recallTasks = @('\Microsoft\Windows\WindowsAI\*', '\Microsoft\Windows\Recall\*'); foreach ($taskPath in $recallTasks) { try { $tasks = Get-ScheduledTask -TaskPath $taskPath -ErrorAction SilentlyContinue; if ($tasks) { $tasks | Unregister-ScheduledTask -Confirm:$false -ErrorAction Stop; $taskCount = ($tasks | Measure-Object).Count; Write-Host "Removed $taskCount task(s) from: $taskPath" -ForegroundColor Green; } } catch { Write-Host "Could not remove tasks from: $taskPath" -ForegroundColor Red; } }
reg add "HKLM\SOFTWARE\Policies\Microsoft\Windows\WindowsAI" /v "DisableAIDataAnalysis" /t REG_DWORD /d 1 /f
```

## Remove AI from Notepad

Removes AI features from Notepad.

```
reg add "HKLM\Software\Policies\WindowsNotepad" /v "DisableAIFeatures" /t REG_DWORD /d 1 /f
reg add "HKCU\Software\Microsoft\Notepad" /v "ShowRewriteButton" /t REG_DWORD /d 0 /f
```

## Remove AI Files

Removes AI files from Windows.

```
$aiPaths = @("$env:ProgramFiles\WindowsApps\Microsoft.Copilot*", "$env:ProgramFiles\WindowsApps\Microsoft.Windows.Ai*", "$env:LocalAppData\Packages\Microsoft.Copilot*", "$env:LocalAppData\Packages\Microsoft.Windows.Ai*", "$env:SystemRoot\SystemApps\Microsoft.Windows.Copilot*"); foreach ($path in $aiPaths) { if (Test-Path $path) { try { Remove-Item -Path $path -Recurse -Force; Write-Host "Removed: $path" -ForegroundColor Green } catch { Write-Host "Could not remove: $path" -ForegroundColor Red } } }
```

## Remove Microsoft Store

Removes Microsoft Store from Windows.
Once uninstalled you will not be able to install Microsoft store apps anymore.

```
Get-AppxPackage "*Microsoft.WindowsStore*" | Remove-AppxPackage
```

## Disable Microsoft Store App Updates

Disables automatic updates for Microsoft Store apps.

```
reg add "HKLM\SOFTWARE\Policies\Microsoft\WindowsStore" /v "AutoDownload" /t REG_DWORD /d 2 /f
```

## Remove OneDrive

Performs a deep uninstall of OneDrive.
If you're using OneDrive, backup your data before running this script.

```
Stop-Process -Name "OneDrive" -Force
$onedriveUninstaller = "$env:SystemRoot\System32\OneDriveSetup.exe"
if (Test-Path $onedriveUninstaller) {
    Write-Host "-- Uninstalling OneDrive through the installers"
    Start-Process -FilePath $onedriveUninstaller -ArgumentList "/uninstall" -Wait
}
Write-Host "-- Copying OneDrive files to local folders"
robocopy "$env:USERPROFILE\OneDrive" "$env:USERPROFILE" /mov /e /xj /ndl /nfl /njh /njs /nc /ns /np | Out-Null
Write-Host "-- Removing OneDrive from explorer sidebar"
Remove-Item -Path "HKCR:\WOW6432Node\CLSID\{018D5C66-4533-4307-9B53-224DE2ED1FE6}" -Recurse -Force
Remove-Item -Path "HKCR:\CLSID\{018D5C66-4533-4307-9B53-224DE2ED1FE6}" -Recurse -Force
Write-Host "-- Removing shortcut entry"
Remove-Item "$env:APPDATA\Microsoft\Windows\Start Menu\Programs\OneDrive.lnk" -Force
Write-Host "-- Removing scheduled task"
Get-ScheduledTask -TaskPath '\' -TaskName 'OneDrive*' -ErrorAction SilentlyContinue  | Unregister-ScheduledTask -Confirm:$false -ErrorAction SilentlyContinue
Write-Host "-- Removing OneDrive leftovers"
Remove-Item -Path "$env:USERPROFILE\OneDrive" -Recurse -Force
Remove-Item -Path "$env:LOCALAPPDATA\OneDrive" -Recurse -Force
Remove-Item -Path "$env:LOCALAPPDATA\Microsoft\OneDrive" -Recurse -Force
Remove-Item -Path "$env:ProgramData\Microsoft OneDrive" -Recurse -Force
Remove-Item -Path "C:\OneDriveTemp" -Recurse -Force
Remove-Item -Path "HKCU:\Software\Microsoft\OneDrive" -Recurse -Force
```

## Debloat Edge

This will disable various annoyances in Edge.

```
reg add "HKLM\SOFTWARE\Policies\Microsoft\Edge" /v "EdgeEnhanceImagesEnabled" /t REG_DWORD /d 0 /f
reg add "HKLM\SOFTWARE\Policies\Microsoft\Edge" /v "PersonalizationReportingEnabled" /t REG_DWORD /d 0 /f
reg add "HKLM\SOFTWARE\Policies\Microsoft\Edge" /v "ShowRecommendationsEnabled" /t REG_DWORD /d 0 /f
reg add "HKLM\SOFTWARE\Policies\Microsoft\Edge" /v "HideFirstRunExperience" /t REG_DWORD /d 1 /f
reg add "HKLM\SOFTWARE\Policies\Microsoft\Edge" /v "UserFeedbackAllowed" /t REG_DWORD /d 0 /f
reg add "HKLM\SOFTWARE\Policies\Microsoft\Edge" /v "ConfigureDoNotTrack" /t REG_DWORD /d 1 /f
reg add "HKLM\SOFTWARE\Policies\Microsoft\Edge" /v "AlternateErrorPagesEnabled" /t REG_DWORD /d 0 /f
reg add "HKLM\SOFTWARE\Policies\Microsoft\Edge" /v "EdgeCollectionsEnabled" /t REG_DWORD /d 0 /f
reg add "HKLM\SOFTWARE\Policies\Microsoft\Edge" /v "EdgeFollowEnabled" /t REG_DWORD /d 0 /f
reg add "HKLM\SOFTWARE\Policies\Microsoft\Edge" /v "EdgeShoppingAssistantEnabled" /t REG_DWORD /d 0 /f
reg add "HKLM\SOFTWARE\Policies\Microsoft\Edge" /v "MicrosoftEdgeInsiderPromotionEnabled" /t REG_DWORD /d 0 /f
reg add "HKLM\SOFTWARE\Policies\Microsoft\Edge" /v "RelatedMatchesCloudServiceEnabled" /t REG_DWORD /d 0 /f
reg add "HKLM\SOFTWARE\Policies\Microsoft\Edge" /v "ShowMicrosoftRewards" /t REG_DWORD /d 0 /f
reg add "HKLM\SOFTWARE\Policies\Microsoft\Edge" /v "WebWidgetAllowed" /t REG_DWORD /d 0 /f
reg add "HKLM\SOFTWARE\Policies\Microsoft\Edge" /v "MetricsReportingEnabled" /t REG_DWORD /d 0 /f
reg add "HKLM\SOFTWARE\Policies\Microsoft\Edge" /v "StartupBoostEnabled" /t REG_DWORD /d 0 /f
reg add "HKLM\SOFTWARE\Policies\Microsoft\Edge" /v "BingAdsSuppression" /t REG_DWORD /d 0 /f
reg add "HKLM\SOFTWARE\Policies\Microsoft\Edge" /v "NewTabPageHideDefaultTopSites" /t REG_DWORD /d 0 /f
reg add "HKLM\SOFTWARE\Policies\Microsoft\Edge" /v "PromotionalTabsEnabled" /t REG_DWORD /d 0 /f
reg add "HKLM\SOFTWARE\Policies\Microsoft\Edge" /v "SendSiteInfoToImproveServices" /t REG_DWORD /d 0 /f
reg add "HKLM\SOFTWARE\Policies\Microsoft\Edge" /v "SpotlightExperiencesAndRecommendationsEnabled" /t REG_DWORD /d 0 /f
reg add "HKLM\SOFTWARE\Policies\Microsoft\Edge" /v "DiagnosticData" /t REG_DWORD /d 0 /f
reg add "HKLM\SOFTWARE\Policies\Microsoft\Edge" /v "EdgeAssetDeliveryServiceEnabled" /t REG_DWORD /d 0 /f
reg add "HKLM\SOFTWARE\Policies\Microsoft\Edge" /v "CryptoWalletEnabled" /t REG_DWORD /d 0 /f
reg add "HKLM\SOFTWARE\Policies\Microsoft\Edge" /v "WalletDonationEnabled" /t REG_DWORD /d 0 /f
reg add "HKLM\SOFTWARE\Policies\Microsoft\Edge" /v "HubsSidebarEnabled" /t "REG_DWORD" /d "0" /f
reg add "HKLM\SOFTWARE\Policies\Microsoft\Edge" /v "CopilotPageAction" /t "REG_DWORD" /d "0" /f
```

## Remove Edge

Removes the Chromium-based Edge browser from Windows.

```
$Path = (Get-ChildItem "C:\Program Files (x86)\Microsoft\Edge\Application\*\Installer\setup.exe")[0].FullName
New-Item "C:\Windows\SystemApps\Microsoft.MicrosoftEdge_8wekyb3d8bbwe\MicrosoftEdge.exe" -Force
Start-Process $Path -ArgumentList '--uninstall --system-level --force-uninstall --delete-profile'
```

## Remove Widgets

Removes the Widgets component from Windows.

```
Get-AppxPackage *WebExperience* | Remove-AppxPackage
reg add "HKLM\SOFTWARE\Microsoft\Windows\CurrentVersion\Appx\AppxAllUserStore\Deprovisioned\MicrosoftWindows.Client.WebExperience_cw5n1h2txyewy" /f
```

## Remove Taskbar Widgets

Removes taskbar widgets from the taskbar.

```
reg add "HKCU\Software\Microsoft\Windows\CurrentVersion\Explorer\Advanced" /v "ShowTaskViewButton" /t REG_DWORD /d 0 /f
reg add "HKLM\SOFTWARE\Microsoft\PolicyManager\default\NewsAndInterests\AllowNewsAndInterests" /v "value" /t REG_DWORD /d 0 /f
reg add "HKLM\SOFTWARE\Policies\Microsoft\Windows\Windows Feeds" /v "EnableFeeds" /t REG_DWORD /d 0 /f
```
