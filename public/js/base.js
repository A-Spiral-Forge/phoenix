exports.toggleNavBar = (opened, DOM) => {
	DOM.navbtn.classList.toggle('open');
	DOM.overlay.classList.toggle('hidden');
	DOM.root.style.setProperty(
		'--translate-page',
		`${opened ? '-200px' : '0px'}`
	);
};
