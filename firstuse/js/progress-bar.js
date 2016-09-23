var Steps = [90, 63.32, 36.66, 10];
var ProgressLine;

var Path;
var Theme;

function InitDots() {
    ProgressLine = document.getElementById('progress-bar-line');
    document.getElementById('hello-button').addEventListener('click', function() {
        GoToDot(2);
    });
    document.getElementById('working-directory-next').addEventListener('click', function() {
        if (this.getAttribute('enabled') === 'false') return;
        Path = document.getElementById('working-directory-input').value;
        GoToDot(3);
    });
    document.getElementById('theme-next').addEventListener('click', function() {
        Theme = 'light';
        GoToDot(4);
    });
    document.getElementById('get-started-finish').addEventListener('click', function() {
        let remote = require('electron').remote;
        const {
            ipcRenderer
        } = require('electron');
        console.log('wrote');

        let conf = ipcRenderer.sendSync('getConfig');
        console.log('wrote');

        conf['firstUse'] = true;
        conf['directory'] = Path;
        conf['theme'] = Theme;
        console.log('wrote');

        ipcRenderer.sendSync('setConfig', conf);
        console.log('wrote');

        remote.getCurrentWindow().close();
    });
}

function GoToDot(dot) {
    switch (dot) {
        case 1:
        case 'hello':
            break;
        case 2:
        case 'working-directory':
            document.getElementById('progress-bar-hello').style.backgroundColor = '#878787';
            document.getElementById('hello').style.display = 'none';
            document.getElementById('working-directory').style.display = 'block';
            ProgressLine.style.right = Steps[1] + '%';
            break;
        case 3:
        case 'theme':
            document.getElementById('progress-bar-working-directory').style.backgroundColor = '#878787';
            document.getElementById('working-directory').style.display = 'none';
            document.getElementById('theme').style.display = 'block';
            ProgressLine.style.right = Steps[2] + '%';
            break;
        case 4:
        case 'get-started':
            document.getElementById('progress-bar-theme').style.backgroundColor = '#878787';
            document.getElementById('progress-bar-get-started').style.backgroundColor = '#878787';
            document.getElementById('theme').style.display = 'none';
            document.getElementById('get-started').style.display = 'block';
            ProgressLine.style.right = Steps[3] + '%';
            break;

    }
}
