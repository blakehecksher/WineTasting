const aromaWheel = {
	Primary   : {
		Flower        : {
			name  : 'Flower',
			notes : [
				'Iris',
				'Peony',
				'Elderflower',
				'Accacia',
				'Lilac',
				'Jasmine',
				'Honesysuckle',
				'Violet',
				'Lavender',
				'Rose',
				'Potpurri',
				'Hibiscus'
			]
		},
		Spice         : {
			name  : 'Spice',
			notes : [
				'White Pepper',
				'Red Pepper',
				'Black Pepper',
				'Cinnamon',
				'Anise',
				'Asian 5-Spice',
				'Fennel',
				'Eucalyptus',
				'Mint',
				'Thyme'
			]
		},
		Citrus        : {
			name  : 'Citrus',
			notes : [
				'Lime',
				'Lemon',
				'Grapefruit',
				'Orange',
				'Marmalade'
			]
		},
		TreeFruit     : {
			name  : 'Tree Fruit',
			notes : [
				'Quince',
				'Apple',
				'Pear',
				'Nectarine',
				'Peach',
				'Apricot',
				'Persimmon'
			]
		},
		TropicalFruit : {
			name  : 'Tropical Fruit',
			notes : [
				'Pineapple',
				'Mango',
				'Guava',
				'Kiwi',
				'Lychee',
				'Bubblegum'
			]
		},
		RedFruit      : {
			name  : 'Red Fruit',
			notes : [
				'Cranberry',
				'Red Plum',
				'Pomegranate',
				'Sour Cherry',
				'Strawberry',
				'Cherry',
				'Raspberry'
			]
		},
		BlackFruit    : {
			name  : 'Black Fruit',
			notes : [
				'Boysenberry',
				'Black Currant',
				'Black Cherry',
				'Plum',
				'Blackberry',
				'Blueberry',
				'Olive'
			]
		},
		DriedFruit    : {
			name  : 'Dried Fruit',
			notes : [
				'Raisin',
				'Fig',
				'Date',
				'Fruitcake'
			]
		},
		NobleRot      : {
			name  : 'Noble Rot',
			notes : [
				'Beeswax',
				'Ginger',
				'Saffron'
			]
		},
		Vegetable     : {
			name  : 'Vegetable',
			notes : [
				'Grass',
				'Tomato Leaf',
				'Gooseberry',
				'Bell Pepper',
				'Jalapeno',
				'Green Almond',
				'Tomato',
				'Sun-Dried Tomato',
				'Black Tea'
			]
		},
		Earth         : {
			name  : 'Earth',
			notes : [
				'Clay Pot',
				'Slate',
				'Wet Gravel',
				'Potting Soil',
				'Red Beet',
				'Volcanic Rock',
				'Petroleum'
			]
		}
	},
	Secondary : {
		Microbial : {
			name  : 'Microbial',
			notes : [
				'Mushroom',
				'Truffle',
				'Lager',
				'Sourdough',
				'Cream',
				'Butter'
			]
		}
	},
	Tertiary  : {
		OakAging     : {
			name  : 'Oak Aging',
			notes : [
				'Dill',
				'Smoke',
				'Cigar Box',
				'Baking Spices',
				'Coconut',
				'Vanilla'
			]
		},
		GeneralAging : {
			name  : 'General Aging',
			notes : [
				'Leather',
				'Cocoa',
				'Coffee',
				'Tobacco',
				'Nuts',
				'Dried Fruit'
			]
		}
	},
	Faults    : {
		TCA                : {
			name  : 'TCA',
			notes : [
				'Wet Dog',
				'Musty Cardboard'
			]
		},
		SulfidesMercaptans : {
			name  : 'Sulfides & Mercaptans',
			notes : [
				'Cat Pee',
				'Onion',
				'Garlic',
				'Match Box',
				'Burnt Rubber',
				'Boiled Eggs',
				'Cured Meat'
			]
		},
		Brettanomyces      : {
			name  : 'Brettanomyces',
			notes : [
				'Horse Manure',
				'Sweaty Leather Saddle',
				'Band-Aid',
				'Black Cardomom'
			]
		},
		Cooked             : {
			name  : 'Cooked',
			notes : [
				'Stewed Fruit',
				'Toffee'
			]
		},
		VolatileAcidity    : {
			name  : 'Volatile Acidity',
			notes : [
				'Balsamic',
				'Vinegar'
			]
		}
	}
};
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
