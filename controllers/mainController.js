const path = require('path');
const fs = require('fs');
const portfolioData = require('./../data/PortfolioData');

exports.getHomePage = (req, res, next) => {
	res.status(200).render('home', {
		title: 'Home',
		projects: portfolioData.projectsData.slice(0, 4),
	});
};

exports.getContactPage = (req, res, next) => {
	res.status(200).render('contact', { title: 'Contact' });
};

exports.getGalleryPage = (req, res, next) => {
	res.status(200).render('gallery', {
		title: 'Gallery',
		designs: portfolioData.galleryImages,
	});
};

exports.getAboutPage = (req, res, next) => {
	res.status(200).render('about', { title: 'About', details: {
		imagesSlides: portfolioData.aboutImages,
	}});
};

exports.getProjectsPage = (req, res, next) => {
	if (!req.query.tag || req.query.tag === '') req.query.tag = 'All';

	const projects = portfolioData.getProjectsByTag(req.query.tag);

	res.status(200).render('projects', {
		title: 'Projects',
		projects: projects,
		tags: portfolioData.projectTags,
	});
};

exports.getErrorPage = (req, res, next) => {
	const errorHeading = req.url ? req.url
		.split('/')[1]
		.split('-')
		.map((word) => word[0].toUpperCase() + word.slice(1))
		.join(' ') : 'Error';

	if (req.url.includes('under-construction')) {
		return res.status(404).render('error', {
			title: 'Under Construction',
			error: {
				heading: errorHeading,
				status: 404,
				message: 'This page is under construction. Please visit later.',
			},
		});
	}

	if (req.url.includes('link-not-available')) {
		return res.status(404).render('error', {
			title: 'Link Not Available',
			error: {
				heading: errorHeading,
				status: 404,
				message: 'This project is not live at this moment.',
			},
		});
	}

	res.status(404).render('error', {
		title: '404',
		error: {
			heading: errorHeading,
			status: 404,
			message: 'Page not found',
		},
	});
};
