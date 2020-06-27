import {aromaWheel} from './aromawheel.js';

// Write tasting note categories
for (const element in aromaWheel) {
	document.getElementById('notes').innerHTML +=
		'<ul class="firstNotes" id="' +
		element.toLowerCase() +
		'"><h3>' +
		element +
		'</h3><ul class="notes"></ul></ul>';
}
// Write Primary notes
for (const element in aromaWheel.Primary) {
	document.getElementById('primary').getElementsByClassName('notes')[0].innerHTML +=
		'<li><h4>' +
		aromaWheel.Primary[element].name +
		'</h4><ul id="' +
		aromaWheel.Primary[element].name +
		'"><li>' +
		aromaWheel.Primary[element].notes.join('<li>') +
		'</li></li></ul>';
}
// Write Secondary notes
for (const element in aromaWheel.Secondary) {
	document.getElementById('secondary').getElementsByClassName('notes')[0].innerHTML +=
		'<li><h4>' +
		aromaWheel.Secondary[element].name +
		'</h4><ul id="' +
		aromaWheel.Secondary[element].name +
		'"><li>' +
		aromaWheel.Secondary[element].notes.join('<li>') +
		'</li></li></ul>';
}
// Write Tertiary notes
for (const element in aromaWheel.Tertiary) {
	document.getElementById('tertiary').getElementsByClassName('notes')[0].innerHTML +=
		'<li><h4>' +
		aromaWheel.Tertiary[element].name +
		'</h4><ul id="' +
		aromaWheel.Tertiary[element].name +
		'"><li>' +
		aromaWheel.Tertiary[element].notes.join('<li>') +
		'</li></li></ul>';
}
// Write Fault notes
for (const element in aromaWheel.Faults) {
	document.getElementById('faults').getElementsByClassName('notes')[0].innerHTML +=
		'<li><h4>' +
		aromaWheel.Faults[element].name +
		'</h4><ul id="' +
		aromaWheel.Faults[element].name +
		'"><li>' +
		aromaWheel.Faults[element].notes.join('<li>') +
		'</li></li></ul>';
}
