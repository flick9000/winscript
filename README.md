# WinScript

English version: [README.md](README.md)

✅ Перевод интерфейса на русский уже внедрён.

📥 Скачать релиз: [Последний релиз](https://github.com/flick9000/winscript/releases/latest)

⬇️ Прямая ссылка на установщик (setup.exe): [winscript-installer.exe](https://github.com/flick9000/winscript/releases/latest/download/winscript-installer.exe)

[![Downloads](https://img.shields.io/github/downloads/flick9000/winscript/total?style=for-the-badge)](https://github.com/flick9000/winscript/releases/latest)
[![Release](https://img.shields.io/github/v/release/flick9000/winscript?style=for-the-badge&label=%D0%9F%D0%BE%D1%81%D0%BB%D0%B5%D0%B4%D0%BD%D0%B8%D0%B9%20%D1%80%D0%B5%D0%BB%D0%B8%D0%B7)](https://github.com/flick9000/winscript/releases/latest)
[![Discussions](https://img.shields.io/badge/Join-the%20Discussion-2D9F2D?style=for-the-badge&logo=github&logoColor=white)](https://github.com/flick9000/winscript/discussions)
[![Ko-Fi](https://shields.io/badge/ko--fi-Donate-13c3ff?logo=kofi&style=for-the-badge)](https://ko-fi.com/flick9000)

WinScript — это мощный, простой в использовании и лёгкий open-source инструмент для улучшения и настройки Windows. Он включает функции деблота, повышения приватности, оптимизации производительности и быстрой установки приложений.
<br>

![App Screenshot](/website/public/winscript.webp)

## Возможности

### 🧹 Debloat
WinScript позволяет удалить предустановленный bloatware и ненужные компоненты Windows. Можно удалить Microsoft Store, OneDrive, Copilot, выполнить debloat или удалить Microsoft Edge, отключить Widgets и Taskbar Widgets, отключить функции Windows (например, Recall или Consumer Features) и многое другое.

### 🔒 Приватность
Можно отключить доступ приложений к чувствительным данным, запретить фоновую синхронизацию тем и паролей, а также отключить отслеживание активности (история действий, запись экрана, геолокационные сервисы). В разделе Telemetry можно отключить сбор данных Microsoft в Windows, Office, обновлениях, поиске и feedback. Также можно отключить сбор данных сторонними приложениями (Adobe, VS Code, Google, Nvidia и др.), облачное распознавание речи, DRM-соединения, биометрию и многое другое.

### ⚡ Производительность
Можно включить план питания Ultimate Performance, перевести фоновые службы в ручной запуск, снизить задержки ввода мыши и отключить функции вроде Superfetch, HAGS, Storage Sense, индексации Windows Search и Hibernation. Также доступны дополнительные настройки безопасности в пользу производительности: ограничение CPU для Windows Defender, отключение Core Isolation и т.д.

### 📦 Установщик приложений
Раздел Browse Apps в WinScript позволяет массово установить нужный набор ПО в несколько кликов. Выберите приложения из списка (браузеры, утилиты, dev-инструменты, медиаплееры и т.д.), и WinScript сгенерирует скрипт установки через выбранный пакетный менеджер: Chocolatey или Winget.

## Использование

> [!Warning]
> WinScript должен запускаться от имени администратора для корректной работы.

🖥️ **Команда запуска**:

```
irm "https://winscript.cc/irm" | iex
```

🖥️ **Установка через Winget**:

```
winget install winscript
```

## Автоматическая установка Chocolatey

Если у вас не установлен Chocolatey, выполните в PowerShell от имени администратора:

```
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
```

После установки закройте и откройте новое окно PowerShell, затем проверьте:
```
choco --version
```

Если команда не работает, добавьте `C:\ProgramData\chocolatey\bin` в переменную среды PATH вручную.

## Сборка

### 📋 Требования

- NodeJS (LTS)
```
winget install --id OpenJS.NodeJS.LTS
```

- Rust & Cargo
```
winget install --id Rustlang.Rustup
```

### 🛠️ Как собрать

- Клонируйте репозиторий
```
git clone https://github.com/flick9000/winscript.git
cd winscript/app
```

- Установите зависимости
```
npm install
```

- Соберите приложение
```
npm run tauri build
```

После сборки исполняемые файлы будут находиться в каталоге `app/src-tauri/target/release`.

## Поддержка

### 👷 Contributing

Мы приветствуем вклад сообщества! Независимо от того, исправляете ли вы ошибки, улучшаете документацию или добавляете новые функции, вот как вы можете помочь:

- Нашли ошибку? [Сообщите о проблеме](https://github.com/flick9000/winscript/issues).
- Есть идея для функционала? [Начните обсуждение](https://github.com/flick9000/winscript/discussions).
- Хотите внести свой вклад в разработку кода? Ознакомьтесь с нашим руководством в файле [CONTRIBUTING.md](CONTRIBUTING.md).
- Хотите улучшить документацию? Запросы на изменение документации (PR) всегда приветствуются.

Перед отправкой запроса на слияние, пожалуйста, проверьте существующие проблемы и запросы на слияние, чтобы избежать дубликатов.

Наша цель — оперативно рассматривать все внесённые изменения и предоставлять конструктивную обратную связь, чтобы помочь в их интеграции.

### ⭐ Star

Если проект полезен — поставьте звезду, это помогает ему расти.

### ☕ Донат

Если проект вам помог, можете поддержать разработку: [buying me a coffee!](https://ko-fi.com/flick9000)

## Лицензия

📒 Проект распространяется по лицензии GPL v3. Подробности в файле [LICENSE].




