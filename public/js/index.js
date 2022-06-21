import '@babel/polyfill';
import Swiper, { Navigation, Pagination } from 'swiper/bundle';
import 'swiper/swiper-bundle.min.css';
import { toggleNavBar } from './base';
import { openImage, closeImage } from './gallery';
import { changeTag } from './projects';

// Global
const root = document.querySelector(':root');
const overlay = document.querySelector('.overlay');

// Base
const navbtn = document.querySelector('.navbtn');

// Gallery
const imageOverlay = document.querySelector('.image--overlay--div');
const bigImage = document.querySelector('.image--big');
const smallImageSection = document.querySelector('.section--gallery');
// const popUpTimeout = 0.5;

// Projects
const tagForm = document.querySelector('.form--search');
const selectPicker = document.querySelector('#tags');
const dropdown = document.querySelector('.tags--select--custom');
const dropdownList = document.querySelector('.tags--select--custom ul');

// About
const swiperDiv = document.querySelector('.mySwiper');

if (navbtn)
	navbtn.addEventListener('click', (e) => {
		toggleNavBar(navbtn.classList.contains('open'), {
			navbtn,
			overlay,
			root,
		});
	});

if (overlay)
	overlay.addEventListener('click', (e) => {
		toggleNavBar(navbtn.classList.contains('open'), {
			navbtn,
			overlay,
			root,
		});
	});

if (smallImageSection)
	smallImageSection.addEventListener('click', (e) => {
		const image = e.target.closest('img');
		if (!image) return;
		openImage({ bigImage, image, root });
	});

if (imageOverlay)
	imageOverlay.addEventListener('click', (e) => {
		if (e.target.closest('img')) return;
		closeImage({ root });
	});

if (tagForm)
	tagForm.addEventListener('click', (e) => {
		const el = e.target.closest('.tags--select--custom');
		if (!el) return;
		el.classList.toggle('collapse');
	});

if (dropdown)
	document.addEventListener('click', (e) => {
		const el = e.target.closest('.tags--select--custom');
		if (el) return;
		dropdown.classList.remove('collapse');
	});

if (dropdownList)
	dropdownList.addEventListener('click', (e) => {
		const el = e.target.closest('.tags');
		if (!el) return;
		changeTag(el);
	});

if (swiperDiv) {
	const swiper = new Swiper('.mySwiper', {
		effect: 'flip',
		grabCursor: true,
		loop: true,
		modules: [Navigation, Pagination],
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});
}
