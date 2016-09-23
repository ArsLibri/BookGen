function InitContent() {
    document.getElementById('working-directory-browse').addEventListener('click', function() {
        let dialog = require('electron').remote.dialog;
        let path = dialog.showOpenDialog({
            'title': 'Select working directory',
            'properties': ['openDirectory']
        });
        if (path != undefined) {
            document.getElementById('working-directory-input').value = path;
            document.getElementById('working-directory-next').setAttribute('enabled', 'true');
        }
    });
    document.getElementById('working-directory-input').addEventListener('change', function() {
        if (this.value == '') document.getElementById('working-directory-next').setAttribute('enabled', 'false');
        else document.getElementById('working-directory-next').setAttribute('enabled', 'true');
    });
    document.getElementById('working-directory-input').addEventListener('keydown', function() {
        if (this.value == '') document.getElementById('working-directory-next').setAttribute('enabled', 'false');
        else document.getElementById('working-directory-next').setAttribute('enabled', 'true');
    });
    document.getElementById('working-directory-input').addEventListener('paste', function() {
        if (this.value == '') document.getElementById('working-directory-next').setAttribute('enabled', 'false');
        else document.getElementById('working-directory-next').setAttribute('enabled', 'true');
    });
    document.getElementById('working-directory-input').addEventListener('input', function() {
        if (this.value == '') document.getElementById('working-directory-next').setAttribute('enabled', 'false');
        else document.getElementById('working-directory-next').setAttribute('enabled', 'true');
    });
}
