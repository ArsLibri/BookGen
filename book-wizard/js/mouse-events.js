function AddTemplateMouseEvent() {
	let templates = document.getElementsByClassName('book-template');
	for (let i = 0; i < templates.length; i++)
		templates[i].addEventListener('click', function() {
			SelectTemplate(this);
		});
	document.getElementById('book-template-toolbar-cancel').addEventListener('click', function() {
		const remote = require('electron').remote;
		remote.getCurrentWindow().close();
	});
	document.getElementById('book-template-toolbar-next').addEventListener('click', function() {
		if (Selected == undefined || Selected == null) return;
		document.getElementById('wrapper1').style.display = 'none';
		document.getElementById('wrapper2').style.display = 'block';
	});
	document.getElementById('input-fields-wrapper-bottom').addEventListener('click', function() {
		DOMInputFieldsWrapperBody.innerHTML += "<div class='input-row'><div class='input-cell-l'><input class='json-input' name='property' type='text' /></div><div class='input-cell-r'><input class='json-input' name='value' type='text' /></div></div>"
	});
	document.getElementById('generate-button').addEventListener('click', function() {
		let jsons = [];
		let fields = document.getElementsByClassName('input-row');
		for (let field in fields) {

		}
	});
}
