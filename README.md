# WinScript

[![Downloads](https://www.shieldcn.dev/github/downloads/flick9000/winscript.svg?variant=outline&size=sm&color=E0E0E0)](https://github.com/flick9000/winscript/releases)
[![Release](https://www.shieldcn.dev/github/release/flick9000/winscript.svg?variant=outline&size=sm&color=E0E0E0)](https://github.com/flick9000/winscript/releases/latest)
[![GitHub Sponsors](https://www.shieldcn.dev/badge/Sponsor-GitHub-ea4aaa.svg?logo=githubsponsors&variant=outline&size=sm&color=E0E0E0)](https://github.com/sponsors/flick9000)
[![Ko-Fi](https://www.shieldcn.dev/badge/Ko--fi-sponsor-FF5E5B.svg?logo=kofi&variant=outline&size=sm&color=E0E0E0)](https://ko-fi.com/flick9000)
[![Discussions](https://shieldcn.dev/badge/GitHub-Discussions.svg?variant=outline&logo=github&color=E0E0E0)](https://github.com/flick9000/winscript/discussions)

WinScript is a lightweight and easy to use tool designed to improve and customize your Windows experience. Easily remove bloatware, disable telemetry, improve Windows performance, bulk install your favorite apps, and more.
<br>

![App Screenshot](/website/public/winscript.webp)

## Features

### 🧹 Debloat

Remove pre-installed bloatware and unnecessary components from Windows. Uninstall Microsoft Store, OneDrive, Copilot, and Edge; disable Widgets, Recall, and Consumer Features; and strip out anything else you don't need.

### 🔒 Privacy

Take back control of your data. Block app access to sensitive permissions, disable background syncing of themes and passwords, and stop Microsoft's telemetry across Windows, Office, Search, and more. Also covers third-party data collection from apps like Adobe, VS Code, and Nvidia.

### ⚡ Performance

You can enable the Ultimate Performance plan, reduce mouse input delays, disable Superfetch and Storage Sense, tune Windows Defender's CPU usage, and adjust startup services among many other tweaks.

### 📦 App Installer

The Browse Apps section makes it easy to bulk install all your essential software in just a few clicks. Choose from a list of popular apps, browsers, utilities, dev tools, media players, and more, and WinScript will generate a script to install using your preferred package manager: Chocolatey or Winget.

### 💿 Unattended Setup

Create a customized _autounattend.xml_ file to automate Windows installations from start to finish. Bypass Windows 11 hardware requirements, create local accounts, skip unnecessary OOBE prompts and updates, and automatically run your WinScript configuration after setup completes.

## Usage

🖥️ **Run directly**:

```ps1
irm "https://winscript.cc/irm" | iex
```

🖥️ **Install via Winget**:

```ps1
winget install winscript
```

⚙️ **Import a configuration file**:

Use the -i flag to import a configuration file when launching the app.

```ps1
.\winscript.exe -i "C:\path\to\config.json"
```

## Support

### 👷 Contributing

Contributions are welcome! Fork the repository and create a pull request with your changes.

### ⭐ Star

Feel free to leave a star and help the project reach more people!

### ☕ Donate

If you find this project helpful, consider supporting it by [buying me a coffee!](https://ko-fi.com/flick9000)

## Contact

📧 Have a question or want to get in touch? Reach out at contact@winscript.cc

## License

📒 This project is licensed under the GPL v3 License. See the [LICENSE](LICENSE) file for more details.
