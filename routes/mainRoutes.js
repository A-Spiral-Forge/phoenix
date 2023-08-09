const express = require('express');
const mainController = require('./../controllers/mainController');

const router = express.Router();

router.get('/', mainController.getHomePage);
router.get('/contact', mainController.getContactPage);
router.get('/designs', mainController.getGalleryPage);
router.get('/about', mainController.getAboutPage);
router.get('/projects', mainController.getProjectsPage);

router.get('*', mainController.getErrorPage);

module.exports = router;
