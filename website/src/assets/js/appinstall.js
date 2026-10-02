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
    { id: "Edge", url: "microsoft-edge" },
    { id: "Falkon", url: "falkon" },
    { id: "Firefox", url: "firefox" },
    { id: "FirefoxESR", url: "FirefoxESR" },
    { id: "Floorp", url: "floorp" },
    { id: "Helium", url: "helium" },
    { id: "LibreWolf", url: "librewolf" },
    { id: "Opera", url: "opera" },
    { id: "Palemoon", url: "palemoon" },
    { id: "Thorium", url: "thorium" },
    { id: "Tor", url: "tor-browser" },
    { id: "Ungoogled", url: "ungoogled-chromium" },
    { id: "Vivaldi", url: "vivaldi" },
    { id: "Waterfox", url: "waterfox" },
    { id: "ZenBrowser", url: "zen-browser" },

    // Compression
    { id: "7Zip", url: "7zip" },
    { id: "Bandizip", url: "bandizip" },
    { id: "NanaZip", url: "nanazip" },
    { id: "PeaZip", url: "peazip" },
    { id: "WinRAR", url: "winrar" },

    // Gaming
    { id: "Cemu", url: "cemu" },
    { id: "DS4Windows", url: "ds4windows" },
    { id: "EAApp", url: "ea-app" },
    { id: "EpicGames", url: "epicgameslauncher" },
    { id: "FaceIT", url: "faceit" },
    { id: "GeforceNOW", url: "nvidia-geforce-now" },
    { id: "GOGGalaxy", url: "goggalaxy" },
    { id: "Heroic", url: "heroic-games-launcher" },
    { id: "ItchIo", url: "itch" },
    { id: "LGHub", url: "lghub" },
    { id: "Minecraft", url: "minecraft-launcher" },
    { id: "Modrinth", url: "modrinth-app" },
    { id: "Moonlight", url: "moonlight-qt" },
    { id: "Parsec", url: "parsec" },
    { id: "PCSX2", url: "pcsx2" },
    { id: "PlayNite", url: "playnite" },
    { id: "PrismLauncher", url: "prismlauncher" },
    { id: "RetroArch", url: "retroarch" },
    { id: "Steam", url: "steam" },
    { id: "Sunshine", url: "sunshine" },
    { id: "UbisoftConnect", url: "ubisoft-connect" },

    // Utilities
    { id: "1Password", url: "1password" },
    { id: "ABDownloadManager", url: "ab-download-manager" },
    { id: "Afterburner", url: "msiafterburner" },
    { id: "AnyDesk", url: "anydesk" },
    { id: "AutoClicker", url: "autoclicker" },
    { id: "AutoHotkey", url: "autohotkey.install" },
    { id: "BitDefender", url: "bitdefenderavfree" },
    { id: "BitWarden", url: "bitwarden" },
    { id: "BulkCrapUninstaller", url: "bulk-crap-uninstaller" },
    { id: "BulkRename", url: "bulkrenameutility" },
    { id: "CCleaner", url: "ccleaner" },
    { id: "CoreTemp", url: "coretemp" },
    { id: "CPU-Z", url: "cpu-z" },
    { id: "CrystalDiskInfo", url: "crystaldiskinfo" },
    { id: "CrystalDiskMark", url: "crystaldiskmark" },
    { id: "DDU", url: "ddu" },
    { id: "Deskflow", url: "deskflow" },
    { id: "DISMTools", url: "dismtools" },
    { id: "DropBox", url: "dropbox" },
    { id: "EnteAuth", url: "ente-auth" },
    { id: "Etcher", url: "etcher" },
    { id: "Everything", url: "everything" },
    { id: "FileConverter", url: "file-converter" },
    { id: "FilesApp", url: "files" },
    { id: "FlowLauncher", url: "flow-launcher" },
    { id: "Flux", url: "f.lux" },
    { id: "FXSound", url: "fxsound" },
    { id: "GlazeWM", url: "glazewm" },
    { id: "GoogleDrive", url: "googledrive" },
    { id: "GPU-Z", url: "gpu-z" },
    { id: "gsudo", url: "gsudo" },
    { id: "HWInfo", url: "hwinfo" },
    { id: "HWMonitor", url: "hwmonitor" },
    { id: "IDM", url: "internet-download-manager" },
    { id: "ImgBurn", url: "imgburn" },
    { id: "JDownloader", url: "jdownloader" },
    { id: "KeePass", url: "keepass" },
    { id: "KeePassXC", url: "keepassxc" },
    { id: "LocalSend", url: "localsend.install" },
    { id: "MEGASync", url: "megasync" },
    { id: "ModernFlyouts", url: "modernflyouts" },
    { id: "MSEdgeRedirect", url: "msedgeredirect" },
    { id: "NextcloudClient", url: "nextcloud-client" },
    { id: "NTLite", url: "ntlite-free" },
    { id: "OFGB", url: "ofgb" },
    { id: "OpenRGB", url: "openrgb" },
    { id: "PartitionWizard", url: "partitionwizard" },
    { id: "ProcessLasso", url: "plasso" },
    { id: "ProtonAuth", url: "protonauth" },
    { id: "ProtonDrive", url: "protondrive" },
    { id: "ProtonMail", url: "protonmail" },
    { id: "ProtonPass", url: "protonpass" },
    { id: "qBitTorrent", url: "qbittorrent" },
    { id: "QuickLook", url: "quicklook" },
    { id: "Rainmeter", url: "rainmeter" },
    { id: "Recuva", url: "recuva" },
    { id: "Revo", url: "revo-uninstaller" },
    { id: "Rufus", url: "rufus" },
    { id: "RustDesk", url: "rustdesk.install" },
    { id: "SDIO", url: "sdio" },
    { id: "Shell", url: "nilesoft-shell" },
    { id: "SnappyDriver", url: "snappy-driver-installer" },
    { id: "Speccy", url: "speccy" },
    { id: "StartAllBack", url: "startallback" },
    { id: "Syncthing", url: "syncthing" },
    { id: "SyncTrayzor", url: "synctrayzor" },
    { id: "SystemInformer", url: "systeminformer" },
    { id: "TeamViewer", url: "teamviewer" },
    { id: "TotalCommander", url: "totalcommander" },
    { id: "TransluscentTB", url: "translucenttb" },
    { id: "TreeSize", url: "treesizefree" },
    { id: "TwinkleTray", url: "twinkle-tray" },
    { id: "UniGetUI", url: "unigetui" },
    { id: "Ventoy", url: "ventoy" },
    { id: "VirtualBox", url: "virtualbox" },
    { id: "WinDirStat", url: "windirstat" },
    { id: "WindHawk", url: "windhawk" },
    { id: "WizTree", url: "wiztree" },

    // Pro Tools
    { id: "AdvancedIpScanner", url: "advanced-ip-scanner" },
    { id: "AngryIpScanner", url: "angryip" },
    { id: "FileZilla", url: "filezilla" },
    { id: "MobaXterm", url: "mobaxterm" },
    { id: "MullvadVPN", url: "mullvad-app" },
    { id: "NetBird", url: "netbird" },
    { id: "Nmap", url: "nmap" },
    { id: "NordVPN", url: "nordvpn" },
    { id: "OpenVPN", url: "openvpn" },
    { id: "ProtonVPN", url: "protonvpn" },
    { id: "PuTTY", url: "putty" },
    { id: "SimpleWall", url: "simplewall" },
    { id: "Tailscale", url: "tailscale" },
    { id: "Termius", url: "termius" },
    { id: "TightVNC", url: "TightVNC" },
    { id: "WinSCP", url: "winscp" },
    { id: "WireGuard", url: "wireguard" },
    { id: "WireShark", url: "wireshark" },

    // Microsoft Tools
    { id: "Autoruns", url: "autoruns" },
    { id: "NET10Runtime", url: "dotnet-10.0-runtime" },
    { id: "NET6Runtime", url: "dotnet-6.0-runtime" },
    { id: "NET9Runtime", url: "dotnet-9.0-runtime" },
    { id: "Nuget", url: "nuget.commandline" },
    { id: "OneDrive", url: "onedrive" },
    { id: "PowerBI", url: "powerbi" },
    { id: "PowerShell", url: "powershell-core" },
    { id: "PowerToys", url: "powertoys" },
    { id: "ProcessExplorer", url: "procexp" },
    { id: "ProcessMonitor", url: "procmon" },
    { id: "RDCMan", url: "rdcman" },
    { id: "TCPView", url: "tcpview" },
    { id: "vcredist", url: "vcredist140" },
    { id: "vcredist2015", url: "vcredist2015" },
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
    { id: "Flameshot", url: "flameshot" },
    { id: "foobar2000", url: "foobar2000" },
    { id: "FreeCAD", url: "freecad" },
    { id: "HandBrake", url: "handbrake" },
    { id: "Harmonoid", url: "" },
    { id: "ImageGlass", url: "imageglass" },
    { id: "IrfanView", url: "irfanview" },
    { id: "iTunes", url: "itunes" },
    { id: "Jellyfin", url: "jellyfin" },
    { id: "JellyfinMediaPlayer", url: "jellyfin-media-player" },
    { id: "JPEGView", url: "jpegview" },
    { id: "KLite", url: "k-litecodecpackbasic" },
    { id: "KLiteStandard", url: "k-litecodecpack-standard" },
    { id: "Kodi", url: "kodi" },
    { id: "LMMS", url: "lmms" },
    { id: "MediaInfo", url: "mediainfo" },
    { id: "MediaMonkey", url: "mediamonkey" },
    { id: "Mp3tag", url: "mp3tag" },
    { id: "MPCHC", url: "mpc-hc-clsid2" },
    { id: "MuseScore", url: "musescore" },
    { id: "MusicBee", url: "musicbee" },
    { id: "Nomacs", url: "nomacs" },
    { id: "OBS", url: "obs-studio" },
    { id: "OpenShot", url: "openshot" },
    { id: "PaintNET", url: "paint.net" },
    { id: "Plex", url: "plex" },
    { id: "PotPlayer", url: "potplayer" },
    { id: "Reaper", url: "reaper" },
    { id: "ScreenToGif", url: "screentogif" },
    { id: "Shotcut", url: "shotcut" },
    { id: "Spicetify", url: "spicetify-cli" },
    { id: "Spotify", url: "spotify" },
    { id: "Stremio", url: "stremio" },
    { id: "TagScanner", url: "tagscanner" },
    { id: "Tidal", url: "tidal" },
    { id: "VLC", url: "vlc" },
    { id: "VoiceMeeter", url: "voicemeeter" },
    { id: "XnViewMP", url: "xnviewmp" },
    { id: "yt-dlp", url: "yt-dlp" },

    // Communication
    { id: "Beeper", url: "beeper-app" },
    { id: "BetterBird", url: "betterbird" },
    { id: "Chatterino", url: "chatterino" },
    { id: "Discord", url: "discord" },
    { id: "Dorion", url: "dorion" },
    { id: "Element", url: "element-desktop" },
    { id: "eMClient", url: "em-client" },
    { id: "Ferdium", url: "ferdium" },
    { id: "Hexchat", url: "hexchat" },
    { id: "Jami", url: "jami" },
    { id: "Line", url: "line" },
    { id: "Linphone", url: "linphone" },
    { id: "Mumble", url: "mumble" },
    { id: "Pidgin", url: "pidgin" },
    { id: "qTox", url: "qtox" },
    { id: "Signal", url: "signal" },
    { id: "Slack", url: "slack" },
    { id: "Teams", url: "microsoft-teams" },
    { id: "TeamSpeak", url: "teamspeak" },
    { id: "Telegram", url: "telegram" },
    { id: "Thunderbird", url: "thunderbird" },
    { id: "Viber", url: "viber" },
    { id: "Webex", url: "webex" },
    { id: "Zoom", url: "zoom" },
    { id: "Zulip", url: "zulip" },

    // Imaging
    { id: "Blender", url: "blender" },
    { id: "Figma", url: "figma" },
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
    { id: "Anki", url: "anki" },
    { id: "Calibre", url: "calibre" },
    { id: "DrawIO", url: "drawio" },
    { id: "FoxItReader", url: "foxitreader" },
    { id: "Joplin", url: "joplin" },
    { id: "LibreOffice", url: "libreoffice-fresh" },
    { id: "LogSeq", url: "logseq" },
    { id: "NAPS2", url: "naps2" },
    { id: "Notion", url: "notion" },
    { id: "Obsidian", url: "obsidian" },
    { id: "Okular", url: "okular" },
    { id: "OnlyOffice", url: "onlyoffice" },
    { id: "OpenOffice", url: "openoffice" },
    { id: "PDF24", url: "pdf24" },
    { id: "PDFGear", url: "pdfgear" },
    { id: "PDFSam", url: "pdfsam" },
    { id: "PDFXChangeEditor", url: "pdfxchangeeditor" },
    { id: "QOwnNotes", url: "qownnotes" },
    { id: "simplenote", url: "simplenote" },
    { id: "SumatraPDF", url: "sumatrapdf" },
    { id: "WinMerge", url: "winmerge" },
    { id: "Xournal", url: "xournalplusplus" },
    { id: "Zotero", url: "zotero" },

    // Security
    { id: "Avast", url: "avastfreeantivirus" },
    { id: "AVG", url: "avgantivirusfree" },
    { id: "ClamAV", url: "clamav" },
    { id: "Cryptomator", url: "cryptomator" },
    { id: "ESET", url: "eset-nod32-antivirus" },
    { id: "Kaspersky", url: "kav" },
    { id: "MalwareBytes", url: "malwarebytes" },
    { id: "VeraCrypt", url: "veracrypt" },

    // For Developers
    { id: "Aegisub", url: "aegisub" },
    { id: "Alacritty", url: "alacritty" },
    { id: "Anaconda3", url: "anaconda3" },
    { id: "AndroidStudio", url: "androidstudio" },
    { id: "AWSCLI", url: "awscli" },
    { id: "AzureCLI", url: "azure-cli" },
    { id: "Bat", url: "bat" },
    { id: "Bruno", url: "bruno" },
    { id: "Bun", url: "bun" },
    { id: "Claude", url: "claude" },
    { id: "ClaudeCode", url: "claude-code" },
    { id: "Clink", url: "clink-maintained" },
    { id: "CloudflareWarp", url: "warp" },
    { id: "CMake", url: "cmake" },
    { id: "Codex", url: "codex" },
    { id: "Corretto25", url: "corretto25jdk" },
    { id: "Corretto8", url: "corretto8jdk" },
    { id: "Cursor", url: "cursoride" },
    { id: "DBeaver", url: "dbeaver" },
    { id: "Deno", url: "deno" },
    { id: "Docker", url: "docker-desktop" },
    { id: "Fd", url: "fd" },
    { id: "FNM", url: "fnm" },
    { id: "Fzf", url: "fzf" },
    { id: "Git", url: "git" },
    { id: "GitExtensions", url: "gitextensions" },
    { id: "GitHub", url: "github-desktop" },
    { id: "GitHubCLI", url: "gh" },
    { id: "GitKraken", url: "gitkraken" },
    { id: "Go", url: "go" },
    { id: "Godot", url: "godot" },
    { id: "HeidiSQL", url: "heidisql" },
    { id: "Helm", url: "kubernetes-helm" },
    { id: "HugoExtended", url: "hugo-extended" },
    { id: "HxD", url: "HxD" },
    { id: "IntelliJ", url: "intellijidea-community" },
    { id: "Java", url: "javaruntime" },
    { id: "JetBrainsToolbox", url: "jetbrainstoolbox" },
    { id: "Jq", url: "jq" },
    { id: "Kubectl", url: "kubernetes-cli" },
    { id: "Lazygit", url: "lazygit" },
    { id: "LLVM", url: "llvm" },
    { id: "Lua", url: "lua" },
    { id: "Miniconda", url: "miniconda3" },
    { id: "MSYS2", url: "msys2" },
    { id: "Neovim", url: "neovim" },
    { id: "NET48", url: "netfx-4.8" },
    { id: "NET8", url: "dotnet" },
    { id: "NodeJS", url: "nodejs" },
    { id: "NodeJSLTS", url: "nodejs-lts" },
    { id: "Notepad++", url: "notepadplusplus" },
    { id: "OhMyPosh", url: "oh-my-posh" },
    { id: "Ollama", url: "ollama" },
    { id: "Pnpm", url: "pnpm" },
    { id: "PodmanDesktop", url: "podman-desktop" },
    { id: "Postman", url: "postman" },
    { id: "Pulsar", url: "pulsar" },
    { id: "PyCharm", url: "pycharm-community" },
    { id: "Python3", url: "python3" },
    { id: "Ripgrep", url: "ripgrep" },
    { id: "Ruby", url: "ruby" },
    { id: "Rust", url: "rust" },
    { id: "Starship", url: "starship" },
    { id: "SublimeText", url: "sublimetext3" },
    { id: "Temurin21", url: "temurin21" },
    { id: "Terraform", url: "terraform" },
    { id: "UnityHub", url: "unityhub" },
    { id: "UV", url: "uv" },
    { id: "Vagrant", url: "vagrant" },
    { id: "VS2022", url: "visualstudio2022community" },
    { id: "VS2026", url: "visualstudio2026community" },
    { id: "VSCode", url: "vscode" },
    { id: "VSCodium", url: "vscodium" },
    { id: "WezTerm", url: "wezterm" },
    { id: "WSL2", url: "wsl2" },
    { id: "Yarn", url: "yarn" },
    { id: "Zed", url: "zed" },
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
    const finalURL = allUrls
      .filter((url) => url && url.trim() !== "")
      .map((url) => `\\"${url}\\"`)
      .join(", ");
    const refreshEnv =
      '$env:Path = [System.Environment]::GetEnvironmentVariable(\\"Path\\",\\"Machine\\") + \\";\\" + [System.Environment]::GetEnvironmentVariable(\\"Path\\",\\"User\\")';

    const command =
      allUrls.length > 0
        ? `Start-Process powershell.exe -ArgumentList '-NoProfile -NoLogo -NoExit -Command ` +
          `${refreshEnv}; ` +
          `$apps = @(${finalURL}); ` +
          `foreach ($app in $apps) { choco install $app -y --force --ignorepackageexitcodes }'`
        : "";

    // Display the final URL in the div
    document.querySelector(".div-install").style.display = allUrls.length > 0 ? "block" : "none";
    document.querySelector(".winget-container").style.display = "none";
    document.querySelector(".chocolatey-container").style.display =
      allUrls.length > 0 ? "block" : "none";

    const commandDisplay = document.querySelector(".commandDisplay");
    commandDisplay.textContent = command;

    const installingApps = document.querySelector(".installingApps");
    installingApps.textContent = allUrls.join(", ");

    const manualList = document.getElementById("manualList");
    if (window.manualURLs.length > 0) {
      manualList.innerHTML = "Manual packages added: " + window.manualURLs.join(" | ");
    }
  }

  updateCommandDisplay();
}

function appsInstallWinget() {
  // List of apps
  const appListWinget = [
    // Drivers
    { id: "Intel", url: "Intel.IntelDriverAndSupportAssistant" },
    { id: "NVIDIA", url: "TechPowerUp.NVCleanstall" },
    { id: "Ryzen", url: "" },

    // Browsers
    { id: "Brave", url: "Brave.Brave" },
    { id: "Chrome", url: "Google.Chrome" },
    { id: "Chromium", url: "Hibbiki.Chromium" },
    { id: "Edge", url: "Microsoft.Edge" },
    { id: "Falkon", url: "KDE.Falkon" },
    { id: "Firefox", url: "Mozilla.Firefox" },
    { id: "FirefoxESR", url: "Mozilla.Firefox.ESR" },
    { id: "Floorp", url: "Ablaze.Floorp" },
    { id: "Helium", url: "ImputNet.Helium" },
    { id: "LibreWolf", url: "LibreWolf.LibreWolf" },
    { id: "Opera", url: "Opera.Opera" },
    { id: "Palemoon", url: "MoonchildProductions.PaleMoon" },
    { id: "Thorium", url: "Alex313031.Thorium" },
    { id: "Tor", url: "TorProject.TorBrowser" },
    { id: "Ungoogled", url: "eloston.ungoogled-chromium" },
    { id: "Vivaldi", url: "Vivaldi.Vivaldi" },
    { id: "Waterfox", url: "Waterfox.Waterfox" },
    { id: "ZenBrowser", url: "Zen-Team.Zen-Browser" },

    // Compression
    { id: "7Zip", url: "7zip.7zip" },
    { id: "Bandizip", url: "Bandisoft.Bandizip" },
    { id: "NanaZip", url: "M2Team.NanaZip" },
    { id: "PeaZip", url: "Giorgiotani.Peazip" },
    { id: "WinRAR", url: "RARLab.WinRAR" },

    // Gaming
    { id: "Cemu", url: "Cemu.Cemu" },
    { id: "DS4Windows", url: "Ryochan7.DS4Windows" },
    { id: "EAApp", url: "ElectronicArts.EADesktop" },
    { id: "EpicGames", url: "EpicGames.EpicGamesLauncher" },
    { id: "FaceIT", url: "FACEITLTD.FACEITClient" },
    { id: "GeforceNOW", url: "Nvidia.GeForceNow" },
    { id: "GOGGalaxy", url: "GOG.Galaxy" },
    { id: "Heroic", url: "HeroicGamesLauncher.HeroicGamesLauncher" },
    { id: "ItchIo", url: "ItchIo.Itch" },
    { id: "LGHub", url: "Logitech.GHUB" },
    { id: "Minecraft", url: "Mojang.MinecraftLauncher" },
    { id: "Modrinth", url: "Modrinth.ModrinthApp" },
    { id: "Moonlight", url: "MoonlightGameStreamingProject.Moonlight" },
    { id: "Parsec", url: "Parsec.Parsec" },
    { id: "PCSX2", url: "PCSX2Team.PCSX2" },
    { id: "PlayNite", url: "Playnite.Playnite" },
    { id: "PrismLauncher", url: "PrismLauncher.PrismLauncher" },
    { id: "RetroArch", url: "Libretro.RetroArch" },
    { id: "Steam", url: "Valve.Steam" },
    { id: "Sunshine", url: "LizardByte.Sunshine" },
    { id: "UbisoftConnect", url: "Ubisoft.Connect" },

    // Utilities
    { id: "1Password", url: "AgileBits.1Password" },
    { id: "ABDownloadManager", url: "amir1376.ABDownloadManager" },
    { id: "Afterburner", url: "Guru3D.Afterburner" },
    { id: "AnyDesk", url: "AnyDesk.AnyDesk" },
    { id: "AutoClicker", url: "OPAutoClicker.OPAutoClicker" },
    { id: "AutoHotkey", url: "AutoHotkey.AutoHotkey" },
    { id: "BitDefender", url: "Bitdefender.Bitdefender" },
    { id: "BitWarden", url: "Bitwarden.Bitwarden" },
    { id: "BulkCrapUninstaller", url: "Klocman.BulkCrapUninstaller" },
    { id: "BulkRename", url: "TGRMNSoftware.BulkRenameUtility" },
    { id: "CCleaner", url: "Piriform.CCleaner" },
    { id: "CoreTemp", url: "ALCPU.CoreTemp" },
    { id: "CPU-Z", url: "CPUID.CPU-Z" },
    { id: "CrystalDiskInfo", url: "CrystalDewWorld.CrystalDiskInfo" },
    { id: "CrystalDiskMark", url: "CrystalDewWorld.CrystalDiskMark" },
    { id: "DDU", url: "Wagnardsoft.DisplayDriverUninstaller" },
    { id: "Deskflow", url: "Deskflow.Deskflow" },
    { id: "DISMTools", url: "CodingWondersSoftware.DISMTools.Stable" },
    { id: "DropBox", url: "Dropbox.Dropbox" },
    { id: "EnteAuth", url: "ente-io.auth-desktop" },
    { id: "Etcher", url: "Balena.Etcher" },
    { id: "Everything", url: "voidtools.Everything" },
    { id: "FileConverter", url: "AdrienAllard.FileConverter" },
    { id: "FilesApp", url: "FilesCommunity.Files" },
    { id: "FlowLauncher", url: "Flow-Launcher.Flow-Launcher" },
    { id: "Flux", url: "flux.flux" },
    { id: "FXSound", url: "FxSound.FxSound" },
    { id: "GlazeWM", url: "glzr-io.glazewm" },
    { id: "GoogleDrive", url: "Google.GoogleDrive" },
    { id: "GPU-Z", url: "TechPowerUp.GPU-Z" },
    { id: "gsudo", url: "gerardog.gsudo" },
    { id: "HWInfo", url: "REALiX.HWiNFO" },
    { id: "HWMonitor", url: "CPUID.HWMonitor" },
    { id: "IDM", url: "Tonec.InternetDownloadManager" },
    { id: "ImgBurn", url: "LIGHTNINGUK.ImgBurn" },
    { id: "JDownloader", url: "AppWork.JDownloader" },
    { id: "KeePass", url: "DominikReichl.KeePass" },
    { id: "KeePassXC", url: "KeePassXCTeam.KeePassXC" },
    { id: "LocalSend", url: "LocalSend.LocalSend" },
    { id: "MEGASync", url: "Mega.MEGASync" },
    { id: "ModernFlyouts", url: "ModernFlyouts.ModernFlyouts" },
    { id: "MSEdgeRedirect", url: "rcmaehl.MSEdgeRedirect" },
    { id: "NextcloudClient", url: "Nextcloud.NextcloudDesktop" },
    { id: "NTLite", url: "Nlitesoft.NTLite" },
    { id: "OFGB", url: "xM4ddy.OFGB" },
    { id: "OpenRGB", url: "OpenRGB.OpenRGB" },
    { id: "PartitionWizard", url: "MiniTool.PartitionWizard.Free" },
    { id: "ProcessLasso", url: "BitSum.ProcessLasso" },
    { id: "ProtonAuth", url: "Proton.ProtonAuthenticator" },
    { id: "ProtonDrive", url: "Proton.ProtonDrive" },
    { id: "ProtonMail", url: "Proton.ProtonMail" },
    { id: "ProtonPass", url: "Proton.ProtonPass" },
    { id: "qBitTorrent", url: "qBittorrent.qBittorrent" },
    { id: "QuickLook", url: "QL-Win.QuickLook" },
    { id: "Rainmeter", url: "Rainmeter.Rainmeter" },
    { id: "Recuva", url: "Piriform.Recuva" },
    { id: "Revo", url: "RevoUninstaller.RevoUninstaller" },
    { id: "Rufus", url: "Rufus.Rufus" },
    { id: "RustDesk", url: "" },
    { id: "SDIO", url: "GlennDelahoy.SnappyDriverInstallerOrigin" },
    { id: "Shell", url: "Nilesoft.Shell" },
    { id: "SnappyDriver", url: "samlab-ws.SnappyDriverInstaller" },
    { id: "Speccy", url: "Piriform.Speccy" },
    { id: "StartAllBack", url: "StartIsBack.StartAllBack" },
    { id: "Syncthing", url: "Syncthing.Syncthing" },
    { id: "SyncTrayzor", url: "GermanCoding.SyncTrayzor" },
    { id: "SystemInformer", url: "WinsiderSS.SystemInformer" },
    { id: "TeamViewer", url: "TeamViewer.TeamViewer" },
    { id: "TotalCommander", url: "Ghisler.TotalCommander" },
    { id: "TransluscentTB", url: "CharlesMilette.TranslucentTB" },
    { id: "TreeSize", url: "JAMSoftware.TreeSize.Free" },
    { id: "TwinkleTray", url: "xanderfrangos.twinkletray" },
    { id: "UniGetUI", url: "Devolutions.UniGetUI" },
    { id: "Ventoy", url: "Ventoy.Ventoy" },
    { id: "VirtualBox", url: "Oracle.VirtualBox" },
    { id: "WinDirStat", url: "WinDirStat.WinDirStat" },
    { id: "WindHawk", url: "RamenSoftware.Windhawk" },
    { id: "WizTree", url: "AntibodySoftware.WizTree" },

    // Pro Tools
    { id: "AdvancedIpScanner", url: "Famatech.AdvancedIPScanner" },
    { id: "AngryIpScanner", url: "angryziber.AngryIPScanner" },
    { id: "FileZilla", url: "" },
    { id: "MobaXterm", url: "Mobatek.MobaXterm" },
    { id: "MullvadVPN", url: "MullvadVPN.MullvadVPN" },
    { id: "NetBird", url: "Netbird.Netbird" },
    { id: "Nmap", url: "Insecure.Nmap" },
    { id: "NordVPN", url: "NordSecurity.NordVPN" },
    { id: "OpenVPN", url: "OpenVPNTechnologies.OpenVPN" },
    { id: "ProtonVPN", url: "Proton.ProtonVPN" },
    { id: "PuTTY", url: "PuTTY.PuTTY" },
    { id: "SimpleWall", url: "Henry++.simplewall" },
    { id: "Tailscale", url: "Tailscale.Tailscale" },
    { id: "Termius", url: "Termius.Termius" },
    { id: "TightVNC", url: "GlavSoft.TightVNC" },
    { id: "WinSCP", url: "WinSCP.WinSCP" },
    { id: "WireGuard", url: "WireGuard.WireGuard" },
    { id: "WireShark", url: "WiresharkFoundation.Wireshark" },

    // Microsoft Tools
    { id: "Autoruns", url: "Microsoft.Sysinternals.Autoruns" },
    { id: "NET10Runtime", url: "Microsoft.DotNet.DesktopRuntime.10" },
    { id: "NET6Runtime", url: "Microsoft.DotNet.DesktopRuntime.6" },
    { id: "NET9Runtime", url: "Microsoft.DotNet.DesktopRuntime.9" },
    { id: "Nuget", url: "Microsoft.NuGet" },
    { id: "OneDrive", url: "Microsoft.OneDrive" },
    { id: "PowerBI", url: "Microsoft.PowerBI" },
    { id: "PowerShell", url: "Microsoft.PowerShell" },
    { id: "PowerToys", url: "Microsoft.PowerToys" },
    { id: "ProcessExplorer", url: "Microsoft.Sysinternals.ProcessExplorer" },
    { id: "ProcessMonitor", url: "Microsoft.Sysinternals.ProcessMonitor" },
    { id: "RDCMan", url: "Microsoft.Sysinternals.RDCMan" },
    { id: "TCPView", url: "Microsoft.Sysinternals.TCPView" },
    { id: "vcredist", url: "Microsoft.VCRedist.2015+.x64" },
    { id: "vcredist2015", url: "Microsoft.VCRedist.2015+.x86" },
    { id: "WinTerminal", url: "Microsoft.WindowsTerminal" },

    // Media
    { id: "AIMP", url: "AIMP.AIMP" },
    { id: "Audacity", url: "Audacity.Audacity" },
    { id: "Clementine", url: "Clementine.Clementine" },
    { id: "DarkTable", url: "darktable.darktable" },
    { id: "digiKam", url: "KDE.digiKam" },
    { id: "EarTrumpet", url: "File-New-Project.EarTrumpet" },
    { id: "EqualizerAPO", url: "" },
    { id: "FFmpeg", url: "Gyan.FFmpeg" },
    { id: "Flameshot", url: "Flameshot.Flameshot" },
    { id: "foobar2000", url: "PeterPawlowski.foobar2000" },
    { id: "FreeCAD", url: "FreeCAD.FreeCAD" },
    { id: "HandBrake", url: "HandBrake.HandBrake" },
    { id: "Harmonoid", url: "Harmonoid.Harmonoid" },
    { id: "ImageGlass", url: "DuongDieuPhap.ImageGlass" },
    { id: "IrfanView", url: "IrfanSkiljan.IrfanView" },
    { id: "iTunes", url: "Apple.iTunes" },
    { id: "Jellyfin", url: "Jellyfin.Server" },
    { id: "JellyfinMediaPlayer", url: "Jellyfin.JellyfinMediaPlayer" },
    { id: "JPEGView", url: "sylikc.JPEGView" },
    { id: "KLite", url: "CodecGuide.K-LiteCodecPack.Basic" },
    { id: "KLiteStandard", url: "CodecGuide.K-LiteCodecPack.Standard" },
    { id: "Kodi", url: "XBMCFoundation.Kodi" },
    { id: "LMMS", url: "LMMS.LMMS" },
    { id: "MediaInfo", url: "MediaArea.MediaInfo.GUI" },
    { id: "MediaMonkey", url: "VentisMedia.MediaMonkey.5" },
    { id: "Mp3tag", url: "FlorianHeidenreich.Mp3tag" },
    { id: "MPCHC", url: "clsid2.mpc-hc" },
    { id: "MuseScore", url: "Musescore.Musescore" },
    { id: "MusicBee", url: "" },
    { id: "Nomacs", url: "nomacs.nomacs" },
    { id: "OBS", url: "OBSProject.OBSStudio" },
    { id: "OpenShot", url: "OpenShot.OpenShot" },
    { id: "PaintNET", url: "dotPDN.PaintDotNet" },
    { id: "Plex", url: "Plex.Plex" },
    { id: "PotPlayer", url: "Daum.PotPlayer" },
    { id: "Reaper", url: "Cockos.REAPER" },
    { id: "ScreenToGif", url: "NickeManarin.ScreenToGif" },
    { id: "Shotcut", url: "Meltytech.Shotcut" },
    { id: "Spicetify", url: "Spicetify.Spicetify" },
    { id: "Spotify", url: "Spotify.Spotify" },
    { id: "Stremio", url: "Stremio.Stremio" },
    { id: "TagScanner", url: "SergeySerkov.TagScanner" },
    { id: "Tidal", url: "TIDALMusicAS.TIDAL" },
    { id: "VLC", url: "VideoLAN.VLC" },
    { id: "VoiceMeeter", url: "VB-Audio.Voicemeeter" },
    { id: "XnViewMP", url: "XnSoft.XnViewMP" },
    { id: "yt-dlp", url: "yt-dlp.yt-dlp" },

    // Communication
    { id: "Beeper", url: "Beeper.Beeper" },
    { id: "BetterBird", url: "Betterbird.Betterbird" },
    { id: "Chatterino", url: "ChatterinoTeam.Chatterino" },
    { id: "Discord", url: "Discord.Discord" },
    { id: "Dorion", url: "SpikeHD.Dorion" },
    { id: "Element", url: "Element.Element" },
    { id: "eMClient", url: "eMClient.eMClient" },
    { id: "Ferdium", url: "Ferdium.Ferdium" },
    { id: "Hexchat", url: "HexChat.HexChat" },
    { id: "Jami", url: "SFLinux.Jami" },
    { id: "Line", url: "LINE.LINE" },
    { id: "Linphone", url: "BelledonneCommunications.Linphone" },
    { id: "Mumble", url: "Mumble.Mumble.Client" },
    { id: "Pidgin", url: "Pidgin.Pidgin" },
    { id: "qTox", url: "Tox.qTox" },
    { id: "Signal", url: "OpenWhisperSystems.Signal" },
    { id: "Slack", url: "SlackTechnologies.Slack" },
    { id: "Teams", url: "Microsoft.Teams" },
    { id: "TeamSpeak", url: "TeamSpeakSystems.TeamSpeakClient" },
    { id: "Telegram", url: "Telegram.TelegramDesktop" },
    { id: "Thunderbird", url: "Mozilla.Thunderbird" },
    { id: "Viber", url: "Rakuten.Viber" },
    { id: "Webex", url: "Cisco.Webex" },
    { id: "Zoom", url: "Zoom.Zoom" },
    { id: "Zulip", url: "Zulip.Zulip" },

    // Imaging
    { id: "Blender", url: "BlenderFoundation.Blender" },
    { id: "Figma", url: "Figma.Figma" },
    { id: "GIMP", url: "GIMP.GIMP" },
    { id: "Greenshot", url: "Greenshot.Greenshot" },
    { id: "inkScape", url: "Inkscape.Inkscape" },
    { id: "KdenLive", url: "KDE.Kdenlive" },
    { id: "Krita", url: "KDE.Krita" },
    { id: "LightShot", url: "Skillbrains.Lightshot" },
    { id: "ShareX", url: "ShareX.ShareX" },

    // Documents
    { id: "AdobeReader", url: "Adobe.Acrobat.Reader.64-bit" },
    { id: "AFFiNE", url: "ToEverything.AFFiNE" },
    { id: "Anki", url: "Anki.Anki" },
    { id: "Calibre", url: "calibre.calibre" },
    { id: "DrawIO", url: "JGraph.Draw" },
    { id: "FoxItReader", url: "Foxit.FoxitReader" },
    { id: "Joplin", url: "Joplin.Joplin" },
    { id: "LibreOffice", url: "TheDocumentFoundation.LibreOffice" },
    { id: "LogSeq", url: "Logseq.Logseq" },
    { id: "NAPS2", url: "Cyanfish.NAPS2" },
    { id: "Notion", url: "Notion.Notion" },
    { id: "Obsidian", url: "Obsidian.Obsidian" },
    { id: "Okular", url: "KDE.Okular" },
    { id: "OnlyOffice", url: "ONLYOFFICE.DesktopEditors" },
    { id: "OpenOffice", url: "Apache.OpenOffice" },
    { id: "PDF24", url: "geeksoftwareGmbH.PDF24Creator" },
    { id: "PDFGear", url: "PDFgear.PDFgear" },
    { id: "PDFSam", url: "PDFsam.PDFsam" },
    { id: "PDFXChangeEditor", url: "TrackerSoftware.PDF-XChangeEditor" },
    { id: "QOwnNotes", url: "pbek.QOwnNotes" },
    { id: "simplenote", url: "Automattic.Simplenote" },
    { id: "SumatraPDF", url: "SumatraPDF.SumatraPDF" },
    { id: "WinMerge", url: "WinMerge.WinMerge" },
    { id: "Xournal", url: "Xournal++.Xournal++" },
    { id: "Zotero", url: "DigitalScholar.Zotero" },

    // Security
    { id: "Avast", url: "" },
    { id: "AVG", url: "" },
    { id: "ClamAV", url: "Cisco.ClamAV" },
    { id: "Cryptomator", url: "Cryptomator.Cryptomator" },
    { id: "ESET", url: "ESET.Nod32" },
    { id: "Kaspersky", url: "" },
    { id: "MalwareBytes", url: "Malwarebytes.Malwarebytes" },
    { id: "VeraCrypt", url: "IDRIX.VeraCrypt" },

    // For Developers
    { id: "Aegisub", url: "Aegisub.Aegisub" },
    { id: "Alacritty", url: "Alacritty.Alacritty" },
    { id: "Anaconda3", url: "Anaconda.Anaconda3" },
    { id: "AndroidStudio", url: "Google.AndroidStudio" },
    { id: "AWSCLI", url: "Amazon.AWSCLI" },
    { id: "AzureCLI", url: "Microsoft.AzureCLI" },
    { id: "Bat", url: "sharkdp.bat" },
    { id: "Bruno", url: "Bruno.Bruno" },
    { id: "Bun", url: "Oven-sh.Bun" },
    { id: "Claude", url: "Anthropic.Claude" },
    { id: "ClaudeCode", url: "Anthropic.ClaudeCode" },
    { id: "Clink", url: "chrisant996.Clink" },
    { id: "CloudflareWarp", url: "Cloudflare.Warp" },
    { id: "CMake", url: "Kitware.CMake" },
    { id: "Codex", url: "OpenAI.Codex" },
    { id: "Corretto25", url: "Amazon.Corretto.25.JDK" },
    { id: "Corretto8", url: "Amazon.Corretto.8.JDK" },
    { id: "Cursor", url: "Anysphere.Cursor" },
    { id: "DBeaver", url: "DBeaver.DBeaver.Community" },
    { id: "Deno", url: "DenoLand.Deno" },
    { id: "Docker", url: "Docker.DockerDesktop" },
    { id: "Fd", url: "sharkdp.fd" },
    { id: "FNM", url: "Schniz.fnm" },
    { id: "Fzf", url: "junegunn.fzf" },
    { id: "Git", url: "Git.Git" },
    { id: "GitExtensions", url: "GitExtensionsTeam.GitExtensions" },
    { id: "GitHub", url: "GitHub.GitHubDesktop" },
    { id: "GitHubCLI", url: "GitHub.cli" },
    { id: "GitKraken", url: "Axosoft.GitKraken" },
    { id: "Go", url: "GoLang.Go" },
    { id: "Godot", url: "GodotEngine.GodotEngine" },
    { id: "HeidiSQL", url: "HeidiSQL.HeidiSQL" },
    { id: "Helm", url: "Helm.Helm" },
    { id: "HugoExtended", url: "Hugo.Hugo.Extended" },
    { id: "HxD", url: "MHNexus.HxD" },
    { id: "IntelliJ", url: "JetBrains.IntelliJIDEA.Community" },
    { id: "Java", url: "Oracle.JavaRuntimeEnvironment" },
    { id: "JetBrainsToolbox", url: "JetBrains.Toolbox" },
    { id: "Jq", url: "jqlang.jq" },
    { id: "Kubectl", url: "Kubernetes.kubectl" },
    { id: "Lazygit", url: "JesseDuffield.lazygit" },
    { id: "LLVM", url: "LLVM.LLVM" },
    { id: "Lua", url: "rjpcomputing.luaforwindows" },
    { id: "Miniconda", url: "Anaconda.Miniconda3" },
    { id: "MSYS2", url: "MSYS2.MSYS2" },
    { id: "Neovim", url: "Neovim.Neovim" },
    { id: "NET48", url: "Microsoft.DotNet.Framework.DeveloperPack_4" },
    { id: "NET8", url: "Microsoft.DotNet.DesktopRuntime.8" },
    { id: "NodeJS", url: "OpenJS.NodeJS" },
    { id: "NodeJSLTS", url: "OpenJS.NodeJS.LTS" },
    { id: "Notepad++", url: "Notepad++.Notepad++" },
    { id: "OhMyPosh", url: "JanDeDobbeleer.OhMyPosh" },
    { id: "Ollama", url: "Ollama.Ollama" },
    { id: "Pnpm", url: "pnpm.pnpm" },
    { id: "PodmanDesktop", url: "RedHat.Podman-Desktop" },
    { id: "Postman", url: "Postman.Postman" },
    { id: "Pulsar", url: "Pulsar-Edit.Pulsar" },
    { id: "PyCharm", url: "JetBrains.PyCharm.Community" },
    { id: "Python3", url: "Python.Python.3.10" },
    { id: "Ripgrep", url: "BurntSushi.ripgrep.MSVC" },
    { id: "Ruby", url: "RubyInstallerTeam.Ruby.4.0" },
    { id: "Rust", url: "Rustlang.Rustup" },
    { id: "Starship", url: "Starship.Starship" },
    { id: "SublimeText", url: "SublimeHQ.SublimeText.3" },
    { id: "Temurin21", url: "EclipseAdoptium.Temurin.21.JDK" },
    { id: "Terraform", url: "Hashicorp.Terraform" },
    { id: "UnityHub", url: "Unity.UnityHub" },
    { id: "UV", url: "astral-sh.uv" },
    { id: "Vagrant", url: "Hashicorp.Vagrant" },
    { id: "VS2022", url: "Microsoft.VisualStudio.2022.Community" },
    { id: "VS2026", url: "Microsoft.VisualStudio.Community" },
    { id: "VSCode", url: "Microsoft.VisualStudioCode" },
    { id: "VSCodium", url: "VSCodium.VSCodium" },
    { id: "WezTerm", url: "wez.wezterm" },
    { id: "WSL2", url: "Microsoft.WSL" },
    { id: "Yarn", url: "Yarn.Yarn" },
    { id: "Zed", url: "ZedIndustries.Zed" },
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
    const finalURL = allUrls
      .filter((url) => url && url.trim() !== "")
      .map((url) => `\\"${url}\\"`)
      .join(", ");

    const command =
      allUrls.length > 0
        ? `Start-Process powershell.exe -ArgumentList '-NoProfile -NoLogo -NoExit -Command ` +
          `$apps = @(${finalURL}); ` +
          `foreach ($app in $apps) { winget install $app --accept-source-agreements --accept-package-agreements --force }'`
        : "";

    // Display the final URL in the div
    document.querySelector(".div-install").style.display = allUrls.length > 0 ? "block" : "none";
    document.querySelector(".chocolatey-container").style.display = "none";
    document.querySelector(".winget-container").style.display =
      allUrls.length > 0 ? "block" : "none";

    const commandDisplay = document.querySelector(".commandDisplay");
    commandDisplay.textContent = command;

    const installingApps = document.querySelector(".installingApps");
    installingApps.textContent = allUrls.join(", ");

    const wingetUpgrade = document.getElementById("wingetUpgrade");
    wingetUpgrade.textContent = `$v = winget -v; if ([version]($v.TrimStart('v')) -lt [version]'1.7.0') { Write-Output '-- Old Winget version detected, upgrading.'; Set-Location $env:USERPROFILE; Invoke-WebRequest -Uri 'https://aka.ms/getwinget' -OutFile 'winget.msixbundle'; Add-AppPackage -ForceApplicationShutdown .\\winget.msixbundle; Remove-Item .\\winget.msixbundle } else { Write-Output 'Winget is already up to date, skipping upgrade.' }`;

    const manualList = document.getElementById("manualList");
    if (window.manualURLs.length > 0) {
      manualList.innerHTML = "Manual packages added: " + window.manualURLs.join(" | ");
    }
  }

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

// Check manual IDs
function isValidManualId(manualId) {
  return /^[A-Za-z0-9._+\-]+$/.test(manualId);
}

// Manual IDs button listener
const addButton = document.getElementById("addApp");
addButton.addEventListener("click", () => {
  const manualInput = document.getElementById("manualInput").value.trim();
  if (manualInput) {
    if (!isValidManualId(manualInput)) {
      const manualList = document.getElementById("manualList");
      manualList.innerHTML = "Please enter a valid package ID.";
      return;
    }
    window.manualURLs.push(manualInput);
    document.getElementById("manualInput").value = ""; // Clear input
    if (selectedPackageManager.value === "chocolatey") {
      appsInstallChocolatey();
    } else if (selectedPackageManager.value === "winget") {
      appsInstallWinget();
    }
  }
});

// Checkboxes event listeners
const apps = document.querySelectorAll('[js-target="install"]');
document.addEventListener("DOMContentLoaded", () => {
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

apps.forEach((app) => {
  app.addEventListener("change", () => {
    if (selectedPackageManager.value === "chocolatey") {
      appsInstallChocolatey();
    } else if (selectedPackageManager.value === "winget") {
      appsInstallWinget();
    }
  });
});
