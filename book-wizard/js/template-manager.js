var Selected;

var Templates = [];

function AddTemplates() {
	const fs = require('fs')
	let dir = fs.readdirSync('book-wizard/templates');
	for (let i = 0; i < dir.length; i++) {
		let data = fs.readFileSync('book-wizard/templates/' + dir[i] + '/' + dir[i] + '.json');
		let json = JSON.parse(data);
		Templates.push(json);
	}

	let DOMBookTemplateHolder = document.getElementById('book-template-holder');
	for (let i = 0; i < Templates.length; i++) {
		DOMBookTemplateHolder.innerHTML += "<div class='book-template' templateID='" + i + "'>" + Templates[i].name + "</div>";
	}
}

function SelectTemplate(dom) {
	document.getElementById('book-template-toolbar-next').setAttribute('enabled', 'true');
	if (Selected != undefined) Selected.style.border = 'solid 1px #EAEAEA';
	Selected = dom;
	dom.style.border = 'solid 1px #E85367';
}

function LoadTemplate() {
	let jsonchosen = Templates[Selected.getAttribute('templateID')];
	Templates = [];
	for (let jsonfield in jsonchosen) {
		var newdiv = document.createElement('div');
		newdiv.setAttribute('class', 'input-row property-holder');
		newdiv.innerHTML = "<div class='input-cell-l'><input class='json-input' name='property' type='text' value='" + jsonfield + "'/></div><div class='input-cell-r'><input class='json-input' name='value' type='text' value='" + jsonchosen[jsonfield] + "' /></div>";
		DOMInputFieldsWrapperBody.appendChild(newdiv);
	}
}
