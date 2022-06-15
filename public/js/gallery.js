// const root = document.querySelector(':root');
const imageOverlay = document.querySelector('.image--overlay--div');
const bigImage = document.querySelector('.image--big');
const smallImageSection = document.querySelector('.section--gallery');
const popUpTimeout = 0.5;

const toggleBigImage = (width) => {
	root.style.setProperty('--image-overlay-width', `${width}%`);
};

imageOverlay.addEventListener('click', (e) => {
	if (e.target.closest('img')) return;
	toggleBigImage(0);
});

smallImageSection.addEventListener('click', (e) => {
	const image = e.target.closest('img');
	if (!image) return;

	const imageSrc = image.getAttribute('src');
	bigImage.setAttribute('src', imageSrc);
	toggleBigImage(100);
});
