function appsInstallChocolatey() {
  // List of apps
  const appListChocolatey = [
    // Drivers
    { id: "Intel", url: "intel-dsa" },
    { id: "NVIDIA", url: "nvidia-display-driver" },
    { id: "Ryzen", url: "amd-ryzen-chipset" },
    // Browsers
    { id: "Brave", url: "brave" },
    { id: "Chrome", url: "googlechrome" },
    { id: "Chromium", url: "chromium" },
    { id: "Firefox", url: "firefox" },
    { id: "Floorp", url: "floorp" },
    { id: "LibreWolf", url: "librewolf" },
    { id: "Opera", url: "opera" },
    { id: "Thorium", url: "thorium" },
    { id: "Tor", url: "tor-browser" },
    { id: "Ungoogled", url: "ungoogled-chromium" },
    { id: "Vivaldi", url: "vivaldi" },
    { id: "Waterfox", url: "waterfox" },
    // Compression
    { id: "7Zip", url: "7zip" },
    { id: "NanaZip", url: "nanazip" },
    { id: "PeaZip", url: "peazip" },
    { id: "WinRAR", url: "winrar" },
    // Gaming
    { id: "BorderlessGaming", url: "borderlessgaming" },
    { id: "EAApp", url: "ea-app" },
    { id: "EpicGames", url: "epicgameslauncher" },
    { id: "FaceIT", url: "faceit" },
    { id: "GOGGalaxy", url: "goggalaxy" },
    { id: "LGHub", url: "lghub" },
    { id: "Minecraft", url: "minecraft-launcher" },
    { id: "PlayNite", url: "playnite" },
    { id: "PrismLauncher", url: "prismlauncher" },
    { id: "Steam", url: "steam" },
    { id: "UbisoftConnect", url: "ubisoft-connect" },
    // Utilities
    { id: "1Password", url: "1password" },
    { id: "AnyDesk", url: "anydesk" },
    { id: "AutoHotkey", url: "hotkey" },
    { id: "BitDefender", url: "bitdefenderavfree" },
    { id: "BitWarden", url: "bitwarden" },
    { id: "BulkCrapUninstaller", url: "bulk-crap-uninstaller" },
    { id: "BulkRename", url: "bulkrenameutility" },
    { id: "CCleaner", url: "ccleaner" },
    { id: "CPU-Z", url: "cpu-z" },
    { id: "DDU", url: "ddu" },
    { id: "Everything", url: "everything" },
    { id: "FlowLauncher", url: "flow-launcher" },
    { id: "FXSound", url: "fxsound" },
    { id: "GPU-Z", url: "gpu-z" },
    { id: "HWInfo", url: "hwinfo" },
    { id: "HWMonitor", url: "hwmonitor" },
    { id: "ImgBurn", url: "imgburn" },
    { id: "JDownloader", url: "jdownloader" },
    { id: "KeePass", url: "keepass" },
    { id: "ModernFlyouts", url: "modernflyouts" },
    { id: "Afterburner", url: "msiafterburner" },
    { id: "Shell", url: "nilesoft-shell" },
    { id: "ProtonDrive", url: "protondrive" },
    { id: "ProtonMail", url: "protonmail" },
    { id: "ProtonPass", url: "protonpass" },
    { id: "qBitTorrent", url: "qbittorrent" },
    { id: "QuickLook", url: "quicklook" },
    { id: "Rainmeter", url: "rainmeter" },
    { id: "Revo", url: "revo-uninstaller" },
    { id: "SnappyDriver", url: "snappy-driver-installer" },
    { id: "StartAllBack", url: "startallback" },
    { id: "TeamViewer", url: "teamviewer" },
    { id: "TotalCommander", url: "totalcommander" },
    { id: "TransluscentTB", url: "translucenttb" },
    { id: "VirtualBox", url: "virtualbox" },
    { id: "WindHawk", url: "windhawk" },
    { id: "WingetUI", url: "wingetui" },
    // Pro Tools
    { id: "AdvancedIpScanner", url: "advanced-ip-scanner" },
    { id: "AngryIpScanner", url: "angryip" },
    { id: "MullvadVPN", url: "mullvad-app" },
    { id: "OpenVPN", url: "openvpn" },
    { id: "ProtonVPN", url: "protonvpn" },
    { id: "PuTTY", url: "putty" },
    { id: "SimpleWall", url: "simplewall" },
    { id: "WireShark", url: "wireshark" },
    { id: "WireGuard", url: "wireguard" },
    // Microsoft Tools
    { id: "Autoruns", url: "autoruns" },
    { id: "Nuget", url: "nuget.commandline" },
    { id: "OneDrive", url: "onedrive" },
    { id: "PowerToys", url: "powertoys" },
    { id: "PowerBI", url: "powerbi" },
    { id: "ProcessMonitor", url: "procmon" },
    { id: "vcredist", url: "vcredist140" },
    { id: "WinTerminal", url: "microsoft-windows-terminal" },
    // Media
    { id: "AIMP", url: "aimp" },
    { id: "Audacity", url: "audacity" },
    { id: "Clementine", url: "clementine" },
    { id: "DarkTable", url: "darktable" },
    { id: "digiKam", url: "digikam" },
    { id: "EarTrumpet", url: "eartrumpet" },
    { id: "EqualizerAPO", url: "equalizerapo" },
    { id: "FFmpeg", url: "ffmpeg" },
    { id: "foobar2000", url: "foobar2000" },
    { id: "FreeCAD", url: "freecad" },
    { id: "HandBrake", url: "handbrake" },
    { id: "ImageGlass", url: "imageglass" },
    { id: "iTunes", url: "itunes" },
    { id: "Jellyfin", url: "jellyfin" },
    { id: "KLite", url: "k-litecodecpackbasic" },
    { id: "MediaMonkey", url: "mediamonkey" },
    { id: "MuseScore", url: "musescore" },
    { id: "OBS", url: "obs-studio" },
    { id: "Plex", url: "plex" },
    { id: "Spicetify", url: "spicetify-cli" },
    { id: "Spotify", url: "spotify" },
    { id: "Stremio", url: "stremio" },
    { id: "VLC", url: "vlc" },
    { id: "VoiceMeeter", url: "voicemeeter" },
    // Comunication
    { id: "Discord", url: "discord" },
    { id: "Signal", url: "signal" },
    { id: "Skype", url: "skype" },
    { id: "Slack", url: "slack" },
    { id: "Teams", url: "microsoft-teams" },
    { id: "Telegram", url: "telegram" },
    { id: "Thunderbird", url: "thunderbird" },
    { id: "Whatsapp", url: "whatsapp" },
    { id: "Zoom", url: "zoom" },
    { id: "Zulip", url: "zulip" },
    // Imaging
    { id: "Blender", url: "blender" },
    { id: "GIMP", url: "gimp" },
    { id: "Greenshot", url: "greenshot" },
    { id: "inkScape", url: "inkscape" },
    { id: "KdenLive", url: "kdenlive" },
    { id: "Krita", url: "krita" },
    { id: "LightShot", url: "lightshot" },
    { id: "ShareX", url: "sharex" },
    // Documents
    { id: "AdobeReader", url: "adobereader" },
    { id: "AFFiNE", url: "affine-client" },
    { id: "FoxItReader", url: "foxitreader" },
    { id: "Joplin", url: "joplin" },
    { id: "LibreOffice", url: "libreoffice-fresh" },
    { id: "LogSeq", url: "logseq" },
    { id: "Obsidian", url: "obsidian" },
    { id: "OpenOffice", url: "openoffice" },
    { id: "PDF24", url: "pdf24" },
    { id: "simplenote", url: "simplenote" },
    { id: "SumatraPDF", url: "sumatrapdf" },
    // Security
    { id: "Avast", url: "avastfreeantivirus" },
    { id: "AVG", url: "avgantivirusfree" },
    { id: "MalwareBytes", url: "malwarebytes" },
    // For Developers
    { id: "Clink", url: "clink-maintained" },
    { id: "Cursor", url: "cursoride" },
    { id: "Docker", url: "docker-desktop" },
    { id: "Git", url: "git" },
    { id: "GitHub", url: "github-desktop" },
    { id: "GitHubCLI", url: "gh" },
    { id: "Go", url: "go" },
    { id: "Godot", url: "godot" },
    { id: "Java", url: "javaruntime" },
    { id: "Neovim", url: "neovim" },
    { id: "NET48", url: "netfx-4.8" },
    { id: "NET8", url: "dotnet" },
    { id: "NodeJS", url: "nodejs" },
    { id: "Notepad++", url: "notepadplusplus" },
    { id: "OhMyPosh", url: "oh-my-posh" },
    { id: "Python3", url: "python3" },
    { id: "Rust", url: "rust" },
    { id: "SublimeText", url: "sublimetext3" },
    { id: "VSCode", url: "vscode" },
    { id: "VSCodium", url: "vscodium" },
    { id: "VS", url: "visualstudio-installer" },
    { id: "WSL2", url: "wsl2" },
    { id: "Yarn", url: "yarn" },
  ];

  // Create manualURL array
  if (!window.manualURLs) {
    window.manualURLs = [];
  }

  // Get the checked checkboxes
  function getCheckedUrls() {
    return appListChocolatey
      .filter((app) => {
        const element = document.getElementById(app.id);
        return element && element.checked;
      })
      .map((app) => app.url);
  }

  // Function to update the command display
  function updateCommandDisplay() {
    const checkedUrls = getCheckedUrls();
    const allUrls = [...checkedUrls, ...window.manualURLs];
    const finalURL = allUrls.join(" ");

    const command =
      allUrls.length > 0
        ? 'taskkill /f /im explorer.exe && start explorer.exe && start cmd /k "' +
          "choco install " +
          finalURL +
          ' -y --force --ignorepackageexitcodes"'
        : "";

    // Display the final URL in the div
    document.querySelector(".div-install").style.display = allUrls.length > 0 ? "block" : "none";
    document.querySelector(".winget-container").style.display = "none";
    document.querySelector(".chocolatey-container").style.display =
      allUrls.length > 0 ? "block" : "none";

    const commandDisplay = document.querySelector(".commandDisplay");
    commandDisplay.textContent = command;

    const chocorefresh = document.querySelectorAll(".choco-refresh");
    chocorefresh.forEach((div) => {
      div.style.display = "block";
    });

    const installingApps = document.querySelector(".installingApps");
    installingApps.textContent = finalURL;

    const manualList = document.getElementById("manualList");
    if (window.manualURLs.length > 0) {
      manualList.innerHTML = "Manual packages added: " + window.manualURLs.join(" | ");
    }
  }

  // Add addButton click listener
  const addButton = document.getElementById("addApp");
  addButton.addEventListener("click", () => {
    const manualInput = document.getElementById("manualInput").value.trim();
    if (manualInput) {
      window.manualURLs.push(manualInput);
      document.getElementById("manualInput").value = ""; // Clear input
      updateCommandDisplay();
    }
  });

  updateCommandDisplay();
}

function appsInstallWinget() {
  // List of apps
  const appListWinget = [
    { id: "Intel", url: "Intel.DriverAndSupportAssistant" },
    { id: "NVIDIA", url: "TechPowerUp.NVCleanstall" },
    { id: "Ryzen", url: "" }, // missing
    // Browsers
    { id: "Brave", url: "Brave.Brave" },
    { id: "Chrome", url: "Google.Chrome" },
    { id: "Chromium", url: "Hibbiki.Chromium" },
    { id: "Firefox", url: "Mozilla.Firefox" },
    { id: "Floorp", url: "Ablaze.Floorp" },
    { id: "LibreWolf", url: "LibreWolf.LibreWolf" },
    { id: "Opera", url: "Opera.Opera" },
    { id: "Thorium", url: "Alex313031.Thorium" },
    { id: "Tor", url: "TorProject.TorBrowser" },
    { id: "Ungoogled", url: "eloston.ungoogled-chromium" },
    { id: "Vivaldi", url: "Vivaldi.Vivaldi" },
    { id: "Waterfox", url: "Waterfox.Waterfox" },
    // Compression
    { id: "7Zip", url: "7zip.7zip" },
    { id: "NanaZip", url: "M2Team.NanaZip" },
    { id: "PeaZip", url: "Giorgiotani.PeaZip" },
    { id: "WinRAR", url: "RARLab.WinRAR" },
    // Gaming
    { id: "BorderlessGaming", url: "Codeusa.BorderlessGaming" },
    { id: "EAApp", url: "ElectronicArts.EADesktop" },
    { id: "EpicGames", url: "EpicGames.EpicGamesLauncher" },
    { id: "FaceIT", url: "FACEITLTD.FACEITClient" },
    { id: "GOGGalaxy", url: "GOG.Galaxy" },
    { id: "LGHub", url: "Logitech.GHUB" },
    { id: "Minecraft", url: "Mojang.MinecraftLauncher" },
    { id: "PlayNite", url: "Playnite.Playnite" },
    { id: "PrismLauncher", url: "PrismLauncher.PrismLauncher" },
    { id: "Steam", url: "Valve.Steam" },
    { id: "UbisoftConnect", url: "Ubisoft.Connect" },
    // Utilities
    { id: "1Password", url: "AgileBits.1Password" },
    { id: "AnyDesk", url: "AnyDesk.AnyDesk" },
    { id: "AutoHotkey", url: "AutoHotkey.AutoHotkey" },
    { id: "BitDefender", url: "Bitdefender.Bitdefender" },
    { id: "BitWarden", url: "Bitwarden.Bitwarden" },
    { id: "BulkCrapUninstaller", url: "Klocman.BulkCrapUninstaller" },
    { id: "BulkRename", url: "TGRMNSoftware.BulkRenameUtility" },
    { id: "CCleaner", url: "Piriform.CCleaner" },
    { id: "CPU-Z", url: "CPUID.CPU-Z" },
    { id: "DDU", url: "Wagnardsoft.DisplayDriverUninstaller" },
    { id: "Everything", url: "voidtools.Everything" },
    { id: "FlowLauncher", url: "Flow-Launcher.Flow-Launcher" },
    { id: "FXSound", url: "FXSound.FXSound" },
    { id: "GPU-Z", url: "TechPowerUp.GPU-Z" },
    { id: "HWInfo", url: "REALiX.HWiNFO" },
    { id: "HWMonitor", url: "CPUID.HWMonitor" },
    { id: "ImgBurn", url: "LIGHTNINGUK.ImgBurn" },
    { id: "JDownloader", url: "AppWork.JDownloader" },
    { id: "KeePass", url: "DominikReichl.KeePass" },
    { id: "ModernFlyouts", url: "ModernFlyouts.ModernFlyouts" },
    { id: "Afterburner", url: "Guru3D.Afterburner" },
    { id: "Shell", url: "Nilesoft.Shell" },
    { id: "ProtonDrive", url: "Proton.ProtonDrive" },
    { id: "ProtonMail", url: "Proton.ProtonMailBridge" },
    { id: "ProtonPass", url: "Proton.ProtonPass" },
    { id: "qBitTorrent", url: "qBittorrent.qBittorrent" },
    { id: "QuickLook", url: "QL-Win.QuickLook" },
    { id: "Rainmeter", url: "Rainmeter.Rainmeter" },
    { id: "Revo", url: "RevoUninstaller.RevoUninstaller" },
    { id: "SnappyDriver", url: "samlabs-ws.SnappyDriverInstaller" },
    { id: "StartAllBack", url: "StartIsBack.StartAllBack" },
    { id: "TeamViewer", url: "TeamViewer.TeamViewer" },
    { id: "TotalCommander", url: "Ghisler.TotalCommander" },
    { id: "TransluscentTB", url: "CharlesMilette.TranslucentTB" },
    { id: "VirtualBox", url: "Oracle.VirtualBox" },
    { id: "WindHawk", url: "RamenSoftware.Windhawk" },
    { id: "WingetUI", url: "marticliment.UniGetUI" },
    // Pro Tools
    { id: "AdvancedIpScanner", url: "Famatech.AdvancedIPScanner" },
    { id: "AngryIpScanner", url: "angryziber.AngryIPScanner" },
    { id: "MullvadVPN", url: "MullvadVPN.MullvadVPN" },
    { id: "OpenVPN", url: "OpenVPNTechnologies.OpenVPN" },
    { id: "ProtonVPN", url: "Proton.ProtonVPN" },
    { id: "PuTTY", url: "PuTTY.PuTTY" },
    { id: "SimpleWall", url: "Henry++.Simplewall" },
    { id: "WireShark", url: "WiresharkFoundation.Wireshark" },
    { id: "WireGuard", url: "WireGuard.WireGuard" },
    // Microsoft Tools
    { id: "Autoruns", url: "Microsoft.Sysinternals.Autoruns" },
    { id: "Nuget", url: "Microsoft.NuGet" },
    { id: "OneDrive", url: "Microsoft.OneDrive" },
    { id: "PowerToys", url: "Microsoft.PowerToys" },
    { id: "PowerBI", url: "Microsoft.PowerBI" },
    { id: "ProcessMonitor", url: "Microsoft.Sysinternals.ProcessMonitor" },
    { id: "vcredist", url: "Microsoft.VCRedist.2015+.x64" },
    { id: "WinTerminal", url: "Microsoft.WindowsTerminal" },

    // Media
    { id: "AIMP", url: "AIMP.AIMP" },
    { id: "Audacity", url: "Audacity.Audacity" },
    { id: "Clementine", url: "Clementine.Clementine" },
    { id: "DarkTable", url: "darktable.darktable" },
    { id: "digiKam", url: "KDE.digiKam" },
    { id: "EarTrumpet", url: "File-New-Project.EarTrumpet" },
    { id: "EqualizerAPO", url: "" }, // missing
    { id: "FFmpeg", url: "Gyan.FFmpeg" },
    { id: "foobar2000", url: "PeterPawlowski.foobar2000" },
    { id: "FreeCAD", url: "FreeCAD.FreeCAD" },
    { id: "HandBrake", url: "HandBrake.HandBrake" },
    { id: "ImageGlass", url: "DuongDieuPhap.ImageGlass" },
    { id: "iTunes", url: "Apple.iTunes" },
    { id: "Jellyfin", url: "Jellyfin.Server" },
    { id: "KLite", url: "CodecGuide.K-LiteCodecPack.Basic" },
    { id: "MediaMonkey", url: "Ventis.MediaMonkey.5" },
    { id: "MuseScore", url: "Musescore.MuseScore" },
    { id: "OBS", url: "OBSProject.OBSStudio" },
    { id: "Plex", url: "Plex.Plex" },
    { id: "Spicetify", url: "Spicetify.Spicetify" },
    { id: "Spotify", url: "Spotify.Spotify" },
    { id: "Stremio", url: "Stremio.Stremio" },
    { id: "VLC", url: "VideoLAN.VLC" },
    { id: "VoiceMeeter", url: "VB-Audio.VoiceMeeter" },

    // Communication
    { id: "Discord", url: "Discord.Discord" },
    { id: "Signal", url: "OpenWhisperSystems.Signal" },
    { id: "Skype", url: "Microsoft.Skype" },
    { id: "Slack", url: "SlackTechnologies.Slack" },
    { id: "Teams", url: "Microsoft.Teams" },
    { id: "Telegram", url: "Telegram.TelegramDesktop" },
    { id: "Thunderbird", url: "Mozilla.Thunderbird" },
    { id: "Whatsapp", url: "WhatsApp.WhatsApp" },
    { id: "Zoom", url: "Zoom.Zoom" },
    { id: "Zulip", url: "Zulip.Zulip" },

    // Imaging
    { id: "Blender", url: "BlenderFoundation.Blender" },
    { id: "GIMP", url: "GIMP.GIMP.3" },
    { id: "Greenshot", url: "Greenshot.Greenshot" },
    { id: "inkScape", url: "Inkscape.Inkscape" },
    { id: "KdenLive", url: "KDE.Kdenlive" },
    { id: "Krita", url: "KDE.Krita" },
    { id: "LightShot", url: "Skillbrains.Lightshot" },
    { id: "ShareX", url: "ShareX.ShareX" },

    // Documents
    { id: "AdobeReader", url: "Adobe.Acrobat.Reader.64-bit" },
    { id: "AFFiNE", url: "Toeverything.AFFiNE" },
    { id: "FoxItReader", url: "Foxit.FoxitReader" },
    { id: "Joplin", url: "Joplin.Joplin" },
    { id: "LibreOffice", url: "TheDocumentFoundation.LibreOffice" },
    { id: "LogSeq", url: "Logseq.Logseq" },
    { id: "Obsidian", url: "Obsidian.Obsidian" },
    { id: "OpenOffice", url: "Apache.OpenOffice" },
    { id: "PDF24", url: "geeksoftwareGmbH.PDF24Creator" },
    { id: "simplenote", url: "Automattic.Simplenote" },
    { id: "SumatraPDF", url: "SumatraPDF.SumatraPDF" },

    // Security
    { id: "Avast", url: "" }, // missing
    { id: "AVG", url: "" }, // missing
    { id: "MalwareBytes", url: "Malwarebytes.Malwarebytes" },

    // For Developers
    { id: "Clink", url: "chrisant996.clink" },
    { id: "Cursor", url: "Anysphere.Cursor" },
    { id: "Docker", url: "Docker.DockerDesktop" },
    { id: "Git", url: "Git.Git" },
    { id: "GitHub", url: "GitHub.GitHubDesktop" },
    { id: "GitHubCLI", url: "GitHub.cli" },
    { id: "Go", url: "GoLang.Go" },
    { id: "Godot", url: "GodotEngine.GodotEngine" },
    { id: "Java", url: "Oracle.JavaRuntimeEnvironment" },
    { id: "Neovim", url: "Neovim.Neovim" },
    { id: "NET48", url: "Microsoft.DotNet.Framework.DeveloperPack_4" },
    { id: "NET8", url: "Microsoft.DotNet.DesktopRuntime.8" },
    { id: "NodeJS", url: "OpenJS.NodeJS" },
    { id: "Notepad++", url: "Notepad++.Notepad++" },
    { id: "OhMyPosh", url: "JanDeDobbeleer.OhMyPosh" },
    { id: "Python3", url: "Python.Python.3.10" },
    { id: "Rust", url: "Rustlang.Rustup" },
    { id: "SublimeText", url: "SublimeHQ.SublimeText.3" },
    { id: "VSCode", url: "Microsoft.VisualStudioCode" },
    { id: "VSCodium", url: "VSCodium.VSCodium" },
    { id: "VS", url: "Microsoft.VisualStudio.2022.Community" },
    { id: "WSL2", url: "Microsoft.WSL" },
    { id: "Yarn", url: "Yarn.Yarn" },
  ];

  // Create manualURL array
  if (!window.manualURLs) {
    window.manualURLs = [];
  }

  // Get the checked checkboxes
  function getCheckedUrls() {
    return appListWinget
      .filter((app) => {
        const element = document.getElementById(app.id);
        return element && element.checked;
      })
      .map((app) => app.url);
  }

  // Function to update the command display
  function updateCommandDisplay() {
    const checkedUrls = getCheckedUrls();
    const allUrls = [...checkedUrls, ...window.manualURLs];
    const finalURL = allUrls.join(" ");

    const command =
      allUrls.length > 0
        ? 'taskkill /f /im explorer.exe && start explorer.exe && start cmd /k "' +
          "winget install " +
          finalURL +
          ' --accept-source-agreements --accept-package-agreements --force"'
        : "";

    // Display the final URL in the div
    document.querySelector(".div-install").style.display = allUrls.length > 0 ? "block" : "none";
    document.querySelector(".chocolatey-container").style.display = "none";
    document.querySelector(".winget-container").style.display =
      allUrls.length > 0 ? "block" : "none";

    const commandDisplay = document.querySelector(".commandDisplay");
    commandDisplay.textContent = command;

    const chocorefresh = document.querySelectorAll(".choco-refresh");
    chocorefresh.forEach((div) => {
      div.style.display = "none";
    });

    const installingApps = document.querySelector(".installingApps");
    installingApps.textContent = finalURL;

    const wingetUpgrade = document.getElementById("wingetUpgrade");
    wingetUpgrade.textContent = `powershell.exe -NoProfile -ExecutionPolicy Bypass -Command "$v = winget -v; if ([version]($v.TrimStart('v')) -lt [version]'1.7.0') { Write-Output 'Old winget version detected, upgrading...'; Set-Location $env:USERPROFILE; Invoke-WebRequest -Uri 'https://aka.ms/getwinget' -OutFile 'winget.msixbundle'; Add-AppPackage -ForceApplicationShutdown .\\winget.msixbundle; Remove-Item .\\winget.msixbundle } else { Write-Output 'Winget is already up to date, skipping upgrade.' }"`;

    const manualList = document.getElementById("manualList");
    if (window.manualURLs.length > 0) {
      manualList.innerHTML = "Manual packages added: " + window.manualURLs.join(" | ");
    }
  }

  // Add addButton click listener
  const addButton = document.getElementById("addApp");
  addButton.addEventListener("click", () => {
    const manualInput = document.getElementById("manualInput").value.trim();
    if (manualInput) {
      window.manualURLs.push(manualInput);
      document.getElementById("manualInput").value = ""; // Clear input
      updateCommandDisplay();
    }
  });

  updateCommandDisplay();
}

appsInstallWinget();
appsInstallChocolatey();

const selectedPackageManager = document.getElementById("packageManager");
selectedPackageManager.addEventListener("change", () => {
  if (selectedPackageManager.value === "chocolatey") {
    appsInstallChocolatey();
  } else if (selectedPackageManager.value === "winget") {
    appsInstallWinget();
  }
});

// Set up checkbox event listeners
document.addEventListener("DOMContentLoaded", () => {
  const checkboxes = document.querySelectorAll("[js-target=install]");
  if (selectedPackageManager.value === "chocolatey") {
    checkboxes.forEach((checkbox) => {
      checkbox.addEventListener("change", appsInstallChocolatey);
    });
  } else if (selectedPackageManager.value === "winget") {
    checkboxes.forEach((checkbox) => {
      checkbox.addEventListener("change", appsInstallWinget);
    });
  }
  document.body.addEventListener("change", (event) => {
    if (event.target.matches("[js-target=install]")) {
      if (selectedPackageManager.value === "chocolatey") {
        appsInstallChocolatey();
      } else if (selectedPackageManager.value === "winget") {
        appsInstallWinget();
      }
    }
  });
});
