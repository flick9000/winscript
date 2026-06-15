import { save } from "@tauri-apps/plugin-dialog";
import { writeTextFile } from "@tauri-apps/plugin-fs";

const autoattendBtn = document.getElementById("autounattendBtn");
autoattendBtn.addEventListener("click", async () => {
  let script = document.getElementById("code").innerText;
  script = script.replace(/\n/g, "\r\n");

  const autoattendScript = `
<?xml version="1.0" encoding="utf-8"?>
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
			</RunSynchronous>
		</component>
	</settings>
	<settings pass="auditSystem"></settings>
	<settings pass="auditUser"></settings>
	<settings pass="oobeSystem">
		<component name="Microsoft-Windows-Shell-Setup" processorArchitecture="amd64" publicKeyToken="31bf3856ad364e35" language="neutral" versionScope="nonSxS">
			<OOBE>
				<HideEULAPage>true</HideEULAPage>
				<HideWirelessSetupInOOBE>false</HideWirelessSetupInOOBE>
				<HideOnlineAccountScreens>false</HideOnlineAccountScreens>
			</OOBE>
			<FirstLogonCommands>
				<SynchronousCommand wcm:action="add">
					<Order>1</Order>
					<CommandLine>powershell.exe -WindowStyle "Normal" -ExecutionPolicy "Unrestricted" -NoProfile -File "C:\\Windows\\Setup\\Scripts\\FirstLogon.ps1"</CommandLine>
				</SynchronousCommand>
			</FirstLogonCommands>
		</component>
	</settings>
	<Extensions>
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
		<File path="C:\\Windows\\Setup\\Scripts\\FirstLogon.ps1">
			&amp; 'C:\\Windows\\Setup\\Scripts\\winscript.ps1'
		</File>
	</Extensions>
</unattend>
`;

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
