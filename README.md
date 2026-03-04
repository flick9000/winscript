# WinScript

[![Release](https://img.shields.io/github/v/release/sigtrip/winscript?label=release)](https://github.com/sigtrip/winscript/releases/latest)
[![Downloads](https://img.shields.io/github/downloads/sigtrip/winscript/total?label=downloads)](https://github.com/sigtrip/winscript/releases)

## О проекте
WinScript — универсальный инструмент для настройки, оптимизации и автоматизации Windows. Поддерживает установку приложений, твики, приватность, производительность и многое другое.

## 📦 Установка

- [Скачать последнюю версию (setup.exe)](https://github.com/sigtrip/winscript/releases/latest)
- [Все релизы](https://github.com/sigtrip/winscript/releases)

## 🚀 Быстрый старт
1. Скачайте [setup.exe](https://github.com/sigtrip/winscript/releases/latest) из раздела Assets последнего релиза.
2. Запустите установщик и следуйте инструкциям.
3. После установки откройте WinScript и настройте систему под себя.

## 🛠️ Сборка вручную

### Требования
- Windows 10/11
- NodeJS (LTS)
- Rust & Cargo
- NSIS (установится автоматически)

### Инструкция
```sh
git clone https://github.com/sigtrip/winscript.git
cd winscript/app
npm install
npm run tauri build
```

После сборки:
- Бинарник: `app/src-tauri/target/release/WinScript`
- Установщик: `app/src-tauri/target/release/bundle/nsis/WinScript Setup.exe`

## 🤖 Автоматическая сборка и релизы

Каждый push с тегом `v*` запускает GitHub Actions ([workflow](https://github.com/sigtrip/winscript/blob/main/.github/workflows/release.yml)), который собирает и публикует новый релиз с актуальным setup.exe.

## 📄 Документация
- [Русский README](README.ru.md)
- [Wiki](https://github.com/sigtrip/winscript/wiki)

## 💬 Обратная связь
- [Issues](https://github.com/sigtrip/winscript/issues)
- [Pull Requests](https://github.com/sigtrip/winscript/pulls)

---

**Все ссылки ведут на ваш форк: [sigtrip/winscript](https://github.com/sigtrip/winscript)**




