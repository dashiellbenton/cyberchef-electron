const { app, BrowserWindow } = require('electron');
const path = require('path');

let mainWindow;

app.whenReady().then(() => {
  mainWindow = new BrowserWindow({
    width: 1920,
    height: 1080,
    webPreferences: {
      nodeIntegration: true
    }
  });

  mainWindow.setMenuBarVisibility(false);


  mainWindow.loadFile(path.join(__dirname, 'CyberChef.html'));

  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
  });
});
