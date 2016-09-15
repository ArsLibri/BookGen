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
		DOMBookTemplateHolder.innerHTML += "<div class='book-template' templateID='" + i + "'>" + Templates[i].templateName + "</div>";
	}
}

function SelectTemplate(dom) {
	document.getElementById('book-template-toolbar-next').setAttribute('enabled', 'true');
	if (Selected != undefined) Selected.style.border = 'solid 1px #EAEAEA';
	Selected = dom;
	dom.style.border = 'solid 1px #E85367';
}
