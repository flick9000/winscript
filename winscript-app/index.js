// Modules to control application life and create native browser window
const { app, BrowserWindow, Menu } = require('electron')
const path = require('node:path')
const os = require('os');

const si = require('systeminformation');

si.graphics()
  .then(data => console.log(data))
  .catch(error => console.error(error));

let mainWindow;

function isWindows11() {
  const release = os.release(); // Example: '10.0.22000' for Windows 11
  const [major, minor, build] = release.split('.').map(Number);
  return process.platform === 'win32' && major === 10 && build >= 22621; // Windows 11 starts from build 22000
}

function createWindow () {
  const isWin11 = isWindows11();
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    icon: path.join(__dirname, 'icons\\favicon.ico'),
    width: 1200,
    height: 800,
    minWidth: 1024,
    minHeight: 776,
    backgroundMaterial: isWin11 ? 'mica' : undefined,
    autoHideMenuBar: true,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true,
      contextIsolation: false
    }
    });
    
  // and load the index.html of the app.
  mainWindow.loadFile('index.html', { query: { isWin11 } });

  mainWindow.minimize();
  mainWindow.restore();

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()

}



// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow()

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

try {
  require('electron-reloader')(module)
} catch (_) {}

