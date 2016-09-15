var BookWizardOpen = false;
var BookWizard;
document.getElementById('toolbar-newbook').addEventListener('click', function() {
	if (BookWizardOpen) {
		BookWizard.focus();
		return;
	}
	const {
		remote
	} = require('electron');
	const BrowserWindow = remote.BrowserWindow;
	BookWizard = new BrowserWindow({
		width: 800,
		height: 600
	});

	BookWizardOpen = true;

	BookWizard.on('close', function() {
		BookWizardOpen = false;
		bwizard = null;
	});
	BookWizard.loadURL(`file://${__dirname}/book-wizard/book-wizard.html`);
});
