const electron = require('electron');
const {app, BrowserWindow} = electron;
const path = require('path');
const url = require('url');

let win;

const createWindow = () => {
  win = new BrowserWindow({
    width: 800,
    height: 600
  });

  const URL = url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  });

  win.loadURL(URL);

  win.on('close', () => {
    win = null;
  });

}

app.on('ready', createWindow);