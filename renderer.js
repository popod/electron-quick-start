// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

let electron = require('electron')

let winOptions = {
  width: 800,
  height: 600,
  show: false
}

let win = new electron.remote.BrowserWindow(winOptions)
win.loadURL('file://' + electron.remote.app.getAppPath() + '/print.html')

win.on('closed', () => {
  win = null
})

win.webContents.on('did-finish-load', function () {
  win.webContents.print({}, function (success) {
    if (!success) {
      console.log('error')
    } else {
      console.log('success')
    }
  })
})
