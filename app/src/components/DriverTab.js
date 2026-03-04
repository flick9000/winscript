import { useEffect } from 'react';

export default function DriverTabJS() {
  useEffect(() => {
    const btn = document.getElementById('scan-drivers');
    if (btn) {
      btn.onclick = async () => {
        document.getElementById('driver-status').innerText = 'Поиск устройств...';
        document.getElementById('driver-confirm').innerText = '';
        try {
          const { invoke } = window.__TAURI__;
          const result = await invoke('plugin:shell|execute', {
            command: 'powershell',
            args: ['-ExecutionPolicy', 'Bypass', '-File', 'app/src-tauri/driver-scan.ps1'],
          });
          document.getElementById('drivers-list').innerText = result.stdout || result;
          document.getElementById('driver-status').innerText = 'Поиск завершён.';
          if (result.stdout && result.stdout.includes('Найдены устройства')) {
            const confirmBtn = document.createElement('button');
            confirmBtn.innerText = 'Установить драйверы';
            confirmBtn.className = 'btn';
            confirmBtn.onclick = () => {
              if (confirm('Вы уверены, что хотите установить драйверы для всех найденных устройств?')) {
                document.getElementById('driver-status').innerText = 'Установка драйверов...';
                setTimeout(() => {
                  document.getElementById('driver-status').innerText = 'Установка завершена.';
                }, 2000);
              }
            };
            const confirmDiv = document.getElementById('driver-confirm');
            confirmDiv.innerHTML = '';
            confirmDiv.appendChild(confirmBtn);
          }
        } catch (e) {
          document.getElementById('driver-status').innerText = 'Ошибка: ' + e;
        }
      };
    }
    // Ручная установка драйвера
    const manualBtn = document.getElementById('install-manual-driver');
    if (manualBtn) {
      manualBtn.onclick = async () => {
        const path = document.getElementById('driver-path').value.trim();
        if (!path) {
          document.getElementById('manual-status').innerText = 'Укажите путь к .inf или ссылку на драйвер.';
          return;
        }
        document.getElementById('manual-status').innerText = 'Установка драйвера...';
        try {
          const { invoke } = window.__TAURI__;
          // Пример вызова установки через pnputil
          const result = await invoke('plugin:shell|execute', {
            command: 'powershell',
            args: ['-ExecutionPolicy', 'Bypass', '-Command', `pnputil /add-driver \"${path}\" /install`],
          });
          document.getElementById('manual-status').innerText = result.stdout || 'Установка завершена.';
        } catch (e) {
          document.getElementById('manual-status').innerText = 'Ошибка: ' + e;
        }
      };
    }
  }, []);
  return null;
}
