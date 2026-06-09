# WinScript

[![Downloads](https://img.shields.io/github/downloads/flick9000/winscript/total?style=for-the-badge)](https://github.com/flick9000/winscript/releases)
[![Release](https://img.shields.io/github/v/release/flick9000/winscript?style=for-the-badge&label=Latest%20release)](https://github.com/flick9000/winscript/releases/latest)
[![Discussions](https://img.shields.io/badge/Join-the%20Discussion-2D9F2D?style=for-the-badge&logo=github&logoColor=white)](https://github.com/flick9000/winscript/discussions)
[![Ko-Fi](https://shields.io/badge/ko--fi-Donate-13c3ff?logo=kofi&style=for-the-badge)](https://ko-fi.com/flick9000)

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
