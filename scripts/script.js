import * as content from './content.js';

let title = document.getElementById('title')
let aside = document.getElementsByTagName('aside')
let aboutMe = document.getElementsByClassName('aboutMe')
let skills = document.getElementsByClassName('skills')
let projects = document.getElementsByClassName('projects')
let courses = document.getElementsByClassName('courses')
let network = document.getElementsByClassName('network')

let aboutTxt = document.getElementById('about-txt')
let projectsTxt = document.getElementById('projectsTxt')
let androidPage = document.getElementById('androidPage')
let cordelProject = document.getElementById('cordelProject')
let loginScreen = document.getElementById('loginScreen') 
let coursesTxt = document.getElementById('coursesTxt')

let footerTxt = document.getElementById('footerTxt')

function updatePtbr() {
    title.innerHTML = content.titlePtbr

    for (let elements of aside) {
        elements.innerHTML = content.detailsPtBr
    }

    for (let elements of aboutMe) {
        elements.innerHTML = content.aboutMePtBr
    }

    for (let elements of skills) {
        elements.innerHTML = content.skillsPtBr
    }

    for (let elements of projects) {
        elements.innerHTML = content.projectsPtBr
    }

    for (let elements of courses) {
        elements.innerHTML = content.coursesPtBr
    }

    for (let elements of network) {
        elements.innerHTML = content.networkPtBr
    }

    aboutTxt.innerHTML = content.aboutTxtPtBr
    projectsTxt.innerHTML = content.projectsTxtPtBr
    androidPage.innerHTML = content.androidPagePtBr
    cordelProject.innerHTML = content.cordelProjectPtBr
    loginScreen.innerHTML = content.loginScreenPtBr
    coursesTxt.innerHTML = content.coursesTxtPtBr

    footerTxt.innerHTML = content.footerPtBr
}

function updateEng() {
    title.innerHTML = content.titleEng

    for (let elements of aside) {
        elements.innerHTML = content.detailsEng
    }
    for (let elements of aboutMe) {
        elements.innerHTML = content.aboutMeEng
    }

    for (let elements of skills) {
        elements.innerHTML = content.skillsEng
    }

    for (let elements of projects) {
        elements.innerHTML = content.projectsEng
    }

    for (let elements of courses) {
        elements.innerHTML = content.coursesEng
    }

    for (let elements of network) {
        elements.innerHTML = content.networkEng
    }

    aboutTxt.innerHTML = content.aboutTxtEng
    projectsTxt.innerHTML = content.projectsTxtEng
    androidPage.innerHTML = content.androidPageEng
    cordelProject.innerHTML = content.cordelProjectEng
    loginScreen.innerHTML = content.loginScreenEng
    coursesTxt.innerHTML = content.coursesTxtEng

    footerTxt.innerHTML = content.footerEng
}

function updateNl() {
    title.innerHTML = content.titleNl

    for (let elements of aside) {
        elements.innerHTML = content.detailsNl
    }
    for (let elements of aboutMe) {
        elements.innerHTML = content.aboutMeNl
    }

    for (let elements of skills) {
        elements.innerHTML = content.skillsNl
    }

    for (let elements of projects) {
        elements.innerHTML = content.projectsNl
    }

    for (let elements of courses) {
        elements.innerHTML = content.coursesNl
    }

    for (let elements of network) {
        elements.innerHTML = content.networkNl
    }

    aboutTxt.innerHTML = content.aboutTxtNl
    projectsTxt.innerHTML = content.projectsTxtNl
    androidPage.innerHTML = content.androidPageNl
    cordelProject.innerHTML = content.cordelProjectNl
    loginScreen.innerHTML = content.loginScreenNL
    coursesTxt.innerHTML = content.coursesTxtNl

    footerTxt.innerHTML = content.footerNl
}

window.updatePtbr = updatePtbr;
window.updateEng = updateEng;
window.updateNl = updateNl;


