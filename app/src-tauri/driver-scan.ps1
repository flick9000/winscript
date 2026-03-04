# Автопоиск устройств без драйверов
$devices = Get-WmiObject Win32_PnPEntity | Where-Object { $_.ConfigManagerErrorCode -ne 0 }

if ($devices.Count -eq 0) {
    Write-Host "Все устройства имеют драйверы." -ForegroundColor Green
} else {
    Write-Host "Найдены устройства без драйверов:" -ForegroundColor Yellow
    foreach ($dev in $devices) {
        Write-Host "- $($dev.Name) ($($dev.DeviceID))" -ForegroundColor Red
    }
}

# Для установки драйверов можно добавить вызов pnputil или сторонних утилит
# Пример:
# pnputil /scan-devices
# pnputil /add-driver "путь_к_inf" /install
