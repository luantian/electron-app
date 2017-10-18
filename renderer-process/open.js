const click = document.querySelector('#clickMe');
const path = require('path');
const electron = require('electron');
const BrowserWindow = require('electron').remote.BrowserWindow;

let win;

click.onclick = () => {
  // window.open('http://www.baidu.com');
  win = new BrowserWindow({
    width: 800,
    height: 600,
    frame: true,
    // transparent: true,
    // backgroundColor: '#ccc',
    fullscreen: false,
    fullscreenable: false
  });

  win.on('close', () => {
    win = null;
  });

  win.loadURL(path.join('file:', __dirname, '../model.html'));

  console.dir(win);

}