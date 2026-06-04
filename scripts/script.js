import * as content from './content.js';

let title = document.getElementById('title')
let aside = document.getElementsByTagName('aside')
let aboutMe = document.getElementsByClassName('aboutMe')
let projects = document.getElementsByClassName('projects')
let courses = document.getElementsByClassName('courses')
let network = document.getElementsByClassName('network')

let abbrPtbr = document.querySelector('#portugues-br abbr')
let abbrEng = document.querySelector('#english abbr')
let abbrNl = document.querySelector('#nederland abbr')


let aboutTxt = document.getElementById('about-txt')

let projectsTxt = document.getElementById('projectsTxt')

let planBDesc = document.getElementById('planBDesc')
let tasksDesc = document.getElementById('tasksDesc')
let loginScreen = document.getElementById('loginScreen') 
let loginDesc = document.getElementById('loginDesc')
let androidPage = document.getElementById('androidPage')
let androidDesc = document.getElementById('androidDesc')

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

    for (let elements of projects) {
        elements.innerHTML = content.projectsPtBr
    }

    for (let elements of courses) {
        elements.innerHTML = content.coursesPtBr
    }

    for (let elements of network) {
        elements.innerHTML = content.networkPtBr
    }

    abbrPtbr.title = 'Português'
    abbrEng.title = 'Inglês'
    abbrNl.title = 'Holandês'

    aboutTxt.innerHTML = content.aboutTxtPtBr
   
    projectsTxt.innerHTML = content.projectsTxtPtBr
    
    planBDesc.innerHTML = content.planBDescPtBr
    tasksDesc.innerHTML = content.tasksDescPtBr
    loginScreen.innerHTML = content.loginScreenPtBr
    loginDesc.innerHTML = content.loginDescPtBr
    androidPage.innerHTML = content.androidPagePtBr
    androidDesc.innerHTML = content.androidDescPtBr    
    
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

    for (let elements of projects) {
        elements.innerHTML = content.projectsEng
    }

    for (let elements of courses) {
        elements.innerHTML = content.coursesEng
    }

    for (let elements of network) {
        elements.innerHTML = content.networkEng
    }
    
    abbrPtbr.title = 'Portuguese'
    abbrEng.title = 'English'
    abbrNl.title = 'Dutch'
    
    aboutTxt.innerHTML = content.aboutTxtEng
    
    projectsTxt.innerHTML = content.projectsTxtEng
    
    planBDesc.innerHTML = content.planBDescEng
    tasksDesc.innerHTML = content.tasksDescEng
    loginScreen.innerHTML = content.loginScreenEng
    loginDesc.innerHTML = content.loginDescEng
    androidPage.innerHTML = content.androidPageEng
    androidDesc.innerHTML = content.androidDescEng
    
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

    for (let elements of projects) {
        elements.innerHTML = content.projectsNl
    }

    for (let elements of courses) {
        elements.innerHTML = content.coursesNl
    }

    for (let elements of network) {
        elements.innerHTML = content.networkNl
    }

    abbrPtbr.title = 'Portugees'
    abbrEng.title = 'Engels'
    abbrNl.title = 'Nederlands'

    aboutTxt.innerHTML = content.aboutTxtNl
    
    projectsTxt.innerHTML = content.projectsTxtNl
    planBDesc.innerHTML = content.planBDescNL
    tasksDesc.innerHTML = content.tasksDescNL
    loginScreen.innerHTML = content.loginScreenNL
    loginDesc.innerHTML = content.loginDescNL
    androidPage.innerHTML = content.androidPageNl
    androidDesc.innerHTML = content.androidDescNL

    coursesTxt.innerHTML = content.coursesTxtNl

    footerTxt.innerHTML = content.footerNl
}

window.updatePtbr = updatePtbr;
window.updateEng = updateEng;
window.updateNl = updateNl;


