## Google DNS

```
netsh interface ip set dns name="Ethernet" static 8.8.8.8
netsh interface ip add dns name="Ethernet" 8.8.4.4 index=2
```

## Cloudflare DNS

```
netsh interface ip set dns name="Ethernet" static 1.1.1.1
netsh interface ip add dns name="Ethernet" 1.0.0.1 index=2
```

## OpenDNS DNS

```
netsh interface ip set dns name="Ethernet" static 208.67.222.222
netsh interface ip add dns name="Ethernet" 208.67.220.220 index=2
```

## Quad9 DNS

```
netsh interface ip set dns name="Ethernet" static 9.9.9.9
netsh interface ip add dns name="Ethernet" 149.112.112.112 index=2
```

## Adguard DNS

```
netsh interface ip set dns name="Ethernet" static 94.140.14.14 | Out-Null
netsh interface ip add dns name="Ethernet" 94.140.15.15 index=2 | Out-Null
```

## Balanced Plan

Enables the 'Balanced' power plan.

```
$balanced = powercfg -list | Select-String -Pattern 'Balanced'; if ($balanced) { Write-Host '-- Power plan already exists.' } else { Write-Host '-- Enabling Balanced.'; $output = powercfg -duplicatescheme 381b4222-f694-41f0-9685-ff5bb260df2e 2>&1; if ($output -match 'Unable to create a new power scheme' -or $output -match 'The power scheme, subgroup or setting specified does not exist') { powercfg -RestoreDefaultSchemes } }
$balancedGUID = (powercfg -list | Select-String -Pattern 'Balanced').Line.Split()[3]; Write-Host '-- Activating Balanced'; powercfg -setactive $balancedGUID
```

## High Performance

Enables the 'High Performance' power plan.

```
$highPerformance = powercfg -list | Select-String -Pattern 'High performance'; if ($highPerformance) { Write-Host '-- Power plan already exists.' } else { Write-Host '-- Enabling High Performance.'; $output = powercfg -duplicatescheme 8c5e7fda-e8bf-4a96-9a85-a6e23a8c635c 2>&1; if ($output -match 'Unable to create a new power scheme' -or $output -match 'The power scheme, subgroup or setting specified does not exist') { powercfg -RestoreDefaultSchemes } }
$highPlanGUID = (powercfg -list | Select-String -Pattern 'High performance').Line.Split()[3]; Write-Host '-- Activating High Performance'; powercfg -setactive $highPlanGUID
```

## Ultimate Performance

Enables the 'Ultimate Performance' power plan.

```
$ultimatePerformance = powercfg -list | Select-String -Pattern 'Ultimate Performance'; if ($ultimatePerformance) { Write-Host '-- Power plan already exists.' } else { Write-Host '-- Enabling Ultimate Performance.'; $output = powercfg -duplicatescheme e9a42b02-d5df-448d-aa00-03f14749eb61 2>&1; if ($output -match 'Unable to create a new power scheme' -or $output -match 'The power scheme, subgroup or setting specified does not exist') { powercfg -RestoreDefaultSchemes } }
$ultimatePlanGUID = (powercfg -list | Select-String -Pattern 'Ultimate Performance').Line.Split()[3]; Write-Host '-- Activating Ultimate Performance'; powercfg -setactive $ultimatePlanGUID
```

## Set Services to Manual

Sets various services startup type to manual so they run only when needed.

```
$manualServices = @("ALG","AppMgmt","AppReadiness","Appinfo","AxInstSV","BDESVC","BTAGService","BcastDVRUserService","BluetoothUserService","Browser","CDPSvc","COMSysApp","CaptureService","CertPropSvc","ConsentUxUserSvc","CscService","DevQueryBroker","DeviceAssociationService","DeviceInstall","DevicePickerUserSvc","DevicesFlowUserSvc","DisplayEnhancementService","DmEnrollmentSvc","DsSvc","DsmSvc","EFS","EapHost","EntAppSvc","FDResPub","FrameServer","FrameServerMonitor","GraphicsPerfSvc","HvHost","IEEtwCollectorService","InstallService","InventorySvc","IpxlatCfgSvc","KtmRm","LicenseManager","LxpSvc","MSDTC","MSiSCSI","McpManagementService","MicrosoftEdgeElevationService","MsKeyboardFilter","NPSMSvc","NaturalAuthentication","NcaSvc","NcbService","NcdAutoSetup","NetSetupSvc","Netman","NgcCtnrSvc","NgcSvc","NlaSvc","PNRPAutoReg","PcaSvc","PeerDistSvc","PenService","PerfHost","PhoneSvc","PimIndexMaintenanceSvc","PlugPlay","PolicyAgent","PrintNotify","PushToInstall","QWAVE","RasAuto","RasMan","RetailDemo","RmSvc","RpcLocator","SCPolicySvc","SCardSvr","SDRSVC","SEMgrSvc","SNMPTRAP","SNMPTrap","SSDPSRV","ScDeviceEnum","SensorDataService","SensorService","SensrSvc","SessionEnv","SharedAccess","SmsRouter","SstpSvc","StiSvc","StorSvc","TapiSrv","TextInputManagementService","TieringEngineService","TokenBroker","TroubleshootingSvc","TrustedInstaller","UdkUserSvc","UmRdpService","UserDataSvc","UsoSvc","VSS","VacSvc","WEPHOSTSVC","WFDSConMgrSvc","WMPNetworkSvc","WManSvc","WPDBusEnum","WalletService","WarpJITSvc","WbioSrvc","WdNisSvc","WdiServiceHost","WdiSystemHost","WebClient","Wecsvc","WerSvc","WiaRpc","WinRM","WpcMonSvc","WpnService","WwanSvc","autotimesvc","bthserv","camsvc","cbdhsvc","cloudidsvc","dcsvc","defragsvc","diagsvc","dmwappushservice","dot3svc","edgeupdate","edgeupdatem","embeddedmode","fdPHost","fhsvc","hidserv","icssvc","lfsvc","lltdsvc","lmhosts","msiserver","netprofm","p2pimsvc","p2psvc","perceptionsimulation","pla","seclogon","smphost","svsvc","swprv","upnphost","vds","vmicguestinterface","vmicheartbeat","vmickvpexchange","vmicrdv","vmicshutdown","vmictimesync","vmicvmsession","vmicvss","vmvss","wbengine","wcncsvc","webthreatdefsvc","wercplsupport","wisvc","wlidsvc","wlpasvc","wmiApSrv","workfolderssvc","wuauserv","wudfsvc")
$disabledServices = @("AppVClient","AssignedAccessManagerSvc","DiagTrack","DialogBlockingService","NetTcpPortSharing","RemoteAccess","RemoteRegistry","shpamsvc","ssh-agent","tzautoupdate")
$manualServices | ForEach-Object { Set-Service -Name $_ -StartupType Manual }
$disabledServices | ForEach-Object { Set-Service -Name $_ -StartupType Disabled }
```

## Disable Windows Transparency

Disables Windows transparency effects.

```
reg add "HKCU\Software\Microsoft\Windows\CurrentVersion\Themes\Personalize" /v "EnableTransparency" /t REG_DWORD /d 0 /f
```

## Disable HAGS

Disables Hardware-accelerated GPU scheduling.

```
reg add "HKLM\SYSTEM\CurrentControlSet\Control\GraphicsDrivers" /v "HwSchMode" /t REG_DWORD /d 1 /f
```

## Disable Mouse Delay

Disables default mouse hover and menu show 400ms delay.

```
reg add "HKCU\Control Panel\Desktop" /v "MenuShowDelay" /t REG_SZ /d 0 /f
reg add "HKCU\Control Panel\Mouse" /v "MouseHoverTime" /t REG_SZ /d 0 /f
```

## Limit Windows Defender Usage

Limits Defender CPU maximum usage to 25% instead of default 50%.

```
reg add "HKLM\SOFTWARE\Policies\Microsoft\Windows Defender\Scan" /v "AvgCPULoadFactor" /t REG_DWORD /d "25" /f
```

## Disable Core Isolation

Disables Windows Core Isolation.

```
reg add "HKLM\\SOFTWARE\\CurrentControlSet\\CurrentControlSet\\Control\\DeviceGuard\\Scenarios\\HypervisorEnforcedCodeIntegrity" /v "Enabled" /t REG_DWORD /d 0 /f
```

## Disable Storage Sense

Disables Storage Sense, a Windows feature running in the background that automatically deletes temporary files.

```
reg add "HKCU\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\StorageSense\\Parameters\\StoragePolicy" /v "01" /t REG_DWORD /d 0 /f
```

## Disable Prefetch

Disables sysmain service, prefetch will stop working.

```
sc stop sysmain
sc config sysmain start=disabled
```

## Disable Search

Disables Windows Search, indexing will stop working.

```
sc stop "wsearch" && sc config "wsearch" start=disabled
```

## Disable Hibernation

Disables hibernation, not recommended on laptops.

```
powercfg.exe /hibernate off
```
