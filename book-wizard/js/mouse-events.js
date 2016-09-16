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
		LoadTemplate();
	});
	document.getElementById('input-fields-wrapper-bottom').addEventListener('click', function() {
		var newdiv = document.createElement('div');
		newdiv.setAttribute('class', 'input-row property-holder');
		newdiv.innerHTML = "<div class='input-cell-l'><input class='json-input' name='property' type='text' /></div><div class='input-cell-r'><input class='json-input' name='value' type='text' /></div>";
		DOMInputFieldsWrapperBody.appendChild(newdiv);
	});
	document.getElementById('generate-button').addEventListener('click', function() {
		var jsons = [];
		let fields = document.getElementsByClassName('property-holder');
		for (let i = 0; i < fields.length; i++) {
			if (fields[i].children[0].children[0].value != "" && fields[i].children[1].children[0].value != "")
				jsons[fields[i].children[0].children[0].value] = fields[i].children[1].children[0].value;
		}
	});
}
