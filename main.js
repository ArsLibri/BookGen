const ConfigPath = 'config/config.json';

let Config;
let Win;

const fs = require('fs');
const {
    ipcMain
} = require('electron');

ipcMain.on('setConfig', function(e, arg) {
    Config = arg;
    e.returnValue = '';
});

ipcMain.on('getConfig', function(e, arg) {
    e.returnValue = Config;
});

function getConfig() {
    fs.open(ConfigPath, 'r+', function(err, fd) {
        if (err) switch (err.code) {
            case 'ENOENT':
                console.log('Config file not found. Generating...');
                fs.open(ConfigPath, 'w+', function(err, fd) {
                    if (err) {
                        console.log('Unhandled exception occured');
                    } else {
                        let ConfigData = {};
                        ConfigData['firstUse'] = false;
                        ConfigData['maximized'] = false;
                        ConfigData['width'] = 1024;
                        ConfigData['height'] = 720;
                        ConfigData['theme'] = 'light';
                        fs.writeSync(fd, JSON.stringify(ConfigData), 0, 'utf8');
                        fs.closeSync(fd);
                        console.log('Generated config file at: ' + ConfigPath);
                    }
                });
                break;
            default:
                break;
        }
        fs.readFile(fd, 'utf8', function(err, data) {
            if (err) console.log(err);
            else {
                Config = JSON.parse(data);
                fs.closeSync(fd);
                console.log('Successfully read config');
                createWindow();
            }
        });

    });

}



const {
    app,
    BrowserWindow
} = require('electron');


app.on('ready', function() {
    getConfig();
});
app.on('window-all-closed', () => {

});
app.on('activate', function() {
    if (Win === null) {
        getConfig();
    }
});

app.on('before-quit', function() {
    fs.writeFileSync(ConfigPath, JSON.stringify(Config));
});

function createWindow() {
    console.log('creating');
    if (Config['firstUse']) {
        Win = new BrowserWindow({
            width: Config['width'],
            height: Config['height'],
            frame: false
        });
        Win.loadURL(`file://${__dirname}/app/app.html`);
        Win.on('closed', function() {
            if (process.platform !== 'darwin') {
                app.quit();
            }
        });
    } else {
        Win = new BrowserWindow({
            width: 1024,
            height: 720,
            frame: false
        });
        Win.loadURL(`file://${__dirname}/firstuse/firstuse.html`);
        Win.on('closed', function() {
            if (Config['firstUse']) {
                Win = new BrowserWindow({
                    width: Config['width'],
                    height: Config['height'],
                    frame: false
                });
                Win.loadURL(`file://${__dirname}/app/app.html`);
                if (Config['maximized']) Win.maximize();
                Win.on('closed', function() {
                    if (process.platform !== 'darwin') {
                        app.quit();
                    }
                });
            } else app.quit();
        });
    }
}
