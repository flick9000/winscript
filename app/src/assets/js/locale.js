const STORAGE_KEY = "winscript.lang";
const DEFAULT_LANG = "ru";

const TRANSLATIONS = {
  ru: {
    WinScript: "WinScript",
    Language: "Язык",
    "Uncheck All": "Снять все",
    Import: "Импорт",
    Export: "Экспорт",
    Presets: "Пресеты",
    "Basic Preset": "Базовый пресет",
    "Strict Preset": "Строгий пресет",
    "Extreme Preset": "Экстремальный пресет",
    Apply: "Применить",
    Download: "Скачать",
    Run: "Запустить",
    "Copy to Clipboard": "Копировать в буфер обмена",
    Copy: "Копировать",
    "Add App": "Добавить приложение",
    "Package Manager": "Менеджер пакетов",
    Drivers: "Драйверы",
    Browsers: "Браузеры",
    Compression: "Архиваторы",
    Utilities: "Утилиты",
    "Pro Tools": "Проф. инструменты",
    "Microsoft Tools": "Инструменты Microsoft",
    Multimedia: "Мультимедиа",
    Communication: "Коммуникация",
    Imaging: "Графика",
    Documents: "Документы",
    Security: "Безопасность",
    "For Developers": "Для разработчиков",
    Shortcuts: "Ярлыки",
    "Windows Settings": "Параметры Windows",
    "Device Manager": "Диспетчер устройств",
    "Control Panel": "Панель управления",
    "Virtual Memory": "Виртуальная память",
    "Visual Effects": "Визуальные эффекты",
    MSConfig: "MSConfig",
    Tools: "Инструменты",
    Debloat: "Деблот",
    Privacy: "Конфиденциальность",
    Telemetry: "Телеметрия",
    Gaming: "Игры",
    Performance: "Производительность",
    Miscellanous: "Разное",
    "Browse Apps": "Приложения",
    "Run Script": "Запустить скрипт",
    "Download Script": "Скачать скрипт",
    "Clean-up": "Очистка",
    Repair: "Восстановление",
    "Windows Apps": "Приложения Windows",
    "Windows Features": "Функции Windows",
    "Windows AI": "ИИ Windows",
    "Disable App Access": "Отключить доступ приложений",
    "Disable 3rd-Party Telemetry": "Отключить телеметрию сторонних программ",
    "Manage Windows Update": "Управление обновлениями Windows",
    "Set as DNS": "Установить DNS",
    "Choose Power Plan": "Выбрать план питания",
    "Set Services to Manual": "Перевести службы в ручной режим",
    "Default Settings": "Настройки по умолчанию",
    "Security Updates": "Обновления безопасности",
    "Disable Updates": "Отключить обновления",
    Balanced: "Сбалансированный",
    "High Performance": "Высокая производительность",
    "Ultimate Performance": "Максимальная производительность",
    "Google DNS": "Google DNS",
    "Cloudflare DNS": "Cloudflare DNS",
    Quad9: "Quad9",
    OpenDNS: "OpenDNS",
    AdGuard: "AdGuard",
    "Search an app": "Поиск приложения",
    "Enter package id": "Введите ID пакета",
    "Manual packages added:": "Добавленные вручную пакеты:",
    "Shortcuts to various system settings and tools.":
      "Ярлыки к различным системным настройкам и инструментам.",
    "Free up disk space by cleaning up temporary files.":
      "Освобождает место на диске, удаляя временные файлы.",
    "Verify system files integrity and fix corrupt files.":
      "Проверяет целостность системных файлов и исправляет повреждения.",
    "Creates a restore point before applying the scripts.":
      "Создает точку восстановления перед применением скриптов.",
    "Clears Chrome, Edge, Brave and Firefox history.":
      "Очищает историю Chrome, Edge, Brave и Firefox.",
    "Resets network IP address and cache.": "Сбрасывает сетевой IP-адрес и кэш.",
    "Runs Microsoft Activation Scripts.": "Запускает Microsoft Activation Scripts.",
    "Uninstall pre-installed apps.": "Удаляет предустановленные приложения.",
    "Disable pre-installed features.": "Отключает предустановленные функции.",
    "Disable Windows AI features.": "Отключает функции Windows AI.",
    "You will not be able to uninstall apps from the Microsoft Store.":
      "После этого вы не сможете удалять приложения из Microsoft Store.",
    "Disables automatic updates for Microsoft Store apps.":
      "Отключает автоматические обновления приложений Microsoft Store.",
    "Be sure to backup your files before removing it.":
      "Перед удалением обязательно сделайте резервную копию файлов.",
    "Disables telemetry and annoyances in Edge.": "Отключает телеметрию и лишние функции в Edge.",
    "Uninstalls the Edge Chromium browser.": "Удаляет браузер Edge Chromium.",
    "Removes the Web Experience package.": "Удаляет пакет Web Experience.",
    "Disables taskbar widgets such as Task View, Weather etc.":
      "Отключает виджеты панели задач, такие как Task View, Погода и др.",
    "Limit app access to data, files and system.":
      "Ограничивает доступ приложений к данным, файлам и системе.",
    "Extends Windows Update pause limit to 20 years.":
      "Продлевает лимит паузы обновлений Windows до 20 лет.",
    "Disables sync of settings across Windows devices.":
      "Отключает синхронизацию настроек между устройствами Windows.",
    "Delets recent clipboard, searches and run history.":
      "Удаляет недавнюю историю буфера обмена, поиска и команды Выполнить.",
    "Disables the notifications center in the taskbar.":
      "Отключает центр уведомлений на панели задач.",
    "Stops automatic map downloads in background.":
      "Останавливает автоматическую загрузку карт в фоне.",
    "Removes the default0 user created at the OOBE stage.":
      "Удаляет пользователя default0, созданного на этапе OOBE.",
    "Choose what data is sent to Microsoft.": "Выберите, какие данные отправляются в Microsoft.",
    "Choose what data is sent to 3rd-party software.":
      "Выберите, какие данные отправляются стороннему ПО.",
    "Starts services only when they are needed.": "Запускает службы только когда они нужны.",
    "May improve performance at the cost of aesthetics.":
      "Может улучшить производительность ценой визуальных эффектов.",
    "Disables Hardware-Accelerated GPU Scheduling.":
      "Отключает аппаратное планирование GPU (HAGS).",
    "Disables the 400ms menu show and hover delay.":
      "Отключает задержку показа и наведения меню в 400 мс.",
    "Limits Defender maximum CPU usage at 25%.":
      "Ограничивает максимальное использование CPU Защитником до 25%.",
    "May improve performance at the cost of security.":
      "Может повысить производительность ценой безопасности.",
    "Improves performance at the cost of app startup time.":
      "Повышает производительность ценой времени запуска приложений.",
    "Automatically deletes temporary files.": "Автоматически удаляет временные файлы.",
    "Drive indexing will stop working.": "Индексация диска перестанет работать.",
    "Not recommended on laptops.": "Не рекомендуется на ноутбуках.",
    "Review [ALL] the scripts one by one before executing it.":
      "Проверьте [ВСЕ] скрипты по одному перед запуском.",
    "You can find a table comparing the presets here.":
      "Сравнительную таблицу пресетов можно найти здесь.",
    "Selecting a preset will override your current settings.":
      "Выбор пресета перезапишет текущие настройки.",
    "Reccomended, good balance beetween privacy/performance and functionality.":
      "Рекомендуется: хороший баланс между конфиденциальностью/производительностью и функциональностью.",
    "Heavy focus on privacy and performance, it disables some non-essential features.":
      "Сильный акцент на конфиденциальности и производительности, отключает часть необязательных функций.",
    "Not reccomended, use only if you know what you're doing.":
      "Не рекомендуется, используйте только если точно понимаете последствия.",
    On: "Вкл",
    Off: "Выкл",
    Open: "Открыть",
    "Update Available": "Доступно обновление",
    Update: "Обновить",
    Later: "Позже",
    "Go to GitHub": "Перейти на GitHub",
    "An update is available. Do you want to update?": "Доступно обновление. Хотите обновить?",
    "Restore Point": "Точка восстановления",
    "Do you want to create a restore point?": "Создать точку восстановления?",
  },
};

const ACTION_TRANSLATIONS = {
  Install: "Установить",
  Disable: "Отключить",
  Remove: "Удалить",
  Run: "Запустить",
  Set: "Установить",
  Enable: "Включить",
  Move: "Переместить",
  Limit: "Ограничить",
  Manage: "Управлять",
  Choose: "Выбрать",
  Extend: "Продлить",
  Block: "Блокировать",
};

const FRAGMENT_TRANSLATIONS = {
  "App Access to": "доступ приложений к",
  "your Contacts": "контактам",
  "your Call History": "журналу вызовов",
  "your Messages": "сообщениям",
  Location: "геопозиции",
  Camera: "камере",
  Microphone: "микрофону",
  "File System": "файловой системе",
  "Account Information": "данным учетной записи",
  Notifications: "уведомлениям",
  Email: "почте",
  Tasks: "задачам",
  "Diagnostic Data": "диагностическим данным",
  "Voice Activation": "голосовой активации",
  Phone: "телефону",
  "Trusted Devices": "доверенным устройствам",
  Calendar: "календарю",
  "Motion Data": "данным движения",
  Radios: "радиомодулям",
  Recordings: "записям",
  "Screenshot Borders": "границам скриншотов",
  "AI Generation": "генерации ИИ",
  "Windows Telemetry": "телеметрию Windows",
  "Windows Update Telemetry": "телеметрию обновлений Windows",
  "Windows Search Telemetry": "телеметрию поиска Windows",
  "Office Telemetry": "телеметрию Office",
  "Nvidia Telemetry": "телеметрию Nvidia",
  "VS Code Telemetry": "телеметрию VS Code",
  "Powershell Telemetry": "телеметрию PowerShell",
  "Media Player": "медиаплеер",
  Recall: "Recall",
  Copilot: "Copilot",
};

function translateFragment(fragment) {
  let result = fragment;

  Object.keys(FRAGMENT_TRANSLATIONS)
    .sort((first, second) => second.length - first.length)
    .forEach((key) => {
      result = result.replaceAll(key, FRAGMENT_TRANSLATIONS[key]);
    });

  return result;
}

function getStoredLanguage() {
  try {
    const value = localStorage.getItem(STORAGE_KEY);
    return value === "ru" || value === "en" ? value : DEFAULT_LANG;
  } catch {
    return DEFAULT_LANG;
  }
}

function setStoredLanguage(lang) {
  try {
    localStorage.setItem(STORAGE_KEY, lang);
  } catch {
    return;
  }
}

function translateValue(text, lang) {
  const normalizedText = text.replace(/\s+/g, " ").trim();

  if (lang === "en") {
    return normalizedText;
  }

  const direct = TRANSLATIONS[lang]?.[normalizedText];
  if (direct) {
    return direct;
  }

  const actionMatch = normalizedText.match(
    /^(Install|Disable|Remove|Run|Set|Enable|Move|Limit|Manage|Choose|Extend|Block)\s+(.+)$/,
  );

  if (actionMatch) {
    const [, action, rest] = actionMatch;
    const translatedAction = ACTION_TRANSLATIONS[action];
    return `${translatedAction} ${translateFragment(rest)}`;
  }

  if (normalizedText.startsWith("Disables ")) {
    return `Отключает ${translateFragment(normalizedText.slice(9))}`;
  }

  if (normalizedText.startsWith("Uninstalls ")) {
    return `Удаляет ${translateFragment(normalizedText.slice(11))}`;
  }

  if (normalizedText.startsWith("Removes ")) {
    return `Удаляет ${translateFragment(normalizedText.slice(8))}`;
  }

  if (normalizedText.startsWith("Creates ")) {
    return `Создает ${translateFragment(normalizedText.slice(8))}`;
  }

  return translateFragment(normalizedText);
}

function applyTextNodeTranslation(node, lang) {
  if (!node || !node.nodeValue || !node.nodeValue.trim()) {
    return;
  }

  const parent = node.parentElement;
  if (!parent) {
    return;
  }

  if (parent.closest("pre, code, script, style, textarea, [data-no-i18n], #languageSelect")) {
    return;
  }

  if (typeof node.__winscriptOriginal !== "string") {
    node.__winscriptOriginal = node.nodeValue;
  }

  const original = node.__winscriptOriginal;
  const trimmed = original.replace(/\s+/g, " ").trim();
  const translated = translateValue(trimmed, lang);

  if (trimmed === translated) {
    node.nodeValue = original;
    return;
  }

  const leading = original.match(/^\s*/)?.[0] ?? "";
  const trailing = original.match(/\s*$/)?.[0] ?? "";
  node.nodeValue = `${leading}${translated}${trailing}`;
}

function applyAttributeTranslation(selector, attrName, dataKey, lang) {
  document.querySelectorAll(selector).forEach((element) => {
    if (!(element instanceof HTMLElement)) {
      return;
    }

    if (!element.dataset[dataKey]) {
      element.dataset[dataKey] = element.getAttribute(attrName) || "";
    }

    const original = element.dataset[dataKey] || "";
    if (!original) {
      return;
    }

    const translated = translateValue(original, lang);
    element.setAttribute(attrName, translated);
  });
}

function applyTranslations(lang) {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  let node = walker.nextNode();

  while (node) {
    applyTextNodeTranslation(node, lang);
    node = walker.nextNode();
  }

  applyAttributeTranslation("[placeholder]", "placeholder", "winscriptPlaceholder", lang);
  applyAttributeTranslation("[title]", "title", "winscriptTitle", lang);
}

function updateHeaderFromActiveTab() {
  const header = document.getElementById("content-header");
  const activeTab = document.querySelector(".sidebar-entry.active h1");

  if (header && activeTab?.textContent?.trim()) {
    header.textContent = activeTab.textContent.trim();
  }
}

function setLanguage(lang) {
  const safeLang = lang === "ru" ? "ru" : "en";
  setStoredLanguage(safeLang);

  document.documentElement.setAttribute("lang", safeLang);

  const selector = document.getElementById("languageSelect");
  if (selector) {
    selector.value = safeLang;
  }

  applyTranslations(safeLang);
  updateHeaderFromActiveTab();

  window.dispatchEvent(new CustomEvent("winscript:languagechange", { detail: { lang: safeLang } }));
}

function getLanguage() {
  return getStoredLanguage();
}

function t(key) {
  return translateValue(key, getLanguage());
}

function initLanguageSelector() {
  const selector = document.getElementById("languageSelect");
  if (!selector) {
    return;
  }

  selector.value = getLanguage();
  selector.addEventListener("change", (event) => {
    setLanguage(event.target.value);
  });
}

window.i18n = {
  t,
  getLanguage,
  setLanguage,
  applyTranslations: () => applyTranslations(getLanguage()),
};

document.addEventListener("DOMContentLoaded", () => {
  initLanguageSelector();
  setLanguage(getLanguage());
});
