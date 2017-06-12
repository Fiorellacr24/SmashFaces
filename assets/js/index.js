'use strict';

const render = (root)=>{
	root.empty();
	const wrapper = $('<div class="wrapper"></div>');
	wrapper.append(Coder(_ => render(root)));
	root.append(wrapper);
};

const state = {
	mexico : mexico,
    peru : peru,
    sede : '',
    points : 0,
	selectedSede : null
};

var select = $('select');

$(_ => {
const root = $('.root');
render(root);
});