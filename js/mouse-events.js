function addMouseEvents() {
	document.getElementById('side-bar-books').addEventListener('click', function() {
		document.getElementById('books').style.display = 'block';
	});
	document.getElementById('recent-books-new').addEventListener('click', function() {
		let win;
		const electron = require('electron');
		const {
			BrowserWindow
		} = require('electron').remote;
		win = new BrowserWindow({
			width: 800,
			height: 600
		});
		win.loadURL(`file://${__dirname}/book-wizard/book-wizard.html`);
	});
}
