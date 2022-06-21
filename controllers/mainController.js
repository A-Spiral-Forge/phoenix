const path = require('path');
const fs = require('fs');

const projectMiniData = JSON.parse(
	fs.readFileSync(path.join(__dirname, './../data/projects.json'), 'utf-8')
);

const designsData = JSON.parse(
	fs.readFileSync(
		path.join(__dirname, './../data/gallery-images.json'),
		'utf-8'
	)
);

const aboutData = JSON.parse(
	fs.readFileSync(path.join(__dirname, './../data/about-me.json'), 'utf-8')
);

exports.getHomePage = (req, res, next) => {
	// console.log(projectMiniData.projectsmini.slice(0, 4));

	res.status(200).render('home', {
		title: 'Home',
		projects: projectMiniData.projectsmini.slice(0, 4),
	});
};

exports.getContactPage = (req, res, next) => {
	res.status(200).render('Contact', { title: 'Contact' });
};

exports.getGalleryPage = (req, res, next) => {
	res.status(200).render('Gallery', {
		title: 'Gallery',
		designs: designsData,
	});
};

exports.getAboutPage = (req, res, next) => {
	res.status(200).render('about', { title: 'About', details: aboutData });
};

exports.getProjectsPage = (req, res, next) => {
	if (!req.query.tag || req.query.tag === '') req.query.tag = 'All';

	const projects = projectMiniData.projectsmini.filter((project) =>
		project.keywords.includes(req.query.tag)
	);

	res.status(200).render('projects', {
		title: 'Projects',
		projects: projects,
		tags: projectMiniData.tags,
	});
};

exports.getGalleryPage = (req, res, next) => {
	res.status(200).render('gallery', {
		title: 'Gallery',
		designs: designsData,
	});
};

exports.getAboutPage = (req, res, next) => {
	res.status(200).render('about', { title: 'About', details: aboutData });
};

exports.getProjectsPage = (req, res, next) => {
	if (!req.query.tag || req.query.tag === '') req.query.tag = 'All';

	const projects = projectMiniData.projectsmini.filter((project) =>
		project.keywords.includes(req.query.tag)
	);

	res.status(200).render('projects', {
		title: 'Projects',
		projects: projects,
		tags: projectMiniData.tags,
	});
};
