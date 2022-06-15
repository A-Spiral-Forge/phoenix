const tagForm = document.querySelector('.form--search');
const selectPicker = document.querySelector('#tags');
const dropdown = document.querySelector('.tags--select--custom');
const dropdownList = document.querySelector('.tags--select--custom ul');

selectPicker.value = document.querySelector('p.tags').dataset.value;

tagForm.addEventListener('click', (e) => {
	const el = e.target.closest('.tags--select--custom');
	if (!el) return;
	el.classList.toggle('collapse');
});

document.addEventListener('click', (e) => {
	const el = e.target.closest('.tags--select--custom');
	if (el) return;
	dropdown.classList.remove('collapse');
});

dropdownList.addEventListener('click', (e) => {
	const el = e.target.closest('.tags');
	if (!el) return;
	document.querySelector('p.tags').textContent = el.textContent;
	selectPicker.value = el.textContent;
});
