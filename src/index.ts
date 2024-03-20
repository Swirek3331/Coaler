import {app, BrowserWindow} from "electron";

let mainWindow: BrowserWindow;

app.on("ready", crateWindow);

function crateWindow() :void
{
    mainWindow = new BrowserWindow({
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
        //mainWindow.setMenu(null);
    })
}