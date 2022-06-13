const path = require('path');
const fs = require('fs');

const projectMiniData = JSON.parse(
	fs.readFileSync(path.join(__dirname, './../data/projects.json'), 'utf-8')
);

exports.getHomePage = (req, res, next) => {
	// console.log(projectMiniData.projectsmini);

	res.status(200).render('home', {
		title: 'Home',
		projects: projectMiniData.projectsmini,
	});
};

exports.getContactPage = (req, res, next) => {
	res.status(200).render('contact', { title: 'Contact' });
};
