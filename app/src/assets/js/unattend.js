import { save } from "@tauri-apps/plugin-dialog";
import { writeTextFile } from "@tauri-apps/plugin-fs";

const autoattendBtn = document.getElementById("autounattendBtn");
autoattendBtn.addEventListener("click", async () => {
  let script = document.getElementById("code").innerText;
  script = script.replace(/\n/g, "\r\n");
  script = script.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");

  const autoattendScript = `<?xml version="1.0" encoding="utf-8"?>
<unattend xmlns="urn:schemas-microsoft-com:unattend" xmlns:wcm="http://schemas.microsoft.com/WMIConfig/2002/State">
	<settings pass="offlineServicing"></settings>
	<settings pass="windowsPE">
		<component name="Microsoft-Windows-Setup" processorArchitecture="amd64" publicKeyToken="31bf3856ad364e35" language="neutral" versionScope="nonSxS">
			<UserData>
				<ProductKey>
					<Key>00000-00000-00000-00000-00000</Key>
					<WillShowUI>Always</WillShowUI>
				</ProductKey>
				<AcceptEula>true</AcceptEula>
			</UserData>
			<UseConfigurationSet>false</UseConfigurationSet>
			<RunSynchronous>
				<RunSynchronousCommand wcm:action="add">
					<Order>1</Order>
					<Path>reg.exe add "HKLM\\SYSTEM\\Setup\\LabConfig" /v BypassTPMCheck /t REG_DWORD /d 1 /f</Path>
				</RunSynchronousCommand>
				<RunSynchronousCommand wcm:action="add">
					<Order>2</Order>
					<Path>reg.exe add "HKLM\\SYSTEM\\Setup\\LabConfig" /v BypassSecureBootCheck /t REG_DWORD /d 1 /f</Path>
				</RunSynchronousCommand>
				<RunSynchronousCommand wcm:action="add">
					<Order>3</Order>
					<Path>reg.exe add "HKLM\\SYSTEM\\Setup\\LabConfig" /v BypassRAMCheck /t REG_DWORD /d 1 /f</Path>
				</RunSynchronousCommand>
			</RunSynchronous>
		</component>
	</settings>
	<settings pass="generalize"></settings>
	<settings pass="specialize">
		<component name="Microsoft-Windows-Deployment" processorArchitecture="amd64" publicKeyToken="31bf3856ad364e35" language="neutral" versionScope="nonSxS">
			<RunSynchronous>
				<RunSynchronousCommand wcm:action="add">
					<Order>1</Order>
					<Path>powershell.exe -WindowStyle "Normal" -NoProfile -Command "$xml = [xml]::new(); $xml.Load('C:\\Windows\\Panther\\unattend.xml'); $sb = [scriptblock]::Create( $xml.unattend.Extensions.ExtractScript ); Invoke-Command -ScriptBlock $sb -ArgumentList $xml;"</Path>
				</RunSynchronousCommand>
				<RunSynchronousCommand wcm:action="add">
					<Order>2</Order>
					<Path>powershell.exe -WindowStyle "Normal" -ExecutionPolicy "Unrestricted" -NoProfile -File "C:\\Windows\\Setup\\Scripts\\Specialize.ps1"</Path>
				</RunSynchronousCommand>
				<RunSynchronousCommand wcm:action="add">
          			<Order>3</Order>
          			<Path>powershell.exe -NoProfile -WindowStyle Hidden -ExecutionPolicy Bypass -Command "Get-NetAdapter | Disable-NetAdapter -Confirm:$false"</Path>
        		</RunSynchronousCommand>
			</RunSynchronous>
		</component>
	</settings>
	<settings pass="auditSystem"></settings>
	<settings pass="auditUser"></settings>
	<settings pass="oobeSystem">
		<component name="Microsoft-Windows-Shell-Setup" processorArchitecture="amd64" publicKeyToken="31bf3856ad364e35" language="neutral" versionScope="nonSxS">
			<OOBE>
				<HideEULAPage>true</HideEULAPage>
				<HideWirelessSetupInOOBE>true</HideWirelessSetupInOOBE>
				<HideOnlineAccountScreens>true</HideOnlineAccountScreens>
				<ProtectYourPC>3</ProtectYourPC>
			</OOBE>
			<FirstLogonCommands>
				<SynchronousCommand wcm:action="add">
					<Order>1</Order>
					<CommandLine>powershell.exe -WindowStyle "Normal" -ExecutionPolicy "Unrestricted" -NoProfile -File "C:\\Windows\\Setup\\Scripts\\FirstLogon.ps1"</CommandLine>
				</SynchronousCommand>
			</FirstLogonCommands>
		</component>
	</settings>
	<Extensions xmlns="urn:winscript:unattend">
		<ExtractScript>
param(
    [xml] $Document
);

foreach( $file in $Document.unattend.Extensions.File ) {
    $path = [System.Environment]::ExpandEnvironmentVariables( $file.GetAttribute( 'path' ) );
    mkdir -Path( $path | Split-Path -Parent ) -ErrorAction 'SilentlyContinue';
    $encoding = switch( [System.IO.Path]::GetExtension( $path ) ) {
        { $_ -in '.ps1', '.xml' } { [System.Text.Encoding]::UTF8; }
        { $_ -in '.reg', '.vbs', '.js' } { [System.Text.UnicodeEncoding]::new( $false, $true ); }
        default { [System.Text.Encoding]::Default; }
    };
    $bytes = $encoding.GetPreamble() + $encoding.GetBytes( $file.InnerText.Trim() );
    [System.IO.File]::WriteAllBytes( $path, $bytes );
}
		</ExtractScript>
		<File path="C:\\Windows\\Setup\\Scripts\\winscript.ps1">
${script}
		</File>
		<File path="C:\\Windows\\Setup\\Scripts\\Specialize.ps1">
$scripts = @(
	{
		reg.exe add "HKLM\\Software\\Policies\\Microsoft\\Windows\\CloudContent" /v "DisableCloudOptimizedContent" /t REG_DWORD /d 1 /f;
	};
	{
		reg.exe add "HKLM\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\OOBE" /v BypassNRO /t REG_DWORD /d 1 /f;
	};
	{
        reg.exe add "HKLM\\SOFTWARE\\Policies\\Microsoft\\Windows\\WindowsUpdate\\AU" /v NoAutoUpdate /t REG_DWORD /d 1 /f;
        reg.exe add "HKLM\\SOFTWARE\\Policies\\Microsoft\\Windows\\WindowsUpdate" /v DisableWindowsUpdateAccess /t REG_DWORD /d 1 /f;
	};
);

&amp; {
  [float] $complete = 0;
  [float] $increment = 100 / $scripts.Count;
  foreach( $script in $scripts ) {
    Write-Progress -Id 0 -Activity 'Running scripts to customize your Windows installation. Do not close this window.' -PercentComplete $complete;
    '*** Will now execute command &#xAB;{0}&#xBB;.' -f $(
      $script.ToString().Trim() -replace '\\s+', ' ' -replace '^(.{99})(.+)$', '$1&#x2026;';
    );
    $start = [datetime]::Now;
    &amp; $script;
    '*** Finished executing command after {0:0} ms.' -f [datetime]::Now.Subtract( $start ).TotalMilliseconds;
    "\`r\`n" * 3;
    $complete += $increment;
  }
} *&gt;&amp;1 | Out-String -Width 1KB -Stream &gt;&gt; "C:\\Windows\\Setup\\Scripts\\Specialize.log";
		</File>
		<File path="C:\\Windows\\Setup\\Scripts\\FirstLogon.ps1">
$scripts = @(
	{
		Get-NetAdapter | Enable-NetAdapter -Confirm:$false;
	};
	{
		reg.exe delete "HKLM\\SOFTWARE\\Policies\\Microsoft\\Windows\\WindowsUpdate\\AU" /v NoAutoUpdate /f;
		reg.exe delete "HKLM\\SOFTWARE\\Policies\\Microsoft\\Windows\\WindowsUpdate" /v DisableWindowsUpdateAccess /f;
	};
	{
		&amp; 'C:\\Windows\\Setup\\Scripts\\winscript.ps1';
	};
);

&amp; {
  [float] $complete = 0;
  [float] $increment = 100 / $scripts.Count;
  foreach( $script in $scripts ) {
    &amp; $script;
  }
} *&gt;&amp;1 | Out-String -Width 1KB -Stream &gt;&gt; "C:\\Windows\\Setup\\Scripts\\FirstLogon.log";
		</File>
	</Extensions>
</unattend>`;

  try {
    const filePath = await save({
      defaultPath: "autounattend.xml",
      filters: [
        {
          name: "XML",
          extensions: ["xml"],
        },
      ],
    });

    if (filePath) {
      await writeTextFile(filePath, autoattendScript);
    }
  } catch (error) {
    console.error("Error saving autoattend:", error);
  }
});
