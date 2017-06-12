'use strict';

const render = (root)=>{
	root.empty();
	const wrapper = $('<div class="wrapper"></div>');
	wrapper.append(Coder(_ => render(root)));
	root.append(wrapper);
};

const state = {
	coder : null,
	selectedSede : null
};

var select = $('select');

$(_ => {
	getJSON('coders.json', (err, json)=>{
		if (err){ return alert(err.message);}
		state.coder = json;
		const root = $('.root');
		render(root);
	});
});