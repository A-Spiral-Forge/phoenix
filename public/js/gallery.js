const toggleBigImage = (width, DOM) => {
	DOM.root.style.setProperty('--image-overlay-width', `${width}%`);
};

exports.openImage = (DOM) => {
	const imageSrc = DOM.image.getAttribute('src');
	DOM.bigImage.setAttribute('src', imageSrc);
	toggleBigImage(100, DOM);
};

exports.closeImage = (DOM) => {
	toggleBigImage(0, DOM);
};
