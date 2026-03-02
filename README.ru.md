# WinScript

English version: [README.md](README.md)

✅ Перевод интерфейса на русский уже внедрён.

📥 Скачать релиз: [v2.0.3](https://github.com/sigtrip/winscript/releases/tag/v2.0.3)

⬇️ Прямая ссылка на установщик (setup.exe): [WinScript_2.0.3_x64-setup.exe](https://github.com/sigtrip/winscript/releases/download/v2.0.3/WinScript_2.0.3_x64-setup.exe)

[![Downloads](https://img.shields.io/github/downloads/flick9000/winscript/total?style=for-the-badge)](https://github.com/flick9000/winscript/releases)
[![Release](https://img.shields.io/github/v/release/flick9000/winscript?style=for-the-badge&label=Latest%20release)](https://github.com/flick9000/winscript/releases/latest)
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

Вклады приветствуются! Сделайте форк репозитория и откройте pull request со своими изменениями.

1. Сделайте fork репозитория
2. Создайте feature-ветку
3. Закоммитьте изменения
4. Отправьте изменения в ветку
5. Создайте Pull Request

### ⭐ Star

Если проект полезен — поставьте звезду, это помогает ему расти.

### ☕ Донат

Если проект вам помог, можете поддержать разработку: [buying me a coffee!](https://ko-fi.com/flick9000)

## Лицензия

📒 Проект распространяется по лицензии GPL v3. Подробности в файле [LICENSE](LICENSE).
