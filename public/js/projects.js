exports.changeTag = (el) => {
	const selectPicker = document.querySelector('#tags');
	selectPicker.value = document.querySelector('p.tags').dataset.value;
	document.querySelector('p.tags').textContent = el.textContent;
	selectPicker.value = el.textContent;
};
