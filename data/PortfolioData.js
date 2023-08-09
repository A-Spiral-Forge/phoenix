const path = require('path');
const fs = require('fs');

class PortfolioData {
    constructor() {
        this.projectsData = JSON.parse(this.getProjectsData());
        this.projectTags = this.getTagsForProjects(this.projectsData);
        this.galleryImages = this.getGalleryPageData();
        this.aboutImages = this.getAboutImages();
    }
    
    getProjectsData() {
        return fs.readFileSync(path.join(__dirname, './../data/projects.json'), 'utf-8');
    }

    getTagsForProjects(projectsData) {
        return projectsData.reduce((acc, project) => {
            project.keywords.forEach((keyword) => {
                if (!acc.includes(keyword)) acc.push(keyword);
            });
            return acc;
        }, []).sort();
    }

    getProjectsByTag(tag) {
        return this.projectsData.filter((project) => project.keywords.includes(tag));
    }

    getGalleryPageData() {
        const galleryImagesDir = path.join(__dirname, './../public/images/designs');
        const galleryImages = fs.readdirSync(galleryImagesDir);
        return galleryImages;
    }

    getAboutImages() {
        const aboutImagesDir = path.join(__dirname, './../public/images/about');
        const aboutImages = fs.readdirSync(aboutImagesDir);
        return aboutImages;
    }
}

module.exports = new PortfolioData();