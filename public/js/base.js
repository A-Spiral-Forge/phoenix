const navbtn = document.querySelector('.navbtn');
const root = document.querySelector(':root');
const overlay = document.querySelector('.overlay');

const toggleNavBar = (opened) => {
	navbtn.classList.toggle('open');
	overlay.classList.toggle('hidden');
	root.style.setProperty('--translate-page', `${opened ? '-200px' : '0px'}`);
};

navbtn.addEventListener('click', (e) => {
	toggleNavBar(navbtn.classList.contains('open'));
});

overlay.addEventListener('click', (e) => {
	toggleNavBar(navbtn.classList.contains('open'));
});
