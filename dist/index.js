"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
let mainWindow;
electron_1.app.on("ready", crateWindow);
function crateWindow() {
    mainWindow = new electron_1.BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: __dirname + "/preload.js"
        },
        show: false,
        resizable: true,
        fullscreenable: true,
    });
    mainWindow.loadFile(__dirname + "/../html/index.html");
    mainWindow.on("ready-to-show", () => {
        mainWindow.show();
        mainWindow.maximize();
    });
}
